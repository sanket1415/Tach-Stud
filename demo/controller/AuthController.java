package com.example.demo.controller;

import com.example.demo.dto.LoginRequest;
import com.example.demo.model.Student.Student;
import com.example.demo.model.Teacher.Teacher;
import com.example.demo.repository.StudentRepository;
import com.example.demo.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        // Check if user is a teacher
        Teacher teacher = teacherRepository.findByEmail(email);
        if (teacher != null && teacher.getPassword().equals(password)) {
            return ResponseEntity.ok("Teacher Login Successful");
        }

        // Check if user is a student
        Student student = studentRepository.findByEmail(email);
        if (student != null && student.getPassword().equals(password)) {
            return ResponseEntity.ok("Student Login Successful");
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
    }
}

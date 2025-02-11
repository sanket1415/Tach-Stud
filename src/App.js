import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import TeacherLogin from './components/TeacherLogin';
import StudentLogin from './components/StudentLogin';
import TeacherSignUp from './components/TeacherSignUp';
import StudentSignUp from './components/StudentSignUp';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',  
    lastName: '',
    email: '',
    phone: '',
    gender: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="app-container container-fluid">
      {currentPage === "home" && (
        <Home
          setIsTeacherLogin={() => setCurrentPage("teacherLogin")}
          setIsStudentLogin={() => setCurrentPage("studentLogin")}
        />
      )}
      {currentPage === "teacherLogin" && (
        <TeacherLogin
          setIsTeacherLogin={() => setCurrentPage("home")}
          setIsSignUp={() => setCurrentPage("teacherSignUp")}
          handleInputChange={handleInputChange}
          formData={formData}
        />
      )}
      {currentPage === "studentLogin" && (
        <StudentLogin
          setIsStudentLogin={() => setCurrentPage("home")}
          setIsSignUp={() => setCurrentPage("studentSignUp")}
          handleInputChange={handleInputChange}
          formData={formData}
        />
      )}
      {currentPage === "teacherSignUp" && (
        <TeacherSignUp
          setIsTeacherSignUp={() => setCurrentPage("home")}
          handleInputChange={handleInputChange}
          formData={formData}
        />
      )}
      {currentPage === "studentSignUp" && (
        <StudentSignUp
          setIsStudentSignUp={() => setCurrentPage("home")}
          handleInputChange={handleInputChange}
          formData={formData}
        />
      )}
    </div>
  );
}

export default App;
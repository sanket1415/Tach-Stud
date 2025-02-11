import React from 'react';

const StudentSignUp = ({ setIsStudentSignUp, handleInputChange, formData = {}, errors = {} }) => {
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/signup/student', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Student Signup failed');
      }

      const data = await response.text();
      console.log('Student Signup Success:', data);
      alert(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Student Signup Failed! Please try again.');
    }
  };

  return (
    <div className="signup-page card mx-auto my-5" style={{ maxWidth: '600px' }}>
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Student Sign Up</h2>
        <form onSubmit={handleSignupSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName || ''}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName || ''}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password || ''}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.password && <p className="text-danger">{errors.password}</p>}
          </div>
          <button className="btn btn-primary w-100 mt-3" type="submit">Sign Up</button>
        </form>
        <button className="btn btn-secondary w-100 mt-3" onClick={() => setIsStudentSignUp(false)}>Back to Home</button>
      </div>
    </div>
  );
};

export default StudentSignUp;
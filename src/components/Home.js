const Home = ({ setIsTeacherLogin, setIsStudentLogin }) => {
  return (
    <div className="homepage text-center">
      <h1 className="mb-4">Welcome To School Management System...</h1>
      <div className="logo-container d-flex justify-content-center mb-4">
        <div 
          className="teachlogo rounded-circle overflow-hidden mx-3"
          style={{ backgroundImage: "url('https://randomuser.me/api/portraits/men/1.jpg')" }}
        ></div>
        <div 
          className="studlogo rounded-circle overflow-hidden mx-3"
          style={{ backgroundImage: "url('https://randomuser.me/api/portraits/women/1.jpg')" }}
        ></div>
      </div>
      <button onClick={() => setIsTeacherLogin(true)} className="btn btn-primary btn-lg mx-2">Teacher Login</button>
      <button onClick={() => setIsStudentLogin(true)} className="btn btn-success btn-lg mx-2">Student Login</button>
    </div>
  );
};

export default Home;
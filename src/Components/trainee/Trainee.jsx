import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';
const Trainee = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen">
        <h1 className="text-3xl font-bold text-center text-blue-600 mt-8">
          Welcome to Trainee Login
        </h1>
        <div>
          <img
            src="https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?w=600"
            alt="Presentation"
          />
        </div>
        <div>
          <Link to = "/trainelogin">
          
          <div className='btn'>
            <span className="btn">Login now</span>
          </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Trainee;

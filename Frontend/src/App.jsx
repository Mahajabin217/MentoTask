import React from 'react';
import Header from './components/Header';
import EmployeeManagement from './components/EmployeeManagement';
import TaskManagement from './components/TaskManagement';
import { useState } from 'react';
import { useEffect } from 'react';


const App = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/api/emp/empList')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch employees');
        return response.json();
      })
      .then((data) => {
        setEmployees(data);
        console.log("Employee data: ", data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [])

  return (
    <div className='bg-black h-screen'>
      <Header></Header>
      <div className='w-10/12 m-auto flex justify-between'>
        <EmployeeManagement></EmployeeManagement>
        <TaskManagement employees={employees} />
      </div>
    </div>
  )
};

export default App;
import React from 'react';
import Header from './components/Header';
import EmployeeManagement from './components/EmployeeManagement';
import TaskManagement from './components/TaskManagement';

const App = () => (
  <div className='bg-black h-screen'>
    <Header></Header>
    <div className='w-10/12 m-auto flex justify-between'>
      <EmployeeManagement></EmployeeManagement>
      <TaskManagement />
    </div>
  </div>
);

export default App;
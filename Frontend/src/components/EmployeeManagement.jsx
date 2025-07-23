import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const EmployeeManagement = () => {

    const [empId, setEmpId] = useState('');
    const [empName, setEmpName] = useState('');
    const [empSkills, setEmpSkills] = useState('');

    const handleAddEmployee = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/api/emp/createEmp', { empId, empName, empSkills });
            setEmpId('');
            setEmpName('');
            setEmpSkills('');
            console.log('Employee added successfully', res.data);
        } catch (error) {
            console.log('Error adding employee:', error);
        }
    }

    return (
        <div className='emp-wrapper text-violet-500 bg-gray-200 shadow-md rounded p-5 w-1/3'>
            <h2 className='text-3xl text-center font-semibold mb-5'>Add Employee</h2>

            <div className='input-group mb-4'>
                <label className='block mb-2'>Enter Employee ID</label>
                <input type="text"
                    placeholder='Enter Employee ID'
                    className='border rounded w-full p-2'
                    value={empId}
                    onChange={(e) => setEmpId(e.target.value)}
                />
            </div>

            <div className='input-group mb-4'>
                <label className='block mb-2'>Enter Employee Name</label>
                <input type="text"
                    placeholder='Enter Employee Name'
                    className='border rounded w-full p-2'
                    value={empName}
                    onChange={(e) => setEmpName(e.target.value)}
                />
            </div>

            <div className='input-group mb-4'>
                <label className='block mb-2'>Enter Employee Skills</label>
                <input type="text"
                    placeholder='Enter Employee Skills'
                    className='border rounded w-full p-2'
                    value={empSkills}
                    onChange={(e) => setEmpSkills(e.target.value)}
                />
            </div>

            <div className='btn-group text-center'>
                <button className='w-1/2 bg-violet-500 text-white py-3 rounded'
                    onClick={handleAddEmployee}>
                    Add New Employee
                </button>
            </div>
        </div>
    );
};

export default EmployeeManagement;
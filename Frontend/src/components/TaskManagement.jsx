import React from 'react';

const TaskManagement = ({ employees = [] }) => {
    return (
        <div className='task-wrapper text-violet-500 bg-gray-200 shadow-md rounded p-5 w-7/12'>
            <h2 className='text-3xl text-center font-semibold mb-5'>Assign Task</h2>

            <div className='input-group mb-4'>
                <label className='block mb-2'>Enter Task Title</label>
                <input type="text"
                    placeholder='Enter Task Title'
                    className='border rounded w-full p-2' />
            </div>

            <div className='input-group mb-4'>
                <label className='block mb-2'>Enter Description</label>
                <textarea type="text"
                    placeholder='Enter Description'
                    className='border rounded w-full p-2' />
            </div>

            <div className='input-group mb-4'>
                <label className='block mb-2'>Select Employee</label>
                <select className='border rounded w-full p-2'>
                    <option>Select Employee</option>
                    {
                        employees.map(emp => (
                            <option key={emp.empId} value={emp.empName}>
                                {emp.empName}
                            </option>
                        ))
                    }
                </select>
            </div>

            <div className='btn-group text-center'>
                <button className='w-1/2 bg-violet-500 text-white py-3 rounded'>
                    Add New Employee
                </button>
            </div>
        </div>
    );
};

export default TaskManagement;
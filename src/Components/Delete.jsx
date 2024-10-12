import React from 'react';

const DeleteEmployee = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-md max-w-sm">
        <h2 className="text-center text-2xl font-bold text-blue-700 mb-4">Delete Employee Record</h2>
        <form action="/delete_employee" method="POST">
          <div className="mb-4">
            <label htmlFor="employee_id" className="block text-gray-700 mb-2">Employee ID:</label>
            <input
              type="text"
              id="employee_id"
              name="employee_id"
              placeholder="Enter Employee ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <input
            type="submit"
            value="Delete Employee"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default DeleteEmployee;

import React from 'react';

const UpdateEmployee = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-md max-w-md">
        <h2 className="text-center text-2xl font-bold text-blue-700 mb-4">Update Employee Record</h2>
        <form action="/update_employee" method="POST">
          <div className="mb-4">
            <label htmlFor="employeeId" className="block text-gray-700 mb-2">Employee ID:</label>
            <input
              type="text"
              id="employeeId"
              name="employeeId"
              placeholder="Enter Employee ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="attribute" className="block text-gray-700 mb-2">Select Attribute to Update:</label>
            <select
              id="attribute"
              name="attribute"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">--Select Attribute--</option>
              <option value="address">Address</option>
              <option value="phoneNo">Phone Number</option>
              <option value="email">Email</option>
              <option value="departmentId">Department ID</option>
              <option value="salary">Salary</option>
              <option value="taxAmount">Tax Amount</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="newValue" className="block text-gray-700 mb-2">Enter New Value:</label>
            <input
              type="text"
              id="newValue"
              name="newValue"
              placeholder="Enter New Value"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <input
            type="submit"
            value="Update"
            className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployee;

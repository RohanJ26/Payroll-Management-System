import React from 'react';

const InsertEmployee = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-md max-w-md">
        <h2 className="text-center text-2xl font-bold text-blue-700 mb-4">Add Employee Record</h2>
        <form action="/add_employee" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Employee Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Employee Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="id" className="block text-gray-700 mb-2">Employee ID:</label>
            <input
              type="number"
              id="id"
              name="id"
              placeholder="Enter Employee ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 mb-2">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter Address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter Phone Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="department" className="block text-gray-700 mb-2">Department ID:</label>
            <input
              type="text"
              id="department"
              name="department"
              placeholder="Enter Department ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="salary" className="block text-gray-700 mb-2">Salary:</label>
            <input
              type="number"
              id="salary"
              name="salary"
              placeholder="Enter Salary"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <input
            type="submit"
            value="Add Employee"
            className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default InsertEmployee;

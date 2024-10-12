import React from 'react';

const SearchEmployee = () => {
  return (
    <div className="p-8 pt-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-md max-w-sm">
        <h2 className="text-center text-2xl font-bold text-blue-700 mb-4">Search Employee</h2>
        <form action="/search_employee" method="GET">
          <div className="mb-4">
            <label htmlFor="employee_id" className="block text-gray-700 mb-2">Employee ID:</label>
            <input
              type="text"
              id="employee_id"
              name="employee_id"
              placeholder="Enter Employee ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="text-center text-gray-600 font-light mb-4" id="or">or</div>
          <div className="mb-4">
            <label htmlFor="employee_name" className="block text-gray-700 mb-2">Employee Name:</label>
            <input
              type="text"
              id="employee_name"
              name="employee_name"
              placeholder="Enter Employee Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <input
            type="submit"
            value="Search"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

export default SearchEmployee;

import React from 'react';
import { useState } from 'react';

const Home = () => {
  // State to track the visibility of each answer
  const [openFAQ, setOpenFAQ] = useState(null);

  // Function to toggle the visibility of the answer
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl text-center mb-4 text-blue-700 font-bold">
        Welcome to Payroll Management System
      </h2>

      {/* Cards Section */}
      <div className="flex justify-around flex-wrap">
        
        {/* Problem Card */}
        <div className="bg-white shadow-lg m-7 rounded-lg p-6 flex flex-col justify-center items-center min-h-72 max-w-[70%] md:max-w-[40%] border border-gray-300 transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl font-bold mb-2 text-black">Problem</h3>
          <p className="text-center text-gray-600">
            Managing payroll manually is a tedious and error-prone process. HR teams face challenges with accurate salary calculations, tax deductions, and overtime, while also ensuring compliance with government regulations. These manual processes often lead to mistakes, delayed payments, and employee dissatisfaction.
          </p>
        </div>

        {/* Why It’s a Problem Card */}
        <div className="bg-white shadow-lg m-7 rounded-lg p-6 flex flex-col justify-center items-center min-h-72 max-w-[70%] md:max-w-[40%] border border-gray-300 transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl font-bold mb-2 text-black">Why It’s a Problem</h3>
          <p className="text-center text-gray-600">
            Manual payroll is inefficient and error-prone, leading to delayed payments or incorrect deductions. This can frustrate employees and harm company morale. Mistakes in tax calculations can also result in legal penalties and non-compliance with tax laws. HR teams end up spending excessive time on repetitive tasks, reducing their ability to focus on strategic initiatives that improve the workplace.
          </p>
        </div>

        {/* Solution Card */}
        <div className="bg-white shadow-lg m-7 rounded-lg p-6 flex flex-col justify-center items-center min-h-72 max-w-[70%] md:max-w-[40%] border border-gray-300 transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl font-bold mb-2 text-black">Solution</h3>
          <p className="text-center text-gray-600">
            A Payroll Management System automates salary calculations, tax deductions, and generates payroll reports. It ensures compliance with legal standards and tracks employee attendance, leave, and bonuses automatically. This system reduces human error, improves efficiency, and allows employees to access their pay details through an online portal. It frees up HR resources and simplifies payroll management for businesses.
          </p>
        </div>

        {/* Target Audience Card */}
        <div className="bg-white shadow-lg m-7 rounded-lg p-6 flex flex-col justify-center items-center min-h-72 max-w-[70%] md:max-w-[40%] border border-gray-300 transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl font-bold mb-2 text-black">Target Audience</h3>
          <p className="text-center text-gray-600">
            The system is ideal for small to medium businesses, HR departments, and payroll managers. These organizations want to reduce errors, streamline payroll processes, and ensure compliance with tax regulations. The system is particularly helpful for businesses that don’t have dedicated payroll staff and need efficient tools to manage payroll accurately and effectively.
          </p>
        </div>

        {/* Expected Outcome Card */}
        <div className="bg-white shadow-lg m-7 rounded-lg p-6 flex flex-col justify-center items-center min-h-72 max-w-[70%] md:max-w-[40%] border border-gray-300 transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl font-bold mb-2 text-black">Expected Outcome</h3>
          <p className="text-center text-gray-600">
            Businesses can expect faster payroll processing, reduced errors, and better compliance with tax laws. Employees will receive accurate and timely payments, leading to higher job satisfaction. HR teams will save time, focus on core tasks, and avoid legal issues caused by payroll mistakes. Overall, the system enhances operational efficiency, reduces costs, and improves transparency in payroll processes.
          </p>
        </div>

      </div>

      {/* FAQs Section */}
      <div className="p-8">
      <h3 className="text-xl font-bold mb-4 text-blue-700">Frequently Asked Questions</h3>

      <div className="space-y-4">
        
        {/* Question 1 */}
        <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-gray-50">
          <div 
            className="flex justify-between items-center cursor-pointer text-black"
            onClick={() => toggleFAQ(1)}
          >
            <h4 className="text-lg font-medium">What is Payroll Management?</h4>
            <span>{openFAQ === 1 ? '▲' : '▼'}</span>
          </div>
          {openFAQ === 1 && (
            <p className="mt-2 text-gray-600">
              Payroll management is the process of handling employee payments, tax deductions, and more.
            </p>
          )}
        </div>

        {/* Question 2 */}
        <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-gray-50">
          <div 
            className="flex justify-between items-center cursor-pointer text-black"
            onClick={() => toggleFAQ(2)}
          >
            <h4 className="text-lg font-medium">How can I search for an employee's details?</h4>
            <span>{openFAQ === 2 ? '▲' : '▼'}</span>
          </div>
          {openFAQ === 2 && (
            <p className="mt-2 text-gray-600">
              To search for an employee, go to the search page, and you can search using either the employee ID or employee name.
            </p>
          )}
        </div>

        {/* Question 3 */}
        <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-gray-50">
          <div 
            className="flex justify-between items-center cursor-pointer text-black"
            onClick={() => toggleFAQ(3)}
          >
            <h4 className="text-lg font-medium">How can I insert new employee's details?</h4>
            <span>{openFAQ === 3 ? '▲' : '▼'}</span>
          </div>
          {openFAQ === 3 && (
            <p className="mt-2 text-gray-600">
              Go to the Insert page and fill in the required information.
            </p>
          )}
        </div>

        {/* Question 4 */}
        <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-gray-50">
          <div 
            className="flex justify-between items-center cursor-pointer text-black"
            onClick={() => toggleFAQ(4)}
          >
            <h4 className="text-lg font-medium">How can I update existing employee's details?</h4>
            <span>{openFAQ === 4 ? '▲' : '▼'}</span>
          </div>
          {openFAQ === 4 && (
            <p className="mt-2 text-gray-600">
              Go to the Update page, search for the record, and modify the details.
            </p>
          )}
        </div>

        {/* Question 5 */}
        <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-gray-50">
          <div 
            className="flex justify-between items-center cursor-pointer text-black"
            onClick={() => toggleFAQ(5)}
          >
            <h4 className="text-lg font-medium">How can I delete employee's details?</h4>
            <span>{openFAQ === 5 ? '▲' : '▼'}</span>
          </div>
          {openFAQ === 5 && (
            <p className="mt-2 text-gray-600">
              Go to the Delete page and select the record you want to remove.
            </p>
          )}
        </div>

      </div>
    </div>
    </div>
  );
};

export default Home;

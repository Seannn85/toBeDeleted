"use client"
import React, { useState } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM

import CompanyTools from '../companyTools';

const DropdownSecond = ({onToggleCompanyTools}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [dashBoard, setDashBoard] = useState(false);

  const toggleDropdown = () => {
    // setDashBoard((prevState) => !prevState);
    setIsDropdownOpen((prevState) => !prevState);
    onToggleCompanyTools(); 
  };

  

  return (
    <> 
    
    <div className="relative inline-block text-left">
      <div>
        <button
          className="inline-flex items-center justify-between w-48 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-sm focus:outline-none "
          id="dropdown-button"
          aria-haspopup="listbox"
          aria-expanded={isDropdownOpen}
          onClick={toggleDropdown}
        >
            <div className='flex flex-nowrap text-left flex-col'> 
          <span className='text-xs text-gray-400 font-semibold'>Company Tools</span>
          <span className='text-xs text-gray-300 font-bold'>Portfolio</span>
          </div>
          <svg
            className={`w-5 h-5 transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 5.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            />
          </svg>
        </button>
      </div>
      
    
          {/* <div className="py-1" role="menuitem" tabIndex={-1} id="dropdown-menu-item-0">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Action
            </a>
          </div>
          <div className="py-1" role="menuitem" tabIndex={-1} id="dropdown-menu-item-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Another action
            </a>
          </div>
          <div className="py-1" role="menuitem" tabIndex={-1} id="dropdown-menu-item-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Something else here
            </a>
          </div> */}
        
        
     
     </div>
    </>
  );
};

export default DropdownSecond;

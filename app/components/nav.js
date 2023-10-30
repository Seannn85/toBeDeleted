'use client'

import { useState } from "react"

import Dropdown from "./helpers/dropDown1"
import Favorite from "./helpers/favorite"
import DropdownSecond from "./helpers/dropDown2"
import Logo from "./helpers/logo"
import HelpButton from "./helpers/helpButton";
import BellIcon from "./helpers/bellIcon";
import UserInitials from "./helpers/userInitials";
import CompanyTools from "./companyTools"
import ProjectHome from "./projectHome"


const Nav = () => {

    const [isCompanyToolsVisible, setIsCompanyToolsVisible] = useState(false);

    const toggleCompanyTools = () => {
      setIsCompanyToolsVisible(!isCompanyToolsVisible);
    };
  
    return (
      <> 
      <nav className="flex w-full items-center bg-black justify-between py-3"> 
        <div className="flex items-center"> 
          <div className="space-x-2 flex items-center"> 
            <Logo />
            <Dropdown />
            <DropdownSecond onToggleCompanyTools={toggleCompanyTools}  />
          </div>
          <div> 
            <Favorite />
          </div>
        </div>
  
        <div className="flex space-x-4 items-center justify-center ml-4 mr-5">
          <HelpButton initials='?'/>
          <BellIcon notificationCount={6} />
          <UserInitials initials="GK" />
        </div>

        {isCompanyToolsVisible && <div className="absolute top-12 w-full left-0 pt-6">
          <CompanyTools />
        </div>}

      </nav>
      <ProjectHome/>
      </>
    );
  };
  

  
export default Nav
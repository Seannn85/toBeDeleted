import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const BellIcon = ({ notificationCount }) => {
  return (
    <div className="relative">
      <span className="text-gray-100 text-2xl">
        <FontAwesomeIcon icon={faBell} />
      </span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full"></span>
      <span className="absolute top-2 text-xs text-white">
        {notificationCount}
      </span>
    </div>
  );
};

export default BellIcon;

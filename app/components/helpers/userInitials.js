import React from "react";

const UserInitials = ({ initials }) => {
  return (
    <div className="relative">
      <span className="bg-gray-700 rounded-full p-4 text-white">
        {initials}
      </span>
    </div>
  );
};

export default UserInitials;

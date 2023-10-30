import React from "react";
import Link from "next/link";

const CompanyTools = () => {
  const data = [
    {
      name: "Core Tools",
      items: [
        "Concierge",
        "Programs",
        "Portfolio",
        "Directory",
        "Reports",
        "Documents",
        "Admin",
        "Permissions",
      ],
    },
    {
      name: "Project Management",
      items: [
        "Quality and Safety Dashboard",
        "Timecard",
        "Schedule",
        "Inspections",
      ],
    },
    {
      name: 'Financial Management',
      items: ['Financial Dashboard']
    },
    {
      name: 'Workforce Management',
      items: ['Timesheets']
    },
    {
      name: 'Preconstruction',
      items: ['Planroom']
    },
    {
      name: 'Custom Tools',
      items: ['Dashboard']
    }
  ];

  return (
    <div>
      <div className="flex flex-wrap bg-customGray min-h-screen p-6 md:p-10 lg:p-20 xl:p-40">
        {data.map((section, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-6">
            <div className="text-gray-200 text-md font-bold mb-2">
              <div className="inline-block mb-2">{section.name}</div>
              <hr className="border-gray-300 border-1 w-32 sm:w-32 lg:w-48 mt-2" />
            </div>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="text-gray-400 font-semibold text-sm mb-2">
                <Link href="#">
                  {item}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyTools;

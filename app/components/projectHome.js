import React from 'react';
import Head from 'next/head';

// import ProjectHomeTitle from './projectHomeTitle';
// import ProjectTeamTable from './projectTeamTable';
// import ProjectOverviewTable from './projectOverviewTable';
// import MyOpenItemsTable from './myOpenItemsTable';

const ProjectHome = () => {
    return (
        <div>
            <Head>
                <title>Project Home</title>
            </Head>
            <div className="fixed top-0 w-full z-50" />
            <div className="mt-16">
                <div className="bg-gray-200 h-16 flex items-center justify-between px-4">
                    {/* <ProjectHomeTitle /> */}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Settings
                    </button>
                </div>
                <div className="bg-gray-100 h-64 px-4 py-2">
                    <h2 className="text-lg font-bold mb-2">Project Team</h2>
                    {/* <ProjectTeamTable /> */}
                </div>
                <div className="bg-gray-200 h-64 px-4 py-2">
                    <h2 className="text-lg font-bold mb-2">Project Overview</h2>
                    {/* <ProjectOverviewTable /> */}
                </div>
                <div className="bg-gray-100 h-96 px-4 py-2">
                    <h2 className="text-lg font-bold mb-2">My Open Items</h2>
                    {/* <MyOpenItemsTable /> */}
                </div>
            </div>
        </div>
    );
};

export default ProjectHome;

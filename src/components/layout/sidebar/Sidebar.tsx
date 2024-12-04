import React from 'react';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-700 text-white h-full p-4">
            <nav>
                <ul>
                    <li className="mb-2">
                        <a href="/dashboard" className="hover:underline">Dashboard</a>
                    </li>
                    <li>
                        <a href="/settings" className="hover:underline">Settings</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;

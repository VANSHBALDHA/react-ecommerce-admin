import React from 'react';
import Link from 'next/link';
import { FaBoxOpen, FaChartBar, FaCog, FaHome, FaRegFileAlt, FaTasks, FaTicketAlt, FaUserCog, FaUsers } from "react-icons/fa";
import { MdInventory, MdSettings } from "react-icons/md";
import { usePathname } from 'next/navigation'


const MenuSidebar = () => {
    const pathname = usePathname()

    const menuItems = [
        {
            text: 'Dashboard',
            url: '/',
            icon: <FaHome />,
        },
        {
            text: 'Manage Sub Admin Users',
            url: '/manage-admin-users',
            icon: <FaUsers />,
        },
        {
            text: 'Master Managements',
            url: '/master-managements',
            icon: <MdSettings />,
        },
        {
            text: 'Manage Products',
            url: '/products',
            icon: <FaBoxOpen />,
        },
        {
            text: 'Manage Inventory',
            url: '/manage-inventory',
            icon: <MdInventory />,
        },
        {
            text: 'Manage Customers',
            url: '/manage-customers',
            icon: <FaUserCog />,
        },
        {
            text: 'Manage Request',
            url: '/manage-request',
            icon: <FaTasks />,
        },
        {
            text: 'Manage Ticket',
            url: '/manage-ticket',
            icon: <FaTicketAlt />,
        },
        {
            text: 'Manage Contents',
            url: '/manage-contents',
            icon: <FaRegFileAlt />,
        },
        {
            text: 'Generate Reports',
            url: '/generate-reports',
            icon: <FaChartBar />,
        },
        {
            text: 'Settings',
            url: '/settings',
            icon: <FaCog />,
        },
    ];


    return (
        <ul className="menu">
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    className={pathname === item.url ? 'active' : ''}>
                    <Link href={item.url}>
                        <span>{item.icon}</span>
                        {item.text}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MenuSidebar;

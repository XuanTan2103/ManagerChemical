import React, { useState } from 'react';
import { User } from 'lucide-react';
import styles from './Users.module.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function Users() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeMenu, setActiveMenu] = useState('users');
    // Toggle sidebar
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Chọn menu item
    const handleMenuClick = (menuId) => {
        setActiveMenu(menuId);
    };

    // Dữ liệu mẫu cho bảng Recent Tickets
    const tickets = [
        {
            id: 'WD-12345',
            assignee: 'David Grey',
            subject: 'Fund is not recieved',
            status: 'done',
            lastUpdate: 'Dec 5, 2017'
        },
        {
            id: 'WD-12346',
            assignee: 'Stella Johnson',
            subject: 'High loading time',
            status: 'progress',
            lastUpdate: 'Dec 12, 2017'
        },
        {
            id: 'WD-12347',
            assignee: 'Marina Michel',
            subject: 'Website down for one week',
            status: 'onhold',
            lastUpdate: 'Dec 16, 2017'
        },
        {
            id: 'WD-12348',
            assignee: 'John Doe',
            subject: 'Loosing control on server',
            status: 'rejected',
            lastUpdate: 'Dec 3, 2017'
        }
    ];

    // Hàm xác định class cho status badge
    const getStatusClass = (status) => {
        switch (status) {
            case 'done':
                return styles.statusDone;
            case 'progress':
                return styles.statusProgress;
            case 'onhold':
                return styles.statusOnhold;
            case 'rejected':
                return styles.statusRejected;
            default:
                return '';
        }
    };

    // Hàm hiển thị text cho status badge
    const getStatusText = (status) => {
        switch (status) {
            case 'done':
                return 'DONE';
            case 'progress':
                return 'PROGRESS';
            case 'onhold':
                return 'ON HOLD';
            case 'rejected':
                return 'REJECTED';
            default:
                return status.toUpperCase();
        }
    };
    return (
        <div className={styles.container}>
            <Navbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={styles.mainContainer}>
                <Sidebar sidebarOpen={sidebarOpen} activeMenu={activeMenu} onMenuClick={handleMenuClick} />
                <main className={styles.mainContent}>
                    <div className={styles.pageHeader}>
                        <h2 className={styles.pageTitle}>
                            {activeMenu === 'users' && 'Quản lý người dùng'}
                        </h2>
                    </div>

                    {/* Recent Tickets Table */}
                    <div className={styles.ticketsContainer}>
                        <h3 className={styles.ticketsTitle}>Recent Tickets</h3>

                        <div className={styles.tableContainer}>
                            <table className={styles.ticketsTable}>
                                <thead>
                                    <tr>
                                        <th className={styles.tableHeader}>Assignee</th>
                                        <th className={styles.tableHeader}>Subject</th>
                                        <th className={styles.tableHeader}>Status</th>
                                        <th className={styles.tableHeader}>Last Update</th>
                                        <th className={styles.tableHeader}>Tracking ID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tickets.map((ticket) => (
                                        <tr key={ticket.id} className={styles.tableRow}>
                                            <td className={styles.tableCell}>
                                                <div className={styles.assigneeInfo}>
                                                    <div className={styles.assigneeAvatar}>
                                                        <User size={16} />
                                                    </div>
                                                    <span>{ticket.assignee}</span>
                                                </div>
                                            </td>
                                            <td className={styles.tableCell}>{ticket.subject}</td>
                                            <td className={styles.tableCell}>
                                                <span className={`${styles.statusBadge} ${getStatusClass(ticket.status)}`}>
                                                    {getStatusText(ticket.status)}
                                                </span>
                                            </td>
                                            <td className={styles.tableCell}>{ticket.lastUpdate}</td>
                                            <td className={styles.tableCell}>{ticket.id}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Users;
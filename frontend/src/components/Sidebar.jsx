import React from 'react';
import { Home, Users, Box, BarChart, Notebook } from 'lucide-react';
import styles from './Sidebar.module.css';

function Sidebar({ sidebarOpen, activeMenu, onMenuClick }) {
  const menuItems = [
    { id: 'dashboard', label: 'Thống kê', icon: <BarChart size={20} /> },
    { id: 'products', label: 'Vật tư', icon: <Box size={20} /> },
    { id: 'report', label: 'Báo cáo hư hỏng', icon: <Notebook size={20} /> },
    { id: 'users', label: 'Người dùng', icon: <Users size={20} /> },
  ];

  return (
    <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}> 
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {menuItems.map(item => (
            <li key={item.id} className={styles.menuItem}>
              <button
                onClick={() => onMenuClick(item.id)}
                className={`${styles.menuButton} ${activeMenu === item.id ? styles.activeMenu : ''}`}>
                <span className={styles.menuIcon}>{item.icon}</span>
                {sidebarOpen && <span className={styles.menuLabel}>{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
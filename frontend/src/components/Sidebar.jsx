import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Box, BarChart, Notebook } from 'lucide-react';
import styles from './Sidebar.module.css';

function Sidebar({ sidebarOpen, activeMenu }) {
  const menuItems = [
    { id: 'dashboard', label: 'Thống kê', icon: <BarChart size={20} />, link: '/dashboard' },
    { id: 'products', label: 'Vật tư', icon: <Box size={20} />, link: '/products' },
    { id: 'reports', label: 'Báo cáo hư hỏng', icon: <Notebook size={20} />, link: '/reports' },
    { id: 'users', label: 'Người dùng', icon: <Users size={20} />, link: '/users' },
  ];
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  }
  return (
    <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}> 
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {menuItems.map(item => (
            <li key={item.id} className={styles.menuItem}>
              <button
                onClick={() => handleNavigate(item.link)}
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
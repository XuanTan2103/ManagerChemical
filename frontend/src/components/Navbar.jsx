import React from 'react';
import { ArrowLeft, Menu, User, LogOut} from 'lucide-react';
import styles from './Navbar.module.css';
import Image from '../assets/image.png';

function Navbar({ sidebarOpen, toggleSidebar }) {
  const Icon = sidebarOpen ? ArrowLeft : Menu;

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button onClick={toggleSidebar} className={styles.toggleButton}>
          <Icon size={24} />
        </button>
        <img src={Image} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>LabManager</h1>
      </div>

      <div className={styles.headerRight}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>
            <User size={18} />
          </div>
          <span className={styles.userName}>Admin</span>
        </div>
        <button className={styles.logoutButton}>
          <span className={styles.logoutIcon}><LogOut size={22} /></span>
          <span className={styles.logoutText}>Đăng xuất</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
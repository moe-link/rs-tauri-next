import { ReactNode } from 'react';
import Navbar from '../ui/dashboard/navbar/navbar';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import styles from '../ui/dashboard/dashboard.module.scss';

interface LayoutProps {
    children: ReactNode;
  }

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        { children }
      </div>
    </div>
  );
};

export default Layout;

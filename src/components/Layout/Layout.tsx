import React from 'react';
import styles from './Layout.module.scss';
import Header from "@/components/Header/Header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <div className={styles.container}>
            <Header></Header>
            <main className={styles.container_content}>{children}</main>
        </div>
    );

};

export default Layout;

"use client"

import Link from 'next/link';
import Search from '../Search/Search';
import styles from './Header.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className={styles.header_main}>
                <Link
                    className={styles.header_mainLink}
                    href="/">
                    <div className={styles.header_mainImage}>
                        <Image
                            src="/movie-icon.svg"
                            alt="Movie Finder Icon"
                            width={40}
                            height={40} />
                    </div>
                    Movie Finder
                </Link>
                <Search />
            </div>
            <nav className={styles.header_navigation}>
                <ul className={styles.header_navigationList}>
                    <li className={styles.header_navigationItem}>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className={styles.header_navigationItem}>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li className={styles.header_navigationItem}>
                        <Link href="/">
                            Popular
                        </Link>
                    </li>
                    <li className={styles.header_navigationItem}>
                        <Link
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                router.back();
                            }}>
                            Go Back
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header



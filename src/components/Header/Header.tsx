"use client"

import Link from 'next/link';
import Image from 'next/image';
import Search from '../Search/Search';
import styles from './Header.module.scss';
import {pacifico} from "@/app/fonts";

const Header: React.FC = () => {

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <div className={styles.header_main}>
                    <Link
                        className={styles.header_mainLink}
                        href="/">
                        <div className={styles.header_mainImage}>
                            <Image
                                src="/movie-icon.svg"
                                alt="Movie Finder Icon"
                                width={30}
                                height={30}/>
                        </div>
                        <span className={pacifico.className}>Reel Search</span>
                    </Link>
                </div>
            </div>
            <nav className={styles.header_navigation}>
                <ul className={styles.header_navigationList}>
                    <li className={styles.header_navigationItem}>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className={styles.header_navigationItem}>
                        <Link href="/">
                            Popular
                        </Link>
                    </li>
                    <li className={styles.header_navigationItem}>
                        <Link href="/top-rated">
                            Top Rated
                        </Link>
                    </li>
                    <li className={styles.header_navigationItem}>
                        <Link href="/coming-soon">
                            Upcoming
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.header_search}>
                <Search/>
            </div>
        </header>
    )

}

export default Header



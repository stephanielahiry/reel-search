import Link from 'next/link';
import styles from './Navigation.module.scss';

const Navigation: React.FC = () => {

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigation_list}>
                <li className={styles.navigation_item}>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className={styles.navigation_item}>
                    <Link href="/">
                        Popular
                    </Link>
                </li>
                <li className={styles.navigation_item}>
                    <Link href="/top-rated">
                        Top Rated
                    </Link>
                </li>
                <li className={styles.navigation_item}>
                    <Link href="/coming-soon">
                        Upcoming
                    </Link>
                </li>
            </ul>
        </nav>
    )

}

export default Navigation



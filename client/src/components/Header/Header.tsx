import Link from 'next/link';
import SearchInput from '../SearchInput/SearchInput';
import styles from './Header.module.scss';

function Header() {
    
    return (
        <header className={styles.header}>
            <Link 
                className="styles.link" 
                href="/">
                Movie Finder
            </Link>
            <SearchInput/>
        </header>
    )

}

export default Header
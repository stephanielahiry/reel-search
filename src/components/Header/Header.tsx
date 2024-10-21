import Search from '../Search/Search';
import styles from './Header.module.scss';
import Navigation from "@/components/Navigation/Navigation";
import Logo from "@/components/Logo/Logo";

const Header: React.FC = () => {

    return (
        <header className={styles.header}>
            <Logo />
            <Navigation />
            <div className={styles.header_search}>
                <Search/>
            </div>
        </header>
    )

}

export default Header

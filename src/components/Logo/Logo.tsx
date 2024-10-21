import Link from 'next/link';
import Image from 'next/image';
import styles from './Logo.module.scss';
import { pacifico } from "@/app/fonts";

const Logo: React.FC = () => {

    return (
        <div className={styles.main}>
            <Link
                className={styles.main_link}
                href="/">
                <div className={styles.main_image}>
                    <Image
                        src="/movie-icon.svg"
                        alt="Movie Finder Icon"
                        width={30}
                        height={30}/>
                </div>
                <span className={pacifico.className}>Reel Search</span>
            </Link>
        </div>
    )

}

export default Logo



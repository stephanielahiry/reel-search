import { useState, useEffect } from 'react';
import styles from './TextResize.module.scss';

const TextResizeTool = () => {
    const [fontSize, setFontSize] = useState(16);

    const updateFontSize = (size: number) => {
        document.documentElement.style.fontSize = `${size}px`;
    };

    useEffect(() => {
        updateFontSize(fontSize);
    }, [fontSize]);

    return (
        <div className={styles.resize}>
            <span className={styles.resize_text}>Resize Text</span>
            <a
                className={`${styles.resize_option} ${styles.resize_optionSmall}`}
                href="#"
                onClick={() => setFontSize(16)}>
                A
            </a>
            <a
                className={`${styles.resize_option} ${styles.resize_optionMedium}`}
                href="#"
                onClick={() => setFontSize(17)}>
                A
            </a>
            <a
                className={`${styles.resize_option} ${styles.resize_optionLarge}`}
                href="#"
                onClick={() => setFontSize(18)}>
                A
            </a>
        </div>
    );
};

export default TextResizeTool;

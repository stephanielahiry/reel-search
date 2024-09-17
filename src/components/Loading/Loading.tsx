import styles from './Loading.module.scss';

export interface LoadingProps {
    loadingText: string;
}

const Loading: React.FC<LoadingProps> = ({loadingText}) => {
    return (
        <div className={styles.loading}>
            <h2 className={styles.loading_text}>{loadingText}</h2>
        </div>
    );
};

export default Loading;

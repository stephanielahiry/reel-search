import styles from './MovieDetail.module.scss';
import { Movie } from '@/types/Movie';
import Image from "next/image";

export interface MovieDetailProps {
    movie: Movie;
    goBack: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, goBack }: MovieDetailProps) => {
    const { title, imageURL, formattedDate, formattedGenres, formattedOverview, runtime } = movie;

    return (
        <section className={styles.detail}>
            <a
                className={styles.detail_link}
                onClick={goBack}>
                <Image
                    src="/back-arrow.svg"
                    alt="Previous Page Icon"
                    className={styles.detail_linkImage}
                    width={25}
                    height={30}/>
                <span className={styles.detail_linkText}>Back</span>
            </a>
            <h1 className={styles.detail_title}>Movie Details for {title}</h1>
            <div className={styles.detail_info}>
                <div>
                    <img
                        className={styles.detail_image}
                        src={imageURL}
                        alt={`Poster for ${title}`}
                        />
                </div>
                <div className={styles.detail_content}>
                    {formattedGenres && (
                        <div>
                            <span className={styles.detail_label}>Genre: </span>
                            {formattedGenres}
                        </div>
                    )}
                    <div>
                        <strong>Overview: </strong> 
                        {formattedOverview}
                    </div>
                    {runtime != null && runtime > 0 && (
                        <div>
                            <strong className={styles.detail_label}>Runtime: </strong>
                            {runtime} {runtime === 1 ? "Minute" : "Minutes"}
                        </div>
                    )}
                    {formattedDate && (
                        <div>
                            <span className={styles.detail_label}>Release Date: </span>
                            {formattedDate}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default MovieDetail;

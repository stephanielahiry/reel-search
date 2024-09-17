"use client"

import styles from './MovieDetail.module.scss';
import { Movie } from '../../types/Movie';

export interface MovieDetailProps {
    movie: Movie;
};

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }: MovieDetailProps) => {
    const { title, imageURL, formattedDate, formattedGenres, formattedOverview, runtime } = movie;

    return (
        <section className={styles.section}>
            <h2 className={styles.section_title}>Movie Details for {title}</h2>
            <div className={styles.section_detail}>
                <div>
                    <img
                        className={styles.section_image}
                        src={imageURL}
                        alt={`Poster for ${title}`}
                        />
                </div>
                <div className={styles.section_content}>
                    {formattedGenres && (
                        <div>
                            <span className={styles.section_label}>Genre:</span> {formattedGenres}
                        </div>
                    )}
                    <div>
                        <strong>Overview: </strong> 
                        <em>{formattedOverview}</em>
                    </div>
                    {runtime != null && runtime > 0 && (
                        <div>
                            <strong className={styles.section_label}>Runtime:</strong> {runtime} {runtime === 1 ? "Minute" : "Minutes"}
                        </div>
                    )}
                    {formattedDate && (
                        <div className={styles.section_genres}>
                            <span className={styles.section_label}>Release Date:</span> {formattedDate}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );

}

export default MovieDetail;

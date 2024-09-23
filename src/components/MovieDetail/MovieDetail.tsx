"use client"

import styles from './MovieDetail.module.scss';
import { Movie } from '../../types/Movie';
import Image from "next/image";

export interface MovieDetailProps {
    movie: Movie;
    goBack: () => void;
};

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, goBack }: MovieDetailProps) => {
    const { title, imageURL, formattedDate, formattedGenres, formattedOverview, runtime } = movie;

    return (
        <section className={styles.section}>
            <a
                className={styles.section_link}
                onClick={goBack}>
                <Image
                    className={styles.section_linkIcon}
                    src="/back-arrow.svg"
                    alt="Previous Page Icon"
                    width={30}
                    height={30}/>
                <span className={styles.section_linkText}>Back</span>
            </a>
            <h1 className={styles.section_title}>Movie Details for {title}</h1>
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
                            <span className={styles.section_label}>Genre: </span> 
                            {formattedGenres}
                        </div>
                    )}
                    <div>
                        <strong>Overview: </strong> 
                        {formattedOverview}
                    </div>
                    {runtime != null && runtime > 0 && (
                        <div>
                            <strong className={styles.section_label}>Runtime: </strong> 
                            {runtime} {runtime === 1 ? "Minute" : "Minutes"}
                        </div>
                    )}
                    {formattedDate && (
                        <div className={styles.section_genres}>
                            <span className={styles.section_label}>Release Date: </span> 
                            {formattedDate}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default MovieDetail;

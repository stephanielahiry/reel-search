"use client";

import styles from './MovieCard.module.scss';
import { Movie } from '../../types/Movie';

export interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }: MovieCardProps) => {
  const { overview, poster_path, id, title } = movie;
  const truncatedText = overview && overview.length > 100 
    ? overview.slice(0, 100) + '...' 
    : movie.overview;
  const image = poster_path 
    ? `https://image.tmdb.org/t/p/w500/${poster_path}` 
    : 'https://via.placeholder.com/200x300?text=No+Image';

  return (
    <div
      className={styles.card}
      aria-labelledby={`movie-title-${id}`}>
      <div className={styles.card_content}>
        <img
          className={styles.card_image}
          src={image}
          alt={`Poster for ${title}`}
        />
        <div className={styles.card_overview}>
          <div className={styles.card_hoverTitle}>{title}</div>
          <p>{truncatedText}</p>
        </div>
      </div>
      <div
        className={styles.card_title}
        id={`movie-title-${id}`}>
        {title}
      </div>
    </div>
  );
}

export default MovieCard;

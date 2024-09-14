"use client"

import styles from './MovieCard.module.scss';
import { Movie } from '../../types/Movie';

export type MovieCardProps = {
    movie: Movie;
};

const MovieCard = ({movie}: MovieCardProps) => { 
    const truncatedTitle = movie.title.length > 25 ? movie.title.substring(0, 25) + '...' : movie.title;
    const imageURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`; 
    const noImageURL = 'https://via.placeholder.com/200x300?text=No+Image';

    return (
        <div className={styles.card}>
          <img 
            className={styles.image}
            src={movie.poster_path ? imageURL : noImageURL} 
            alt={movie.title}
          />
          <h2>{truncatedTitle}</h2>
        </div>
      );

}

export default MovieCard;
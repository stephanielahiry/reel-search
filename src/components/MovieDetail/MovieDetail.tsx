"use client"

import styles from './MovieDetail.module.scss';
import { Movie } from '../../types/Movie';

export type MovieDetailProps = {
    movie: Movie | null;
    goBack: () => void;
};

const MovieDetail = ({movie, goBack}: MovieDetailProps) => { 
    const imageURL = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`; 
    const noImageURL = 'https://via.placeholder.com/200x300?text=No+Image';

    if(!movie) {
        return <p>Loading Movie Details...</p>
    }

    return (
        <div className={styles.detail}>
            <img 
                className={styles.image}
                src={movie.poster_path ? imageURL : noImageURL} 
                alt={movie.title}
            />  
            <p>{movie.overview}</p>
            <button 
                className={styles.button}
                onClick={goBack}>Back to List</button>
        </div>
      );

}

export default MovieDetail;
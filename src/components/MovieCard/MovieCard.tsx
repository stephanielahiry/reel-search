import styles from './MovieCard.module.scss';
import { Movie } from '@/types/Movie';
import Link from "next/link";
import Image from "next/image";

export interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }: MovieCardProps) => {
  const { overview, poster_path, title } = movie;
  const truncatedText = overview && overview?.length > 200
    ? overview.slice(0, 200) + '...'
    : movie.overview;
  const image = poster_path 
    ? `https://image.tmdb.org/t/p/w500/${poster_path}` 
    : 'https://via.placeholder.com/200x300?text=No+Image';

  return (
    <Link href={`/${movie.id}`} className={styles.card}>
        <div className={styles.card_content}>
            <Image
                className={styles.card_image}
                src={image}
                alt={`Poster for ${title}`}
                height={600}
                width={400}/>
            <div className={styles.card_overview}>
                <div className={styles.card_hoverTitle}>{title}</div>
                <p>{truncatedText}</p>
            </div>
        </div>
    </Link>
  );

}

export default MovieCard;

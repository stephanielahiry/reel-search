import Link from "next/link";
import { Movie } from "../../types/Movie";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieGrid.module.scss";

export type MovieGridProps = {
    movies: Movie[];
};

const MovieGrid = ({ movies }: MovieGridProps) => { 

    if(movies?.length === 0) {
        return <div>Your search did not return any results.</div>;
    }

    return (
        <ul className={styles.cardList}>
            {movies?.map((movie) => (
            <li key={movie.id} className={styles.cardList_item}>
                <Link href={`/movies/${movie.id}`}>
                    <MovieCard movie={movie} />
                </Link>
            </li>
            ))}
        </ul>
      );

}

export default MovieGrid;
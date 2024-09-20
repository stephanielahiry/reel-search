import Link from "next/link";
import { Movie } from "../../types/Movie";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieGrid.module.scss";

export interface MovieGridProps {
    movies: Movie[];
    headerText?: string;
};

const MovieGrid: React.FC<MovieGridProps> = ({ movies, headerText }: MovieGridProps) => {

    if (movies?.length === 0) {
        return (
            <section className={styles.grid}>
                <h2 className={styles.grid_header}>Your search did not return any results.</h2>
            </section>
        );
    } else {
        return (
            <section className={styles.grid}>
                <h2 className={styles.grid_header}>{headerText}</h2>
                <ul className={styles.grid_list}>
                    {movies?.map((movie) => (
                        <li key={movie.id} className={styles.grid_item}>
                            <Link href={`/${movie.id}`} className={styles.grid_link}>
                                <MovieCard movie={movie} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}

export default MovieGrid;

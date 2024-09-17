import Link from "next/link";
import { Movie } from "../../types/Movie";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieGrid.module.scss";

export interface MovieGridProps {
    movies: Movie[];
    searchQuery?: string | null;
    isHomePage?: boolean;
};

const MovieGrid: React.FC<MovieGridProps> = ({ movies, searchQuery, isHomePage }: MovieGridProps) => {


     if (movies.length === 0) {
        return (
            <section className={styles.grid}>
                <h2 className={styles.grid_header}>Your search did not return any results.</h2>
            </section>
        );
    } else {
        return (
            <section className={styles.grid}>
                <h2 className={styles.grid_header}>
                    {isHomePage
                        ? "Today's Popular Movies"
                        : `Search Results for "${searchQuery}" (${movies.length} result${movies.length !== 1 ? "s" : ""})`
                    }
                </h2>
                <ul className={styles.grid_list}>
                    {movies?.map((movie) => (
                        <li key={movie.id} className={styles.grid_item}>
                            <Link href={`/${movie.id}`}>
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

import { Movie } from "../../types/Movie";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieGrid.module.scss";

export interface MovieGridProps {
    movies: Movie[];
    headerText?: string;
};

const MovieGrid: React.FC<MovieGridProps> = ({ movies, headerText }: MovieGridProps) => {

    return (
        <section className={styles.grid}>
            <h2 className={styles.grid_header}>{headerText}</h2>
            <ul className={styles.grid_list}>
                {movies?.map((movie) => (
                    <li key={movie.id} className={styles.grid_item}>
                        <MovieCard movie={movie} />
                    </li>
                ))}
            </ul>
        </section>
    );

}

export default MovieGrid;

"use client"

import { useParams, useRouter } from "next/navigation";
import MovieDetail from "../../../components/MovieDetail/MovieDetail";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import { Movie } from "../../../types/Movie";

const MovieDetailPage = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const router = useRouter();
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    // I will be moving this out of the client, my API key is being exposed
    const fetchMovie = async (): Promise<void> => {
      try {
        const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
        if (res.ok) {
          const data: Movie = await res.json();
          setMovie(data);
        } else {
          console.error("Failed to fetch movie details");
        }
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    if (movieId) {
      fetchMovie();
    }
  }, [movieId]);

  const goBack = (): void => {
    router.back();
  };
    
  return (
    <section>
      <h1>Movie Details for {movie?.title}</h1>
      <MovieDetail movie={movie} goBack={goBack}/>
    </section>
  );

};
  
export default MovieDetailPage;

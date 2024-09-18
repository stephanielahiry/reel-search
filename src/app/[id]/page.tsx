"use client"

import { useParams, useRouter } from "next/navigation";
import MovieDetail from "@/components/MovieDetail/MovieDetail";
import { Movie } from "@/types/Movie";
import useSWR from "swr";
import { useEffect } from "react";
import Loading from "@/components/Loading/Loading";

const fetcher = (url: string) => fetch(url).then(res => res.json());

const MovieDetailPage: React.FC = () => {
  const params = useParams();
  const movieId = params.id;
  const router = useRouter();

  const { data: movie, error, isLoading } = useSWR<Movie>(
    movieId ? `/api/${movieId}` : null,
    fetcher
  );

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [movieId]);

  const goBack = (): void => {
      router.back();
  };
    
  return (
      <>
        {isLoading && <Loading loadingText={'Loading movie details...'}/>}
        {movie && <MovieDetail goBack={goBack} movie={movie}/>}
        {error && <h2>There was an error loading this movie.</h2>}
      </>
  );

};
  
export default MovieDetailPage;

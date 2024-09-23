"use client"

import { useParams, useRouter } from "next/navigation";
import MovieDetail from "@/components/MovieDetail/MovieDetail";
import { Movie } from "@/types/Movie";
import useSWR from "swr";
import { useEffect } from "react";
import Loading from "@/components/Loading/Loading";

// const fetcher = (url: string) => fetch(url).then(res => res.json());
const fetcher = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const MovieDetailPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const movieId = params.id;

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

  if (isLoading) {
    return <Loading loadingText={'Loading movie details...'} />;
  }

  if (error || !movie) {
    return <h2>There was an error loading details for this movie. Please try again later.</h2>;
  }
    
  return <MovieDetail goBack={goBack} movie={movie}/>;

};
  
export default MovieDetailPage;

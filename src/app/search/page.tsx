"use client"

import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import MovieGrid from "@/components/MovieGrid/MovieGrid";
import Loading from "@/components/Loading/Loading";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
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

const SearchPage: React.FC = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const { data: movies, error, isLoading } = useSWR(
    searchQuery ? `/api/search?search=${searchQuery}` : null, 
    fetcher
  );
  const headerText = `Search Results for "${searchQuery}" (${movies?.length} result${movies?.length !== 1 ? "s" : ""})`;

  if (isLoading) {
    return <Loading loadingText={'Loading search results...'} />;
  }

  if (error) {
    return <h2>There was an error loading your search results. Please try again later.</h2>;
  }

  if (!movies || !movies?.length) {
    return <h2>There were no search results found for {searchQuery}.</h2>;
  }

  return (
    <MovieGrid headerText={headerText} movies={movies}/>
  );

};

export default SearchPage;

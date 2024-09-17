"use client"

import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import MovieGrid from "@/components/MovieGrid/MovieGrid";
import Loading from "@/components/Loading/Loading";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SearchPage: React.FC = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const { data: movies, error, isLoading } = useSWR(
    searchQuery ? `/api/search?search=${searchQuery}` : null, 
    fetcher
  );

  return (
    <>
      {isLoading && <Loading loadingText={'Loading search results...'}/>}
      {movies && <MovieGrid movies={movies} searchQuery={searchQuery}/>}
      {error && <h2>There was an error loading movies.</h2>}
    </>
  );

};

export default SearchPage;
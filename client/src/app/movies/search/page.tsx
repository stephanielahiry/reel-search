"use client"

import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { BASE_URL } from "../../constants";
import MovieGrid from "../../../components/MovieGrid/MovieGrid";

// I will be moving this out of the client, my API key is being exposed
const fetchMovies = async (url: string): Promise<any> => { 
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch Movies");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");
  const { data } = useSWR(`${BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${encodedSearchQuery}`, fetchMovies)

  return (
    <section>
      <h1>Search Results for "{searchQuery}"</h1>
      <MovieGrid movies={data?.results}/>
    </section>
  );

};

export default SearchPage;
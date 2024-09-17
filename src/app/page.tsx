"use client"

import Loading from "@/components/Loading/Loading";
import MovieGrid from "@/components/MovieGrid/MovieGrid";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR('/api/popular', fetcher);

  return (
    <>
      {isLoading && <Loading loadingText={'Loading popular movies...'}/>}
      {data && <MovieGrid isHomePage={true} movies={data.results}></MovieGrid>}
      {error && <h2>There was an error loading movies.</h2>}
    </>
  );
}

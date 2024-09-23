"use client"

import useSWR from "swr";
import Loading from "@/components/Loading/Loading";
import MovieGrid from "@/components/MovieGrid/MovieGrid";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
    const { data, error, isLoading } = useSWR('/api/top-rated', fetcher);
    const headerText = "Top Rated Movies";

    return (
        <>
            {isLoading && <Loading loadingText={'Loading popular movies...'}/>}
            {data && <MovieGrid headerText={headerText} movies={data.results}></MovieGrid>}
            {error && <h2>There was an error loading movies.</h2>}
        </>
    );
}
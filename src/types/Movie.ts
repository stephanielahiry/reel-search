export interface Movie {
    id: number;
    title: string;
    overview?: string;
    poster_path?: string;
    runtime?: number;
    genres?: Genre[];
    release_date?: string;
    formattedGenres?: string | null;
    formattedDate?: string | null;
    formattedOverview?: string | null;
    imageURL?: string;
}

interface Genre {
    id: string;
    name: string;
}

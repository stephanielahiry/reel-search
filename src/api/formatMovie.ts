import { Movie } from '@/types/Movie';

export function formatMovie(movie: Movie): Movie {
  return {
    ...movie,
    formattedGenres: movie.genres && movie.genres.length > 0 
      ? movie.genres.map((genre: { name: string }) => genre.name).join(', ') 
      : null,
    formattedDate: movie.release_date
      ? new Date(movie.release_date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        })
      : null,
    formattedOverview: movie.overview || 'There are no details available for this film.',
    imageURL: movie.poster_path 
      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` 
      : 'https://via.placeholder.com/200x300?text=No+Image',
  };
}

import { NextResponse } from 'next/server';
import { apiFetch } from '@/api/apiFetch';
import { Movie } from '@/types/Movie';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search');
  const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}`;
  
  try {
    const data: {results: Movie[]} = await apiFetch(endpoint) as {results: Movie[]};
    return NextResponse.json(data.results);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching data:', error);
      return NextResponse.json({ error: 'Failed to fetch search results', details: error.message });
  } else {
      console.error('Unexpected error:', error);
      return NextResponse.json({ error: 'Failed to fetch search results', details: 'An unexpected error occurred' });
  }
  }
}

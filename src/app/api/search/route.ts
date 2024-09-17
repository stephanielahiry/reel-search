import { NextResponse } from 'next/server';
import { BASE_URL } from '@/app/constants';
import { apiFetch } from '@/api/apiFetch';
import { Movie } from '@/types/Movie';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search');
  const endpoint = `${BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}`;
  
  try {
    const data: {results: Movie[]} = await apiFetch(endpoint) as {results: Movie[]};
    return NextResponse.json(data.results);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch search results' }, { status: 500 });
  }
}


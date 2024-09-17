import { NextResponse } from 'next/server';
import { apiFetch } from '@/api/apiFetch';
import { Movie } from '@/types/Movie';
import { formatMovie } from '@/api/formatMovie';
import { BASE_URL } from '@/app/constants';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const endpoint = `${BASE_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  try {
    const data: Movie = await apiFetch(endpoint);
    const formattedData: Movie = formatMovie(data);
    return NextResponse.json(formattedData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch movie details' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { Movie } from '@/types/Movie';
import { formatMovie } from '@/api/formatMovie';
import { BASE_URL } from '@/app/constants';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const endpoint = `${BASE_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error('Error fetching data!');
    const data: Movie = await response.json();
    const formattedData: Movie = formatMovie(data);
    return NextResponse.json(formattedData);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching data:', error);
      return NextResponse.json({ error: 'Failed to fetch movie details', details: error.message }, { status: 500 });
    } else {
      console.error('Unexpected error:', error);
      return NextResponse.json({ error: 'Failed to fetch movie details', details: 'An unexpected error occurred' }, { status: 500 });
    }
  }
}

import { NextResponse } from 'next/server';
import { BASE_URL } from '@/app/constants';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search');
  const endpoint = `${BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error('Error fetching data!');
    const data = await response.json();
    
    if (Array.isArray(data.results)) {
      return NextResponse.json(data.results);
    } else {
      throw new Error('Unexpected data format');
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching data:', error);
      return NextResponse.json({ error: 'Failed to fetch search results', details: error.message }, { status: 500 });
    } else {
      console.error('Unexpected error:', error);
      return NextResponse.json({ error: 'Failed to fetch search results', details: 'An unexpected error occurred' }, { status: 500 });
    }
  }
}


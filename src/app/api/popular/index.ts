import { apiFetch } from '@/api/apiFetch';
import { NextResponse } from 'next/server';

export async function GET() {
    const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`; 
    try {
        const data = await apiFetch(endpoint);  
        return NextResponse.json(data);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching data:', error);
            return NextResponse.json({ error: 'Failed to fetch popular movies', details: error.message });
        } else {
            console.error('Unexpected error:', error);
            return NextResponse.json({ error: 'Failed to fetch popular movies', details: 'An unexpected error occurred' });
        }
    }
}
  
import { apiFetch } from '@/api/apiFetch';
import { BASE_URL } from '@/app/constants';
import { NextResponse } from 'next/server';

export async function GET() {
    const endpoint = `${BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`; 
    try {
        const data = await apiFetch(endpoint);  
        return NextResponse.json(data);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching data:', error);
            return NextResponse.json({ error: 'Failed to fetch popular movies', details: error.message }, { status: 500 });
        } else {
            console.error('Unexpected error:', error);
            return NextResponse.json({ error: 'Failed to fetch popular movies', details: 'An unexpected error occurred' }, { status: 500 });
        }
    }
}
  
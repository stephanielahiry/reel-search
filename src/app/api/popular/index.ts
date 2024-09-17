import { apiFetch } from '@/api/apiFetch';
import { BASE_URL } from '@/app/constants';
import { NextResponse } from 'next/server';

export async function GET() {
    const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=4a578780b4555c6daabb01aa39a8f791`; 
    try {
        const data = await apiFetch(endpoint);  
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch search results' }, { status: 500 });
    }
}
  
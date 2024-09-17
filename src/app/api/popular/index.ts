import { apiFetch } from '@/api/apiFetch';
import { BASE_URL } from '@/app/constants';
import { NextResponse } from 'next/server';

export async function GET() {
    const endpoint = `${BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`; 
    try {
        const data = await apiFetch(endpoint);  
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch search results' }, { status: 500 });
    }
}
  
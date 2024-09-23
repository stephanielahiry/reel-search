import {NextResponse} from "next/server";
import {apiFetch} from "@/api/apiFetch";

export async function GET() {
    const endpoint = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
    try {
        const data = await apiFetch(endpoint);
        return NextResponse.json(data);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching upcoming movies:', error);
            return NextResponse.json({
                error: 'Failed to fetch upcoming movies',
                details: error.message });
        } else {
            console.error('Unexpected error:', error);
            return NextResponse.json({
                error: 'Failed to fetch upcoming movies',
                details: 'An unexpected error occurred' });
        }
    }
}
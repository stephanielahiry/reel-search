export const apiFetch = async <returnType>(endpoint: string): Promise<returnType> => {
    const request = new Request(endpoint, { method: 'GET'});
    request.headers.append('Authorization', `Bearer ${process.env.API_KEY}`);
    const response = await fetch(request);
    if (!response.ok) throw new Error('Error fetching data!');
    const data = await response.json();
    return data;
  };
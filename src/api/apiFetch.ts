export const apiFetch = async <returnType>(endpoint: string): Promise<returnType> => {
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    },
  });
  if (!response.ok) throw new Error('Error fetching data!');
  const data = await response.json();
  return data;
};
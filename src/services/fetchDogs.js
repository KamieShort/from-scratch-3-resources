export async function filterDogs(breed) {
  const params = new URLSearchParams();

  if (breed !== 'All') {
    params.set('breed', `eq.${breed}`);
  }
  params.set('select', '*');
  const resp = await fetch(
    `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/favorite-dogs?${params.toString()}`,
    {
      headers: {
        apikey: process.env.REACT_APP_SUPABASE_KEY,
        Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
      },
    }
  );

  const data = await resp.json();
  return data;
}

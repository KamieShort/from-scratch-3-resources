import { checkError, client } from './client';

export async function fetchDogs(breed, query) {
  const params = new URLSearchParams();

  if (breed !== 'All') {
    params.set('breed', breed);
  }

  const resp = await client.from('favorite-dogs').select('*');
  return checkError(resp);
}

import { checkError, client } from './client';

export async function fetchDogs() {
  const resp = await client.from('favorite-dogs').select('*');
  return checkError(resp);
}

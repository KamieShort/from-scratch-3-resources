import { checkError, client } from './client';

export async function fetchFoods() {
  const resp = await client.from('favorite-foods').select('*');
  return checkError(resp);
}

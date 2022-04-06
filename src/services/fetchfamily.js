import { checkError, client } from './client';

export async function fetchFamilyData() {
  const resp = await client.from('family-data').select('*');
  return checkError(resp);
}

import useSWR from 'swr';
import api from '../services/api';

export function useFetch(url: string) {
  const { data, error } = useSWR(url, async (value) => {
    console.warn(value);

    const response = await api.get(value, {});

    return response;
  });
  return { data, error };
}

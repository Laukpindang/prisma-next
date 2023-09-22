import { fetcher } from '@/helper/fetcher';
import useSWR from 'swr';

export const useMeme = () => {
  const { data, isLoading, error, mutate } = useSWR('/api/meme', fetcher);

  return { data, isLoading, error, mutate };
};

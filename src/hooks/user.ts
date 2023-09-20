import { fetcher } from '@/helper/fetcher';
import useSWR from 'swr'

export const useListUser = () => {
  const {data, isLoading, error, mutate} = useSWR('/api/user', fetcher)

  return {data,isLoading,error,mutate}
}
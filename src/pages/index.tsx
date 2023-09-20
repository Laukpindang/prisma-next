import Image from 'next/image'
import useSWR from 'swr'
import { fetcher } from '@/helper/fetcher'

export default function Home() {
  const {data} = useSWR('/api/user', fetcher)
  
  console.log(data);
  
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      loading
    </main>
  )
}

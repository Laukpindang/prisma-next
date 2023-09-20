import { useListUser } from '@/hooks/user'
import { UserResponse } from '@/types/user'
import { useRouter } from 'next/router'
import { Card } from '@/components/card'

export default function Home() {
  const {data, isLoading, error} = useListUser()
  const router = useRouter()

  if (isLoading) {
    return <span>loading...</span>
  }

  if (error) {
    return <span>error</span>
  }
  
  return (
    <main className='flex flex-col px-8 py-10 gap-2'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='font-bold text-xl'>List of Users</h1>
        <h1 onClick={() => router.push('/add')} className='font-semibold cursor-pointer underline'>Add more</h1>
      </div>
      <div className='grid grid-cols-1: md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
        {data.map((item: UserResponse) => (
          <Card key={item.id} data={item} onClick={() => router.push(`/detail/${item.id}`)} />
        ))}
      </div>
    </main>
  )
}

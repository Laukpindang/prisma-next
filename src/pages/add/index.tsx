import React from 'react'
import { Input } from '@/components/input'
import axios from 'axios'

export default function Add() {
  React.useEffect(() => {
    axios.post('/api/meme', {name: 'test'})
  }, [])
  return (
    <main className='flex flex-col px-8 py-10 gap-2'>
      <div>Add</div>
      <Input />
    </main>
  )
}

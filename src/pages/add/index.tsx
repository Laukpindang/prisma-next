import React from 'react';
import { Input } from '@/components/input';
import axios from 'axios';

export default function Add() {
  const handlePost = () => {
    axios.post('/api/meme', {
      name: 'test',
      photo:
        'https://c.files.bbci.co.uk/8991/production/_104871253_1a76b03a-0a86-4ee3-85de-46f66d7f179e.jpg',
      author: 'ferdi',
    });
  };

  return (
    <main className="flex flex-col px-8 py-10 gap-2">
      <div>Add</div>
      <Input />
      <button onClick={handlePost}>Upload</button>
    </main>
  );
}

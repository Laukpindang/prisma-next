import React from 'react'
import Image from 'next/image';

interface CardData {
  id: string;
  image: string;
  name: string;
  email: string;
  photo: string;
}

interface CardType {
  data: CardData;
  onClick?: () => void;
}

export const Card: React.FC<CardType> = ({data, onClick}) => {
  return (
    <div onClick={onClick} className='bg-white rounded-lg text-black flex gap-2 items-center cursor-pointer px-2 py-4'>
      <div className='rounded-full overflow-hidden'>
        <Image src={data.photo} alt={`${data.name}'s photo`} width={70} height={70} />
      </div>
      <div>
        <h2 className='text-lg font-bold'>{data.name}</h2>
        <p>{data.email}</p>
      </div>
    </div>
  )
}

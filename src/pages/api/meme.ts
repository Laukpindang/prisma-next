import { NextApiResponse, NextApiRequest } from 'next';
import prisma from '@/libs/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const meme = await prisma.meme.findMany({
      select: {
        name: true,
      },
    });
    res.json(meme);
    // res.json({ message: 'hello there' });
  } catch (error) {
    res.status(500).json({ error });
  }
}

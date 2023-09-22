import { NextApiResponse, NextApiRequest } from 'next';
import prisma from '@/libs/prisma';

export default async function getUser(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log('post something');
  } else if (req.method === 'GET') {
    const user = await prisma.users.findMany({
      select: {
        id: true,
        createdAt: true,
        email: true,
        name: true,
        photo: true,
      },
    });
    res.status(200).json(user);
  }
}

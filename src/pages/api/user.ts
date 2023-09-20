import { NextApiResponse, NextApiRequest } from 'next';
import prisma from '@/libs/prisma';

export default async function getUser(req: NextApiRequest, res: NextApiResponse) {
  const user = await prisma.users.findMany()
  res.json(user)
}
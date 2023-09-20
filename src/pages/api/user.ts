import { NextApiResponse, NextApiRequest } from 'next';
import prisma from '@/libs/prisma';

export default function getUser(req: NextApiRequest, res: NextApiResponse) {
  const user = prisma.users.findMany()
  res.json(user)
}
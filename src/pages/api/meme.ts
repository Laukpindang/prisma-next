import { NextApiResponse, NextApiRequest } from 'next';
import prisma from '@/libs/prisma';

export default async function memeHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // const createdMeme = await prisma.meme.create({
    //   data: req.body
    // })
    // res.json(createdMeme)
    const test = req.body;
    res.json(test);
  } else if (req.method === 'GET') {
    const meme = await prisma.meme.findMany();
    res.json(meme);
  }
}

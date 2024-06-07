import dbConnect from '@/server/utils/dbConnect';
import Todo from '@/server/models/todo';
import type { NextApiRequest, NextApiResponse } from 'next';

dbConnect();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  if (method === 'POST') {
    const { formData } = body;
    await Todo.create({
      title: formData.title[0],
      description: formData.description[0],
    });
    const todos = await Todo.find({});
    return res.status(201).json({ message: 'یادداشت جدید اضافه شد', todos });
  } else if (method === 'GET') {
    const todos = await Todo.find({});
    return res.status(200).json({ todos });
  }
}

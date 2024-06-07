import dbConnect from '@/server/utils/dbConnect';
import Todo from '@/server/models/todo';
import type { NextApiRequest, NextApiResponse } from 'next';

dbConnect();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  if (method === 'DELETE') {
    const todoToDelete = await Todo.findById(query.todoId);
    await Todo.findByIdAndDelete(query.todoId);
    const todos = await Todo.find({});

    return res
      .status(200)
      .json({ message: `${todoToDelete.title} با موفقیت حذف شد`, todos });
  }
}

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
  } else if (method === 'GET') {
    const todo = await getOneTodo(query);
    return res.status(200).json({ message: 'یادداشت بارگزاری شد', todo });
  } else if (method === 'PUT') {
    const { body } = req;
    const todo = await Todo.findById(query.todoId);
    todo.title = body.todo.title;
    todo.description = body.todo.description;
    todo.isCompleted = body.todo.isCompleted;
    await todo.save();
    const todos = await Todo.find({});
    return res.status(200).json({ message: 'یادداشت با موفقیت تغییر یافت', todos });
  }
}

export async function getOneTodo(query: any) {
  const todo = await Todo.findById(query.todoId);
  return todo;
}

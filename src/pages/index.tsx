import Layout from '@/containers/Layout';
import { NextUIProvider } from '@nextui-org/react';
import TodoList from '@/components/todos/TodoList';
import axios from 'axios';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import dbConnect from '@/server/utils/dbConnect';
import Todo from '@/server/models/todo';

type FormData = {
  title: string;
  description: string;
};
export interface TodoType {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}
interface HomeProps {
  todos: TodoType[];
}
export interface AddTodoProps {
  onAdd: (e: React.FormEvent<HTMLFormElement>, formData: FormData) => void;
}

const Home: React.FC<HomeProps> = ({ todos }) => {
  const [data, setData] = useState<TodoType[]>(todos);

  const [isDeleting, setIsDeleting] = useState(false);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const deleteTodo = (id: string) => {
    setLoadingId(id);
    setIsDeleting(true);
    axios
      .delete(`/api/todos/${id}`)
      .then(({ data }) => {
        setData(data.todos);
        toast.error(data.message);
        setIsDeleting(false);
      })
      .catch((err) => console.log(err));
  };

  const completeHandler = (id: string) => {
    axios
      .put(`/api/todos/complete/${id}`)
      .then(({ data }) => {
        setData(data.todos);
        toast.success(data.message);
      })
      .catch((err) => console.log(err));
  };

  const addTodo: AddTodoProps['onAdd'] = (e, formData) => {
    e.preventDefault();

    axios
      .post(`/api/todos/`, { formData })
      .then(({ data }) => {
        setData(data.todos);
        toast.success(data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <NextUIProvider>
      <Toaster />
      <Layout>
        <TodoList
          onAdd={addTodo}
          data={data}
          onDelete={deleteTodo}
          onComplete={completeHandler}
          isDeleting={isDeleting}
          loadingId={loadingId}
          editingId={editingId}
          setEditingId={setEditingId}
          isEditing
        />
      </Layout>
    </NextUIProvider>
  );
};

export async function getServerSideProps() {
  dbConnect();
  const todos = await Todo.find({});
  return {
    props: {
      todos: JSON.parse(JSON.stringify(todos)),
    },
  };
}

export default Home;

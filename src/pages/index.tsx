import Layout from '@/containers/Layout';
import { NextUIProvider } from '@nextui-org/react';
import TodoList from '@/components/todos/TodoList';

type FormData = {
  title: string;
  description: string;
};

export interface AddTodoProps {
  onAdd: (e: React.FormEvent<HTMLFormElement>, formData: FormData) => void;
}

export default function Home() {
  const addTodo = (e: React.FormEvent, formData: FormData) => {
    e.preventDefault();
    console.log(formData);
  };
  // const addTodo: AddTodoProps['onAdd'] = (e, formData) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };
  return (
    <NextUIProvider>
      <Layout>
        <TodoList onAdd={addTodo} />
      </Layout>
    </NextUIProvider>
  );
}

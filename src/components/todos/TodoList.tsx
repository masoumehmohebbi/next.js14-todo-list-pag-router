import { Card, CardBody, Link, Checkbox } from '@nextui-org/react';
import React from 'react';
import Header from '@/components/todos/Header';
import { AddTodoProps } from 'src/pages/index';
import { TodoType } from '@/pages/index';
import Todo from '@/components/todos/Todo';
import { getSession, useSession } from 'next-auth/react';

interface TodoListProps extends AddTodoProps {
  data: TodoType[];
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
  isDeleting: boolean;
  loadingId: string | null;
  isEditing: boolean;
  editingId: string | null;
  setEditingId: (id: string | null) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  data,
  onAdd,
  onDelete,
  onComplete,
  loadingId,
  isDeleting,
  editingId,
  setEditingId,
}) => {
  const { data: session, status } = useSession();
  if (!session)
    return (
      <Card className="max-w-screen-md mx-2 md:mx-auto my-5">
        <CardBody className="flex flex-row justify-center p-5">
          برای ثبت یادداشت های خود لاگین کنید
        </CardBody>
      </Card>
    );
  return (
    <Card className="max-w-screen-md mx-2 md:mx-auto my-5">
      <CardBody className="flex flex-col gap-y-4 mb-3 sm:gap-y-0 sm:flex-row justify-between sm:items-center">
        <Header onAdd={onAdd} data={data} />
      </CardBody>

      {data?.length ? (
        data.map((todo) => (
          <Todo
            key={todo._id}
            todo={todo}
            onDelete={onDelete}
            isDeleting={loadingId === todo._id}
            isEditing={editingId === todo._id}
            setEditingId={setEditingId}
            onComplete={onComplete}
          />
        ))
      ) : (
        <CardBody className="text-start my-2">هنوز هیچ یادداشتی اضافه نشده</CardBody>
      )}
    </Card>
  );
};

export default TodoList;

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

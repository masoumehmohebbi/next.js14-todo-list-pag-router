import { Card, CardBody, Link, Checkbox } from '@nextui-org/react';
import React from 'react';
import Header from '@/components/todos/Header';
import { AddTodoProps } from 'src/pages/index';
import { TodoType } from '@/pages/index';
import Todo from '@/components/todos/Todo';

interface TodoListProps extends AddTodoProps {
  data: TodoType[];
  onDelete: (id: string) => void;
  isLoading: boolean;
  loadingId: string | null;
}

const TodoList: React.FC<TodoListProps> = ({
  data,
  onAdd,
  onDelete,
  loadingId,
  isLoading,
}) => {
  return (
    <Card className="max-w-screen-md mx-auto my-5">
      <CardBody className="flex flex-row justify-between items-center">
        <Header onAdd={onAdd} />
      </CardBody>

      {data?.length ? (
        data.map((todo) => (
          <Todo
            key={todo._id}
            todo={todo}
            onDelete={onDelete}
            isLoading={loadingId === todo._id}
          />
        ))
      ) : (
        <CardBody className="text-start my-2">هنوز هیچ یادداشتی اضافه نشده</CardBody>
      )}
    </Card>
  );
};

export default TodoList;

import { Card, CardBody, Link, Checkbox } from '@nextui-org/react';
import React from 'react';
import Header from '@/components/todos/Header';
import { AddTodoProps } from 'src/pages/index';
import { TodoType } from '@/pages/index';
import Todo from '@/components/todos/Todo';

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

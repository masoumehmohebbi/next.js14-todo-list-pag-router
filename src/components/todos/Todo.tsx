import React, { useState } from 'react';
import { HiPencil, HiTrash } from 'react-icons/hi';
import Button from '@/ui/Button';
import { CardBody, Checkbox, Link } from '@nextui-org/react';
import { TodoType } from '@/pages/index';
import Loading from '@/ui/Loading';
import { useRouter } from 'next/router';

type TodoCMPType = {
  todo: TodoType;
  onDelete: (id: string) => void;
  isDeleting: boolean;
  isEditing: boolean;
  setEditingId: (id: string | null) => void;
};

const Todo = ({ todo, onDelete, isDeleting, isEditing, setEditingId }: TodoCMPType) => {
  const router = useRouter();

  const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditingId(todo._id);
    router.push(`/todos/edit/${todo._id}`).finally(() => {
      setEditingId(null);
    });
  };

  return (
    <CardBody
      key={todo._id}
      className="flex flex-row w-full justify-between items-center"
    >
      <Checkbox size="lg" defaultSelected={todo.isCompleted} lineThrough>
        <Link
          href={`/todos/${todo._id}`}
          size="lg"
          isBlock
          showAnchorIcon
          color="secondary"
          onClick={(e) => {
            e.preventDefault();
            router.push(`/todos/${todo._id}`);
          }}
        >
          <p>{todo.title}</p>
        </Link>
      </Checkbox>
      <div className="flex gap-x-1">
        <Button onClick={() => onDelete(todo._id)} content="حذف" color="danger" size="sm">
          {isDeleting ? (
            <Loading size="sm" color="danger" />
          ) : (
            <HiTrash className="text-lg" />
          )}
        </Button>

        <Button onClick={handleEditClick} content="تغییر" color="success" size="sm">
          {isEditing ? (
            <Loading size="sm" color="success" />
          ) : (
            <HiPencil className="text-lg" />
          )}
        </Button>
      </div>
    </CardBody>
  );
};

export default Todo;

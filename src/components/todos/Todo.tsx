import React from 'react';
import { HiPencil, HiTrash } from 'react-icons/hi';
import Button from '@/ui/Button';
import { CardBody, Checkbox, Link } from '@nextui-org/react';
import { TodoType } from '@/pages/index';
import Loading from '@/ui/Loading';
import { useRouter } from 'next/router';

type TodoCMPType = {
  todo: TodoType;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  isLoading: boolean;
};

const Todo = ({ todo, onDelete, isLoading, onEdit }: TodoCMPType) => {
  const router = useRouter();
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
          {isLoading ? (
            <Loading size="sm" color="danger" />
          ) : (
            <HiTrash className="text-lg" />
          )}
        </Button>
        <Button
          onClick={() => onEdit(todo._id)}
          content="تغییر"
          color="success"
          size="sm"
        >
          <HiPencil className="text-lg" />
        </Button>
      </div>
    </CardBody>
  );
};

export default Todo;

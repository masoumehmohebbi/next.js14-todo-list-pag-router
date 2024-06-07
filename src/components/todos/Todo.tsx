import React from 'react';
import { HiPencil, HiTrash } from 'react-icons/hi';
import Button from '@/ui/Button';
import { CardBody, Checkbox, Link } from '@nextui-org/react';
import { TodoType } from '@/pages/index';

const Todo = ({ todo }: { todo: TodoType }) => {
  return (
    <CardBody
      key={todo._id}
      className="flex flex-row w-full justify-between items-center"
    >
      <Checkbox size="lg" defaultSelected={todo.isCompleted} lineThrough>
        <Link size="lg" isBlock showAnchorIcon href="#" color="secondary">
          <p>{todo.title}</p>
        </Link>
      </Checkbox>
      <div className="flex gap-x-1">
        <Button content="حذف" color="danger" size="sm">
          <HiTrash className="text-lg" />
        </Button>
        <Button content="تغییر" color="success" size="sm">
          <HiPencil className="text-lg" />
        </Button>
      </div>
    </CardBody>
  );
};

export default Todo;

import { Card, CardBody, Link, Checkbox } from '@nextui-org/react';
import React from 'react';
import { HiPencil, HiTrash } from 'react-icons/hi';
import Button from '@/ui/Button';
import Header from '@/components/todos/Header';
import { AddTodoProps } from 'src/pages';

const TodoList: React.FC<AddTodoProps> = ({ onAdd }) => {
  return (
    <Card className="max-w-screen-md mx-auto my-5">
      <CardBody className="flex flex-row justify-between items-center">
        <Header onAdd={onAdd} />
      </CardBody>

      <CardBody className="flex flex-row w-full justify-between items-center">
        <Checkbox size="lg" defaultSelected lineThrough>
          <Link size="lg" isBlock showAnchorIcon href="#" color="secondary">
            <p>ورزش</p>
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
    </Card>
  );
};

export default TodoList;

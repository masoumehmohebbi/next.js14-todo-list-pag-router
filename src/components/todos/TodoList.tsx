import { Card, CardBody, Link, Checkbox, Tooltip, Button } from '@nextui-org/react';
import React from 'react';
import { HiPencil, HiTrash } from 'react-icons/hi';
import InputField from 'src/ui/InputField';

const TodoList = () => {
  return (
    <Card className="max-w-screen-md mx-auto my-5">
      <CardBody>
        <InputField />
      </CardBody>

      <CardBody className="flex flex-row w-full justify-between items-center">
        <Checkbox size="lg" defaultSelected lineThrough>
          <Link size="lg" isBlock showAnchorIcon href="#" color="secondary">
            <p>ورزش</p>
          </Link>
        </Checkbox>
        <div className="flex gap-x-1">
          <Tooltip key="secondary" color="secondary" content="حذف">
            <Button
              size="sm"
              isIconOnly
              color="danger"
              variant="faded"
              aria-label="Take a photo"
            >
              <HiTrash className="text-lg" />
            </Button>
          </Tooltip>
          <Tooltip key="secondary" color="primary" content="تغییر">
            <Button
              size="sm"
              isIconOnly
              color="success"
              variant="faded"
              aria-label="Take a photo"
            >
              <HiPencil className="text-lg" />
            </Button>
          </Tooltip>
        </div>
      </CardBody>

      <CardBody className="flex flex-row w-full justify-between items-center">
        <Checkbox size="lg" defaultSelected lineThrough>
          <Link size="lg" isBlock showAnchorIcon href="#" color="secondary">
            <p>ورزش</p>
          </Link>
        </Checkbox>
        <div className="flex gap-x-1">
          <Tooltip key="secondary" color="secondary" content="حذف">
            <Button
              size="sm"
              isIconOnly
              color="danger"
              variant="faded"
              aria-label="Take a photo"
            >
              <HiTrash className="text-lg" />
            </Button>
          </Tooltip>
          <Tooltip key="secondary" color="primary" content="تغییر">
            <Button
              size="sm"
              isIconOnly
              color="success"
              variant="faded"
              aria-label="Take a photo"
            >
              <HiPencil className="text-lg" />
            </Button>
          </Tooltip>
        </div>
      </CardBody>
    </Card>
  );
};

export default TodoList;

import Filter from '@/ui/Filter';
import React, { useState } from 'react';
import { AddTodoProps, TodoType } from '@/pages/index';
import { AddTodoButton } from '@/ui/AddTodoButton';
import { Divider } from '@nextui-org/react';

const Header: React.FC<AddTodoProps> = ({ onAdd, data }) => {
  const sumOfcompleted = data.filter((t) => t.isCompleted);
  const sumOfUncompleted = data.filter((t) => !t.isCompleted);

  return (
    <>
      <AddTodoButton onAdd={onAdd} />

      <div className="flex h-5 items-center gap-x-3 text-small">
        <div> انجام شده ها :{sumOfcompleted.length}</div>
        <Divider orientation="vertical" />
        <div> انجام نشده ها :{sumOfUncompleted.length}</div>
        <Divider orientation="vertical" />
        <div> همه :{data.length}</div>
      </div>
    </>
  );
};

export default Header;

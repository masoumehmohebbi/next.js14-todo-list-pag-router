import Filter from '@/ui/Filter';
import React from 'react';
import { AddTodoProps } from '@/pages/index';
import { AddTodoButton } from '@/ui/AddTodoButton';

const Header: React.FC<AddTodoProps> = ({ onAdd }) => {
  return (
    <>
      <AddTodoButton onAdd={onAdd} />
      <Filter />
    </>
  );
};

export default Header;

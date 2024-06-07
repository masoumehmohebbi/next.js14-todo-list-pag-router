import Filter from '@/ui/Filter';
import { ModalCMP } from '@/ui/Modal';
import React from 'react';
import { AddTodoProps } from '@/pages/index';

const Header: React.FC<AddTodoProps> = ({ onAdd }) => {
  return (
    <>
      <ModalCMP onAdd={onAdd} />
      <Filter />
    </>
  );
};

export default Header;

import React, { useState } from 'react';
import { Button, useDisclosure } from '@nextui-org/react';
import { AddTodoProps } from '../pages';
import { ModalCMP } from './Modal';

export const AddTodoButton: React.FC<AddTodoProps> = ({ onAdd }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary">
        اضافه کردن
      </Button>

      <ModalCMP
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onAdd={onAdd}
        placement="top-center"
        modalTitle=" اضافه
        کردن
        برنامه
        جدید"
        btnContent="اضافه"
      />
    </>
  );
};

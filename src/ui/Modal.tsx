import React, { useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Textarea,
} from '@nextui-org/react';
import { AddTodoProps } from '../pages';

export const ModalCMP: React.FC<AddTodoProps> = ({ onAdd }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [formData, setFormData] = useState({ title: '', description: '' });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  return (
    <>
      <Button onPress={onOpen} color="primary">
        اضافه کردن
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                اضافه کردن برنامه جدید
              </ModalHeader>
              <form onSubmit={(e) => onAdd(e, formData)}>
                <ModalBody>
                  <Input
                    autoFocus
                    label="عنوان"
                    placeholder="عنوان را وارد کنید"
                    variant="bordered"
                    color="primary"
                    onChange={changeHandler}
                    value={formData.title}
                    name="title"
                  />

                  <Textarea
                    label="توضیح"
                    variant="bordered"
                    placeholder="توضیحات خود را وارد کنید"
                    disableAnimation
                    disableAutosize
                    classNames={{
                      input: 'resize-y min-h-[40px]',
                    }}
                    color="primary"
                    onChange={changeHandler}
                    value={formData.description}
                    name="description"
                  />
                </ModalBody>
                <ModalFooter className="flex items-start justify-start">
                  <Button type="submit" color="success" onPress={onClose}>
                    اضافه
                  </Button>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    کنسل
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

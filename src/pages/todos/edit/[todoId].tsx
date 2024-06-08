import Layout from '@/containers/Layout';
import { getOneTodo } from '@/pages/api/todos/[todoId]';
import { GetServerSidePropsContext } from 'next';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from '@nextui-org/react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { HiArrowRight } from 'react-icons/hi';
import { TodoType } from '../..';
import { useIsEditing } from 'src/context/IsEdittingTodoContext';

type EditTodoProp = {
  todo: TodoType;
};
const EditTodo = ({ todo }: EditTodoProp) => {
  const { setIsEditing } = useIsEditing();
  const { isOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: todo.title,
    description: todo.description,
  });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);
    axios
      .put(`/api/todos/${router.query.todoId}`, {
        todo: { ...formData, isCompleted: true },
      })
      .then(({ data }) => {
        router.push('/');
        setTimeout(() => {
          toast.success(data.message);
        }, 2000);
        setIsEditing(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <div className="max-w-screen-md mx-auto my-5 flex flex-col md:flex-row">
        <Link href="/" className="link-nextUI">
          <HiArrowRight />
          برگشت
        </Link>
      </div>
      <Modal
        hideCloseButton
        isDismissable={false}
        isOpen={true}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">ویرایش یادداشت</ModalHeader>
              <form onSubmit={submitHandler}>
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
                    ویرایش
                  </Button>
                  <Button color="danger" variant="flat" onPress={() => router.push('/')}>
                    کنسل
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </Layout>
  );
};

export default EditTodo;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;

  const todo = await getOneTodo(query);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}

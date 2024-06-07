import React from 'react';
import dbConnect from '@/server/utils/dbConnect';
import { getOneTodo } from '../api/todos/[todoId]';
import Layout from '@/containers/Layout';
import { Card, CardBody, Divider, Link as NextUILink } from '@nextui-org/react';
import { HiArrowRight } from 'react-icons/hi';
import Link from 'next/link';

const TodoDetails = ({ todo }: any) => {
  return (
    <Layout>
      <div className="max-w-screen-md mx-auto my-5 flex flex-col md:flex-row">
        <NextUILink color="secondary" isBlock>
          <HiArrowRight />
          برگشت
        </NextUILink>
      </div>

      <Card className="max-w-screen-md mx-auto my-5 flex flex-col md:flex-row">
        <CardBody className="flex flex-row justify-between items-center">
          عنوان: {todo.title}
          <Divider orientation="vertical" />
        </CardBody>

        <CardBody className="flex flex-row justify-between items-center">
          توضیحات: {todo.description}
          <Divider orientation="vertical" />
        </CardBody>
        <CardBody className="flex flex-row justify-between items-center">
          انجام شده؟ {todo.isCompleted ? 'بله' : 'خیر'}
        </CardBody>
      </Card>
    </Layout>
  );
};

export default TodoDetails;

export async function getServerSideProps(context: any) {
  dbConnect();
  const { query } = context;
  const todo = await getOneTodo(query);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}

import Layout from "@/containers/Layout";
import {NextUIProvider} from "@nextui-org/react";
import TodoList from "@/components/todos/TodoList";


export default function Home() {
  return (
    <NextUIProvider>
    <Layout>
    
    <TodoList/>
     
    </Layout>
    </NextUIProvider>
  );
}

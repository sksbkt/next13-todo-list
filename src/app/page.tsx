import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos() {
  const data = prisma.todo.findMany();
  return data;
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"
  await prisma.todo.update({ where: { id }, data: { complete } })
}

export default async function Home() {

  //* export default async function Home()
  //*                  ^
  //? NEXT 13 Feature
  //? we can call server code inside the client so 


  const todos = await getTodos();


  return (<>
    <header className="flex justify-between items-center  mb-4">
      <h1 className="text-2xl">Todos</h1>
      <Link
        href={'/new'}
        className="border border-slate-300 text-slate-300 rounded
        hover:bg-slate-700 focus-within:bg-slate-700
        outline-none px-2 py-1"
      >New</Link>
    </header>
    <ul className="pl-4">
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  </>
  )
}
import { useEffect, useState } from "react";
import { CreateEditComponent } from "../components/CreateEditComponent";
import { ITodo, todosApi } from "../api/todosApi";
import { handleRequest } from "../api";
import { TodoComponent } from "../components/TodoComponent";

export const TodoPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  console.log(todos)

  const getTodos = async () => {
    const { data, error } = await handleRequest(todosApi.getTodos());
    if (data) {
    //  setTodos(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const addTodo = (todo: ITodo) => {
    setTodos(p => ([...p, todo]))
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-10">Todos</h1>
      <CreateEditComponent onCreate={addTodo} />
      <div className="py-3">
        {todos.map((t, i) => <TodoComponent todo={t} key={`${t.id} ${i}`} />)}
      </div>
    </div>
  );
};

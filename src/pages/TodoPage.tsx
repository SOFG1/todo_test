import { useEffect, useState } from "react";
import { CreateEditComponent } from "../components/CreateEditComponent";
import { ITodo, todosApi } from "../api/todosApi";
import { handleRequest } from "../api";
import { TodoComponent } from "../components/TodoComponent";
import { Button } from "../UI/Button";

export const TodoPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const getTodos = async () => {
    const { data, error } = await handleRequest(todosApi.getTodos());
    if (data) {
      setTodos(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const addTodo = (todo: ITodo) => {
    setTodos((p) => [...p, todo]);
  };

  const deleteTodo = (todo: ITodo) => {
    setTodos((p) => p.filter((t) => t !== todo));
  };

  const updateTodo = (todo: ITodo, index: number) => {
    const copy = [...todos];
    copy.splice(index, 1, todo);
    setTodos(copy);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-10">Todos:</h1>
      <Button onClick={() => setShowModal(true)}>Create todo</Button>
      {showModal && (
        <CreateEditComponent
          onCreate={addTodo}
          onClose={() => setShowModal(false)}
        />
      )}
      <div className="py-3">
        {todos.map((t, i) => (
          <TodoComponent
            todo={t}
            onUpdate={(t) => updateTodo(t, i)}
            onDelete={deleteTodo}
            key={`${t.id}${i}`}
          />
        ))}
      </div>
    </div>
  );
};

import { useState } from "react";
import { ITodo, todosApi } from "../api/todosApi";
import { Button } from "../UI/Button";
import { handleRequest } from "../api";
import { CreateEditComponent } from "./CreateEditComponent";

interface IProps {
  todo: ITodo;
  onDelete: (todo: ITodo) => void;
  onUpdate:(todo: ITodo) => void
}

export const TodoComponent = ({ todo, onDelete, onUpdate }: IProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleDelete = async () => {
    setIsFetching(true);
    const { error } = await handleRequest(todosApi.deleteItem(todo.id));
    setIsFetching(false);
    if (!error) {
      onDelete(todo);
    }
  };

  return (
    <>
      {showModal && <CreateEditComponent onUpdate={onUpdate} editData={todo} onClose={() => setShowModal(false)} />}
      <div className="bg-slate-300 mb-4 flex gap-5 items-center p-2 rounded">
        <p className="min-w-44">{todo.title}</p>
        <p>{todo.description}</p>
        <p className="ml-auto">{todo.date}</p>
        <Button
          disabled={isFetching}
          onClick={handleDelete}
          className="bg-red-700 hover:bg-red-800"
        >
          Delete
        </Button>
        <Button
          disabled={isFetching}
          onClick={() => setShowModal(true)}
          className="bg-blue-700 hover:bg-blue-800"
        >
          Edit
        </Button>
      </div>
    </>
  );
};

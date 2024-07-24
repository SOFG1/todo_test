import { useEffect, useState } from "react";
import { TextInput } from "../UI/Input";
import { DateInput } from "../UI/DateInput";
import { formatDate } from "../utils/formatDate";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
import { handleRequest } from "../api";
import { ITodo, todosApi } from "../api/todosApi";

interface IProps {
  onCreate?: (t: ITodo) => void;
  onUpdate?: (t: ITodo) => void;
  onClose: () => void;
  editData?: ITodo;
}

export const CreateEditComponent = ({
  onCreate,
  onUpdate,
  onClose,
  editData,
}: IProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>(formatDate(new Date()));
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleCreate = async () => {
    setIsFetching(true);
    const { data, error } = await handleRequest(
      todosApi.createItem({ title, description, date })
    );
    setIsFetching(false);
    if (data) {
      (onCreate as Function)(data);
      onClose();
      setTitle("");
      setDescription("");
      setDate(formatDate(new Date()));
    }
    if (error) {
      setError(error);
    }
  };

  const handleEdit = async () => {
    setIsFetching(true);
    const { data, error } = await handleRequest(
      todosApi.editItem({
        id: (editData as ITodo).id,
        title,
        description,
        date,
      })
    );
    setIsFetching(false);
    if (data) {
      (onUpdate as Function)(data);
      onClose();
      setTitle("");
      setDescription("");
      setDate(formatDate(new Date()));
    }
    if (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setDescription(editData.description);
      setDate(editData.date);
    }
  }, [editData]);

  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col gap-y-5 w-fit m-auto">
        <TextInput placeholder="Title" value={title} onChange={setTitle} />
        <TextInput
          placeholder="Description"
          value={description}
          onChange={setDescription}
        />
        <DateInput value={date} onChange={setDate} />
        {!editData && (
          <Button
            onClick={handleCreate}
            disabled={isFetching || !title || !description}
          >
            Create todo
          </Button>
        )}
        {editData && (
          <Button
            onClick={handleEdit}
            disabled={isFetching || !title || !description}
            className="bg-blue-700 hover:bg-blue-800"
          >
            Edit todo
          </Button>
        )}
        {error && <p className="text-red-600 text-center">{error}</p>}
      </div>
    </Modal>
  );
};

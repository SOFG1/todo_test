import { useState } from "react";
import { TextInput } from "../UI/Input";
import { DateInput } from "../UI/DateInput";
import { formatDate } from "../utils/formatDate";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
import { handleRequest } from "../api";
import { ITodo, todosApi } from "../api/todosApi";



interface IProps {
  onCreate: (t: ITodo) => void
}

export const CreateEditComponent = ({onCreate}: IProps) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>(formatDate(new Date()));



  const handleCreate = async () => {
    const {data, error} = await handleRequest(todosApi.createItem({title, description, date}))
    if(data) {
      onCreate(data)
      setOpened(false)
      setTitle("")
      setDescription("")
      setDate(formatDate(new Date()))
    }
    if(error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button onClick={() => setOpened(true)}>Create todo</Button>
      {opened && (
        <Modal onClose={() => setOpened(false)}>
          <div className="flex flex-col gap-y-5 w-fit m-auto">
            <TextInput placeholder="Title" value={title} onChange={setTitle} />
            <TextInput
              placeholder="Description"
              value={description}
              onChange={setDescription}
            />
            <DateInput value={date} onChange={setDate} />
            <Button onClick={handleCreate}>Create todo</Button>
          </div>
        </Modal>
      )}
    </>
  );
};

import { useState } from "react"
import { ITodo, todosApi } from "../api/todosApi"
import { Button } from "../UI/Button"
import { handleRequest } from "../api"


interface IProps {
    todo: ITodo
    onDelete: (todo: ITodo) => void
}


export const TodoComponent = ({todo, onDelete}: IProps) => {
    const [isFetching, setIsFetching] = useState<boolean>(false)


    const handleDelete = async () => {
        setIsFetching(true)
        const {error} = await handleRequest(todosApi.deleteItem(todo.id))
        setIsFetching(false)
        if(!error) {
            onDelete(todo)
        }
    }


    return <div className="bg-slate-300 mb-4 flex gap-5 items-center p-2 rounded">
        <p>{todo.title}</p>
        <p>{todo.description}</p>
        <p>{todo.date}</p>
        <Button disabled={isFetching} onClick={handleDelete} className="bg-red-700 hover:bg-red-800 ml-auto">Delete</Button>
        <Button disabled={isFetching} onClick={() => {}} className="bg-blue-700 hover:bg-blue-800">Edit</Button>
    </div>
}
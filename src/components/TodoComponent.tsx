import { ITodo } from "../api/todosApi"
import { Button } from "../UI/Button"


interface IProps {
    todo: ITodo
}


export const TodoComponent = ({todo}: IProps) => {
    return <div className="bg-slate-300 mb-4 flex gap-5 items-center p-2 rounded">
        <p>{todo.title}</p>
        <p>{todo.description}</p>
        <p>{todo.date}</p>
        <Button onClick={() => {}} className="bg-blue-700 hover:bg-blue-800 ml-auto">Edit</Button>
    </div>
}
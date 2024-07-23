import { CreateEditComponent } from "../components/CreateEditComponent";

export const TodoPage = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-10">Todos</h1>
      <CreateEditComponent />
    </div>
  );
};

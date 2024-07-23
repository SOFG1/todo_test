import { axiosInstance } from ".";

const userId = 11; //User with empty list initially

export interface ITodo {
  id: number;
  title: string;
  description: string;
  date: string;
}

export type ICreateTodo = Omit<ITodo, "id">;

export const todosApi = {
  getTodos: async () => {
    return await axiosInstance.get("/todos", {
      params: {
        userId,
      },
    });
  },
  createItem: async (data: ICreateTodo) => {
    return await axiosInstance.post(`/todos`, {
      ...data,
      userId,
    });
  },
  deleteItem: async (id: number) => {
    return await axiosInstance.delete(`/todos/${id}`);
  },
  editItem: async (data: ITodo) => {
    return await axiosInstance.patch(`/todos/${data.id}`, {userId, ...data});
  },
};

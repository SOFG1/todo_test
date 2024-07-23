import { axiosInstance } from ".";

const userId = 11; //User with empty list initially

export interface ITodo {
  id: number;
  title: string;
  description: string;
  date: string;
  userId: number;
}

export type ICreateTodo = Omit<ITodo, "id" | "userId">;

export const todosApi = {
  getTodos: async () => {
    return await axiosInstance.get("/todos", {
      params: {
        userId,
      },
    });
  },
  createItem: async ({ title, description, date }: ICreateTodo) => {
    return await axiosInstance.post(`/todos`, {
      title,
      description,
      date,
      userId,
    });
  },
  deleteItem: async (id: number) => {
    return await axiosInstance.delete(`/todos/${id}`);
  },
  editItem: async (token: string, id: string, data: any) => {
    return await axiosInstance.post(`/userdocs/set/${id}`, data, {
      headers: {
        "x-auth": token,
      },
    });
  },
};

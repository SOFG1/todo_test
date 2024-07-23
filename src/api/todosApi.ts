import { axiosInstance } from ".";



const userId = 194

export interface ITodo {
  id: number;
  title: string;
  description: string;
  date: string;
  userId: number
}

export type ICreateTodo = Omit<ITodo, "id" | "userId">;

export const todosApi = {
  getTodos: async () => {
    return await axiosInstance.get("/todos", {
      params: {
        userId
      },
    })
  },
  createItem: async ({ title, description, date }: ICreateTodo) => {
    return await axiosInstance.post(`/todos`, { title, description, date, userId });
  },
  deleteItem: async (token: string, id: string) => {
    return await axiosInstance.post(
      `/userdocs/delete/${id}`,
      {},
      {
        headers: {
          "x-auth": token,
        },
      }
    );
  },
  editItem: async (token: string, id: string, data: any) => {
    return await axiosInstance.post(`/userdocs/set/${id}`, data, {
      headers: {
        "x-auth": token,
      },
    });
  },
};

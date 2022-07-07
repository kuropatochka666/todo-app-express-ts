interface ITodos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getAllTodos = async (): Promise<ITodos[]> => {
  const data = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
  ];
  return data;
};

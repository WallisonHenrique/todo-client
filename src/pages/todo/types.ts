export interface TodoType {
  id: number;
  name: string;
  completed?: boolean;
}

export interface TodoStateType {
  error: string;
  loading: boolean;
  todos: TodoType[];
}

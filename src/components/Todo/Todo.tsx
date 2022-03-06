import "./Todo.scss";

interface ITodosProps {
  id: number;
}

export const Todo = ({ id }: ITodosProps) => {
  return <div className="TodoItem">TODO with {id}</div>;
};

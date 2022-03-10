import './Todo.scss';

interface ITodosProps {
    id: number;
}

export const Todo = ({ id }: ITodosProps) => {
    return <div className="todo-item">TODO with id - {id}</div>;
};

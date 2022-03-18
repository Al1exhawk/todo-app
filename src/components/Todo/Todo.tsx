import './Todo.scss';

import { TodoI } from '@utils/types/todo';

export interface ITodoProps extends TodoI {}

export const Todo = ({ id, text }: ITodoProps) => {
    return (
        <div data-testid={`todo-item-#${id}`} className="todo-item">
            <div>TODO with id - {id}</div>
            <div>{text}</div>
        </div>
    );
};

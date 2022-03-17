import './Todo.scss';

import { TodoI } from '@utils/types/todo';

export interface ITodoProps extends TodoI {}

export const Todo = ({ id }: ITodoProps) => {
    return (
        <div data-testid={`todo-item-#${id}`} className="todo-item">
            TODO with id - {id}
        </div>
    );
};

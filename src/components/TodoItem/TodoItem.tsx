import './TodoItem.scss';

import { Todo } from '@utils/types/todo';

export type TodoProps = Readonly<Todo>;

export const TodoItem = ({ id, text }: TodoProps) => {
    return (
        <div data-testid={`todo-item-#${id}`}>
            <div>TODO with id - {id}</div>
            <div>{text}</div>
        </div>
    );
};

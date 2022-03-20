import './TodoItem.scss';

import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { Todo } from '@utils/types/todo';

export type TodoProps = Readonly<Todo>;

export const TodoItem = ({ id, text }: TodoProps) => {
    return (
        <div data-testid={`todo-item-#${id}`}>
            <div>TODO with id - {id}</div>
            <div>{text}</div>
            <IconButton color="error" aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </div>
    );
};

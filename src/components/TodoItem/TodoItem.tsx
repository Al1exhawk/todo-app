import './TodoItem.scss';

import { useRemoveTodoItem } from '@hooks/useRemoveTodoItem/useRemoveTodoItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { Todo } from '@utils/types/todo';

export type TodoProps = Readonly<Todo>;

export const TodoItem = ({ id, text }: TodoProps) => {
    const { removeTodoItem } = useRemoveTodoItem();

    const onRemoveClick = () => {
        removeTodoItem(id);
    };
    return (
        <div data-testid={`todo-item-#${id}`}>
            <div>TODO with id - {id}</div>
            <div>{text}</div>
            <IconButton onClick={onRemoveClick} color="error" aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </div>
    );
};

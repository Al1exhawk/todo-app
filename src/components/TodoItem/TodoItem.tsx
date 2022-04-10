import './TodoItem.scss';

import { Checkbox, Grid, Paper, Typography } from '@mui/material';
import { Todo } from '@utils/types/todo';

import { Actions } from './Actions';

interface OwnProps {
    editTodoItem: (newTodoItemValue: Todo) => void;
    removeTodoItem: (id: number | string) => void;
}

export type TodoProps = Readonly<Todo> & Readonly<OwnProps>;

export const TodoItem = ({ id, text, isDone, removeTodoItem, editTodoItem }: TodoProps) => {
    const onDoneChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        editTodoItem({ id, text, isDone: target.checked });
    };

    const onRemoveClick = () => {
        removeTodoItem(id);
    };

    const onEditClick = () => {
        console.log(`edit todo ${id}`);
    };

    return (
        <Paper>
            <Grid display="flex" justifyContent="space-between" alignItems="center" data-testid={`todo-item-#${id}`}>
                <Checkbox checked={isDone} onChange={onDoneChange} color="success" />
                <Typography>{text}</Typography>
                <Actions onEditClick={onEditClick} onRemoveClick={onRemoveClick} />
            </Grid>
        </Paper>
    );
};

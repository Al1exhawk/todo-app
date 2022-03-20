import './TodoItem.scss';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Checkbox, Grid, IconButton, Paper, Typography } from '@mui/material';
import { Todo } from '@utils/types/todo';

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

    return (
        <Paper>
            <Grid display="flex" justifyContent="space-between" alignItems="center" data-testid={`todo-item-#${id}`}>
                <Checkbox checked={isDone} onChange={onDoneChange} color="success" />
                <Typography>{text}</Typography>
                <Grid>
                    <IconButton color="warning" aria-label="delete">
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={onRemoveClick} color="error" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    );
};

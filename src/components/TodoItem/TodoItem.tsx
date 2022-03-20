import './TodoItem.scss';

import { useRemoveTodoItem } from '@hooks/useRemoveTodoItem/useRemoveTodoItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, Grid, IconButton, Paper, Typography } from '@mui/material';
import { Todo } from '@utils/types/todo';

export type TodoProps = Readonly<Todo>;

export const TodoItem = ({ id, text, isDone }: TodoProps) => {
    const { removeTodoItem } = useRemoveTodoItem();

    const onRemoveClick = () => {
        removeTodoItem(id);
    };
    return (
        <Paper>
            <Grid
                display="flex"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                data-testid={`todo-item-#${id}`}
            >
                <Checkbox checked={isDone} />
                <Typography>{text}</Typography>
                <IconButton onClick={onRemoveClick} color="error" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </Paper>
    );
};

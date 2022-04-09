import { useAddTodoItem } from '@hooks/useAddTodoItem/useAddTodoItem';
import AddIcon from '@mui/icons-material/Add';
import { Grid, IconButton, Paper, TextField } from '@mui/material';

export const TodoItemCreator = () => {
    const { todoText, setTodoText, addTodoItem } = useAddTodoItem();

    return (
        <Paper>
            <Grid container display="flex" justifyContent="space-between" alignContent="center">
                <TextField
                    value={todoText}
                    onChange={setTodoText}
                    data-testid="add-item-input"
                    placeholder="I'm planning to do..."
                />
                <IconButton size="large" data-testid="add-item-button" onClick={addTodoItem} color="primary">
                    <AddIcon aria-label="add" />
                </IconButton>
            </Grid>
        </Paper>
    );
};

import { useAddTodoItem } from '@hooks/useAddTodoItem/useAddTodoItem';
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Paper, TextField } from '@mui/material';

export const TodoItemCreator = () => {
    const { todoText, setTodoText, addTodoItem } = useAddTodoItem();

    return (
        <Paper>
            <TextField
                value={todoText}
                onChange={setTodoText}
                data-testid="add-item-input"
                placeholder="I'm planning to do..."
            />
            <IconButton data-testid="add-item-button" onClick={addTodoItem} color="primary">
                <AddIcon aria-label="delete" />
            </IconButton>
        </Paper>
    );
};

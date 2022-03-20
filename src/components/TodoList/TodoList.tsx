import './TodoList.scss';

import { TodoItem } from '@components/TodoItem/TodoItem';
import { useEditTodoItem } from '@hooks/useEditTodoItem/useEditTodoItem';
import { useRemoveTodoItem } from '@hooks/useRemoveTodoItem/useRemoveTodoItem';
import { Grid } from '@mui/material';
import { searchTodosSelector } from '@store/selectors/todosSearch/todosSearch';
import { useRecoilValue } from 'recoil';

export function TodoList() {
    const todos = useRecoilValue(searchTodosSelector);

    const { removeTodoItem } = useRemoveTodoItem();
    const { editTodoItem } = useEditTodoItem();

    return (
        <Grid container item alignItems="center" display="grid" gap={5} direction="column" wrap="nowrap">
            {todos.map(({ id, ...rest }) => (
                <Grid item xs={6} key={id}>
                    <TodoItem id={id} removeTodoItem={removeTodoItem} editTodoItem={editTodoItem} {...rest} />
                </Grid>
            ))}
        </Grid>
    );
}

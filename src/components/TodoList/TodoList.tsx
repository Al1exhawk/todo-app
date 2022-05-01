import './TodoList.scss';

import { TodoItem } from '@components/TodoItem/TodoItem';
import { useEditTodoItem } from '@hooks/useEditTodoItem/useEditTodoItem';
import { useRemoveTodoItem } from '@hooks/useRemoveTodoItem/useRemoveTodoItem';
import { Stack } from '@mui/material';
import { sortTodosSelector } from '@store/selectors/sortTodo/sortTodo';
import { useRecoilValue } from 'recoil';

export function TodoList() {
    const todos = useRecoilValue(sortTodosSelector);

    const { removeTodoItem } = useRemoveTodoItem();
    const { editTodoItem } = useEditTodoItem();

    return (
        <Stack direction="column" spacing={3}>
            {todos.map(({ id, ...rest }) => (
                <TodoItem key={id} id={id} removeTodoItem={removeTodoItem} editTodoItem={editTodoItem} {...rest} />
            ))}
        </Stack>
    );
}

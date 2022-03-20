import { Search } from '@components/Search/Search';
import { TodoItemCreator } from '@components/TodoItemCreator/TodoItemCreator';
import { TodoList } from '@components/TodoList/TodoList';
import { Grid } from '@mui/material';

export function TodoDashboardPage() {
    return (
        <Grid container display="grid" justifyContent="center" direction="column">
            <Search />
            <TodoItemCreator />
            <TodoList />
        </Grid>
    );
}

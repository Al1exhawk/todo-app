import { Search } from '@components/Search/Search';
import { SortSelector } from '@components/SortSelector/SortSelector';
import { TodoItemCreator } from '@components/TodoItemCreator/TodoItemCreator';
import { TodoList } from '@components/TodoList/TodoList';
import { Grid } from '@mui/material';

export function TodoDashboardPage() {
    return (
        <Grid container display="grid" justifyContent="center" gap={2}>
            <Search />
            <SortSelector />
            <TodoItemCreator />
            <TodoList />
        </Grid>
    );
}

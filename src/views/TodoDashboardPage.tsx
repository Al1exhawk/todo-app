import Background from '@components/Background/Background';
import { Search } from '@components/Search/Search';
import { Todos } from '@components/Todos/Todos';
import { Grid } from '@mui/material';

export function TodoDashboardPage() {
    return (
        <Grid container display="grid" justifyContent="center" direction="column">
            <Search />
            <Todos />
        </Grid>
    );
}

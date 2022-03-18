import Background from '@components/Background/Background';
import { Search } from '@components/Search/Search';
import { Todos } from '@components/Todos/Todos';

export function TodoDashboardPage() {
    return (
        <Background>
            <Search />
            <Todos />
        </Background>
    );
}

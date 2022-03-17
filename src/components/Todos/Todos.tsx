import './Todos.scss';

import { Todo } from '@components/Todo/Todo';
import { searchTodosSelector } from '@store/selectors/todosSearch/todosSearch';
import { useRecoilValue } from 'recoil';

export function Todos() {
    const todos = useRecoilValue(searchTodosSelector);
    return (
        <div className="todos">
            {todos.map(({ id, ...rest }) => (
                <Todo key={id} id={id} {...rest} />
            ))}
        </div>
    );
}

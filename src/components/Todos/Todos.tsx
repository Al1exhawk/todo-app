import './Todos.scss';

import { Todo } from '@components/Todo/Todo';
import { todosSelector } from '@store/todos/todosAtom';
import { useRecoilValue } from 'recoil';

export function Todos() {
    const todos = useRecoilValue(todosSelector);
    return (
        <div className="todos">
            {todos.map((i) => (
                <Todo key={i} id={i} />
            ))}
        </div>
    );
}

import './Todos.scss';

import { Todo } from '@components/Todo/Todo';

const ids = Array.from(Array(10).keys());

export function Todos() {
    return (
        <div className="todos">
            {ids.map((i) => (
                <Todo key={i} id={i} />
            ))}
        </div>
    );
}

import { Todo } from '@components/Todo/Todo';
import './Todos.scss';

const ids = Array.from(Array(10).keys());

export const Todos = () => {
    return (
        <div className="todos">
            {ids.map((i) => (
                <Todo key={i} id={i} />
            ))}
        </div>
    );
};

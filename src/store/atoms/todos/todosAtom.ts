import { Todo } from '@utils/types/todo';
import { atom } from 'recoil';

const todos: Array<Todo> = Array.from(Array(5).keys()).map((value) => ({
    id: value,
    text: `some todo ${value}`,
    isDone: false,
}));

export const todosAtom = atom({
    key: 'todosState',
    default: todos,
});

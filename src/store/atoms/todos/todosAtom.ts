import { TodoI } from '@utils/types/todo';
import { atom } from 'recoil';

const todos: Array<TodoI> = Array.from(Array(5).keys()).map((value) => ({ id: value, text: '', isDone: false }));

export const todosAtom = atom({
    key: 'todosState',
    default: todos,
});

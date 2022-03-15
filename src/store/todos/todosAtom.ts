import { atom, selector } from 'recoil';

const todos = Array.from(Array(10).keys());

export const todosAtom = atom({
    key: 'todosState',
    default: todos,
});

export const todosSelector = selector({
    key: 'todosSelector',
    get: ({ get }) => {
        return get(todosAtom);
    },
});

import { searchAtom } from '@store/atoms/search/searchAtom';
import { todosAtom } from '@store/atoms/todos/todosAtom';
import { selector } from 'recoil';

export const searchTodosSelector = selector({
    key: 'searchTodosSelector',
    get: ({ get }) => {
        const searchString = get(searchAtom);
        const allTodos = get(todosAtom);

        return searchString ? allTodos.filter(({ text }) => text.includes(searchString)) : allTodos;
    },
});

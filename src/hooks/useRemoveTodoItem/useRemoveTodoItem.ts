import { todosAtom } from '@store/atoms/todos/todosAtom';
import { useSetRecoilState } from 'recoil';

export const useRemoveTodoItem = () => {
    const setTodoList = useSetRecoilState(todosAtom);

    const removeTodoItem = (todoItemIdToRemove: number | string) => {
        setTodoList((ollTodoList) => ollTodoList.filter(({ id }) => id !== todoItemIdToRemove));
    };

    return { removeTodoItem };
};

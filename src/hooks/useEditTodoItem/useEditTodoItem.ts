import { todosAtom } from '@store/atoms/todos/todosAtom';
import { Todo } from '@utils/types/todo';
import { useSetRecoilState } from 'recoil';

export const useEditTodoItem = () => {
    const setTodoList = useSetRecoilState(todosAtom);

    const editTodoItem = (newTodoItemValue: Todo) => {
        setTodoList((ollTodoList) =>
            ollTodoList.map((todoItem) => {
                return todoItem.id === newTodoItemValue.id ? newTodoItemValue : todoItem;
            }),
        );
    };

    return { editTodoItem };
};

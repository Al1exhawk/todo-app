import { todosAtom } from '@store/atoms/todos/todosAtom';
import { Todo } from '@utils/types/todo';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';

export const useAddTodoItem = () => {
    const [todoText, setTodoText] = useState('');
    const setTodoList = useSetRecoilState(todosAtom);

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(target.value);
    };

    const addTodoItem = () => {
        const newTodoItem: Todo = {
            id: uuid(),
            text: todoText,
            isDone: false,
        };

        setTodoList((olldTodoList) => [newTodoItem, ...olldTodoList]);
        setTodoText('');
    };

    return { todoText, setTodoText: onInputChange, addTodoItem };
};

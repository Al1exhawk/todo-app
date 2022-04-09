import { Todo } from '@utils/types/todo';

export const sortAccordingIncompleteness = (todos: Array<Todo>) => {
    return todos.slice().sort((firstTodo, secondTodo) => Number(firstTodo.isDone) - Number(secondTodo.isDone));
};

import { Todo } from '@utils/types/todo';

export const sortAccordingCompleteness = (todos: Array<Todo>) => {
    return todos.slice().sort((firstTodo, secondTodo) => Number(secondTodo.isDone) - Number(firstTodo.isDone));
};

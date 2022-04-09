import { cleanup, render } from '@testing-library/react';

import { TodoItem, TodoProps } from './TodoItem';

const mockedProps: TodoProps = {
    id: 2,
    text: 'do something',
    isDone: false,
    editTodoItem: jest.fn(),
    removeTodoItem: jest.fn(),
};

describe('<TodoItem/>', () => {
    afterEach(() => {
        cleanup();
    });

    test('should render component properly', () => {
        const wrapper = render(<TodoItem {...mockedProps} />);

        expect(wrapper).not.toBeNull();
    });

    test('should render todo text properly', () => {
        const wrapper = render(<TodoItem {...mockedProps} />);
        const { id, text } = mockedProps;
        const todoContainer = wrapper.getByTestId(`todo-item-#${id}`);
        const textContainer = wrapper.getByText(text);

        expect(todoContainer).not.toBeNull();
        expect(textContainer).not.toBeNull();
    });
});

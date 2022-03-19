import { cleanup, render } from '@testing-library/react';

import { TodoItem, TodoProps } from './TodoItem';

const mockedProps: TodoProps = {
    id: 2,
    text: 'do something',
    isDone: false,
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
        const { id } = mockedProps;
        const textContainer = wrapper.getByTestId(`todo-item-#${id}`);

        expect(textContainer).not.toBeNull();
    });
});

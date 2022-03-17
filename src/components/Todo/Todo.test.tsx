import { cleanup, render } from '@testing-library/react';

import { ITodoProps, Todo } from './Todo';

const mockedProps: ITodoProps = {
    id: 2,
    text: 'do something',
    isDone: false,
};

describe('<Todo/>', () => {
    afterEach(() => {
        cleanup();
    });

    test('should render component properly', () => {
        const wrapper = render(<Todo {...mockedProps} />);

        expect(wrapper).not.toBeNull();
    });

    test('should render todo text properly', () => {
        const wrapper = render(<Todo {...mockedProps} />);
        const { id } = mockedProps;
        const textContainer = wrapper.getByTestId(`todo-item-#${id}`);

        expect(textContainer).not.toBeNull();
    });
});

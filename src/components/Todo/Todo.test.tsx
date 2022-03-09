import { cleanup, render } from '@testing-library/react';
import { Todo } from './Todo';

const mocks = {
    id: 2,
};

const { id } = mocks;

describe('<Todo/>', () => {
    afterEach(() => {
        cleanup();
    });

    test('should render component properly', () => {
        const wrapper = render(<Todo id={id} />);
        expect(wrapper).not.toBeNull();
    });
});

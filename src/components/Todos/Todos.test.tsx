import { cleanup, render } from '@testing-library/react';
import { Todos } from './Todos';

describe('<Todos/>', () => {
    afterEach(() => {
        cleanup();
    });

    test('should render component properly', () => {
        const wrapper = render(<Todos />);
        expect(wrapper).not.toBeNull();
    });
});

import { cleanup, render } from '@testing-library/react';
import { Background } from './Background';

describe('<Background/>', () => {
    afterEach(() => {
        cleanup();
    });

    test('should render component properly', () => {
        const wrapper = render(<Background />);
        expect(wrapper).not.toBeNull();
    });

    test('should render children properly', () => {
        const testId = 'child-div';
        const wrapper = render(
            <Background>
                <div data-testid={testId}></div>
            </Background>,
        );
        const childNode = wrapper.findByTestId(testId);

        expect(childNode).not.toBeNull();
        expect(wrapper).not.toBeNull();
    });
});

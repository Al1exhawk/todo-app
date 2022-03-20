import { cleanup, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { TodoItemCreator } from './TodoItemCreator';

describe('<TodoItemCreator/>', () => {
    afterEach(() => {
        cleanup();
    });

    test('should render component properly', () => {
        const wrapper = render(
            <RecoilRoot>
                <TodoItemCreator />
            </RecoilRoot>,
        );
        const addInput = wrapper.getByTestId('add-item-input');
        const addButton = wrapper.getByTestId('add-item-button');

        expect(addInput).not.toBeNull();
        expect(addButton).not.toBeNull();
    });
});

import { cleanup, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { TodoList } from './TodoList';

describe('<TodoList/>', () => {
    afterEach(() => {
        cleanup();
    });

    test('should render component properly', () => {
        const wrapper = render(
            <RecoilRoot>
                <TodoList />
            </RecoilRoot>,
        );
        expect(wrapper).not.toBeNull();
    });
});

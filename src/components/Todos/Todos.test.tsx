import { cleanup, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { Todos } from './Todos';

describe('<Todos/>', () => {
    afterEach(() => {
        cleanup();
    });

    test('should render component properly', () => {
        const wrapper = render(
            <RecoilRoot>
                <Todos />
            </RecoilRoot>,
        );
        expect(wrapper).not.toBeNull();
    });
});

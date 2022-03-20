import { cleanup, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { Search } from './Search';

describe('<Search/>', () => {
    afterEach(() => {
        cleanup();
    });

    test('should render component properly', () => {
        const wrapper = render(
            <RecoilRoot>
                <Search />
            </RecoilRoot>,
        );

        const searchInput = wrapper.getByTestId('search-field');

        expect(searchInput).not.toBeNull();
    });
});

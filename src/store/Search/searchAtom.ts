import { atom, selector } from 'recoil';

export const searchAtom = atom({
    key: 'searchState',
    default: '',
});

export const searchSelector = selector({
    key: 'searchSelector',
    get: ({ get }) => {
        return get(searchAtom);
    },
});

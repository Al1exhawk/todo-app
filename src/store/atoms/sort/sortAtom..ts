import { SortTypes, SortTypesEnum } from '@utils/types/sortTypesEnum';
import { atom } from 'recoil';

export const sortAtom = atom<SortTypes>({
    key: 'sortState',
    default: SortTypesEnum.NONE,
});

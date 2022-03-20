import { SortTypesEnum } from '@utils/types/SortTypesEnum';
import { atom } from 'recoil';

export const sortAtom = atom({
    key: 'sortState',
    default: SortTypesEnum.UNDONE,
});

import { SortTypesEnum } from '@utils/types/sortTypesEnum';
import { atom } from 'recoil';

export const sortAtom = atom({
    key: 'sortState',
    default: SortTypesEnum.STARTTR,
});

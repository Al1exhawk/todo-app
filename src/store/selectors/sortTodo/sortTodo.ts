import { sortAtom } from '@store/atoms/sort/sortAtom.';
import { searchTodosSelector } from '@store/selectors/todosSearch/todosSearch';
import { sortAccordingCompleteness } from '@utils/helpers/sortAccordingCompleteness/sortAccordingCompleteness';
import { sortAccordingIncompleteness } from '@utils/helpers/sortAccordingIncompleteness/sortAccordingIncompleteness';
import { SortTypesEnum } from '@utils/types/sortTypesEnum';
import { selector } from 'recoil';

export const sortTodosSelector = selector({
    key: 'visibleTodosSelector',
    get: ({ get }) => {
        const sortType = get(sortAtom);
        const todos = get(searchTodosSelector);

        switch (sortType) {
            case SortTypesEnum.DONE:
                return sortAccordingCompleteness(todos);

            case SortTypesEnum.UNDONE:
                return sortAccordingIncompleteness(todos);

            default:
                return todos;
        }
    },
});

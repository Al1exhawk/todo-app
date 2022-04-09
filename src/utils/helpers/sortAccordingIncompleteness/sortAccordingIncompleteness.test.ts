import { Todo } from '@utils/types/todo';

import { sortAccordingIncompleteness } from './sortAccordingIncompleteness';

const mockInputArray: Todo[] = [
    { id: '1', isDone: false, text: 'undone-1' },
    { id: '2', isDone: true, text: 'done-1' },
    { id: '3', isDone: false, text: 'undone-2' },
    { id: '4', isDone: true, text: 'done-2' },
];

const mockOutputArray: Todo[] = [
    { id: '1', isDone: false, text: 'undone-1' },
    { id: '3', isDone: false, text: 'undone-2' },
    { id: '2', isDone: true, text: 'done-1' },
    { id: '4', isDone: true, text: 'done-2' },
];

describe('sortAccordingIncompleteness', () => {
    test('should sort array correctly', () => {
        const result = sortAccordingIncompleteness(mockInputArray);

        expect(result).toStrictEqual(mockOutputArray);
    });
});

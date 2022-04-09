export const SortTypesEnum = {
    NONE: 'None',
    DONE: 'Done',
    UNDONE: 'Undone',
    LATEST: 'Latest',
    OLDEST: 'Oldest',
} as const;

export type SortTypes = typeof SortTypesEnum[keyof typeof SortTypesEnum];

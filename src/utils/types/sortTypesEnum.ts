export const SortTypesEnum = {
    STARTTR: 'STARTER',
    DONE: 'DONE',
    UNDONE: 'UNDONE',
    LATEST: 'LATEST',
    OLDEST: 'OLDEST',
} as const;

export type SortTypes = typeof SortTypesEnum[keyof typeof SortTypesEnum];

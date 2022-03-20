export function removeItemAtIndex<T>(array: Array<T>, index: number): Array<T> {
    return [...array.slice(0, index), ...array.slice(index + 1)];
}

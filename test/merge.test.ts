import { merge } from '../src/merge';

describe('merge function - Pro Level Test Suite', () => {

    test('Standard Case: should merge three sorted arrays correctly', () => {
        const c1 = [1, 4, 7];
        const c2 = [8, 5, 2];
        const c3 = [3, 6, 9];
        expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    describe('Empty Array Cases', () => {
        test('should return empty array when all inputs are empty', () => {
            expect(merge([], [], [])).toEqual([]);
        });

        test('should handle when one array is empty', () => {
            expect(merge([1, 2], [], [3, 4])).toEqual([1, 2, 3, 4]);
        });

        test('should handle when two arrays are empty', () => {
            expect(merge([], [10, 5], [])).toEqual([5, 10]);
        });
    });

    test('Duplicates: should handle duplicate values within and across arrays', () => {
        const c1 = [1, 2, 2];
        const c2 = [3, 2, 1];
        const c3 = [1, 3, 4];
        expect(merge(c1, c2, c3)).toEqual([1, 1, 1, 2, 2, 2, 3, 3, 4]);
    });

    test('Negative Numbers: should merge correctly with negative values', () => {
        const c1 = [-10, -5, 0];
        const c2 = [5, -2, -8];
        const c3 = [-1, 2, 4];
        expect(merge(c1, c2, c3)).toEqual([-10, -8, -5, -2, -1, 0, 2, 4, 5]);
    });

    test('Single Elements: should merge arrays with only one element each', () => {
        expect(merge([10], [20], [5])).toEqual([5, 10, 20]);
    });

    test('Gaps: should handle arrays where values do not overlap', () => {
        const c1 = [1, 2, 3];
        const c2 = [100, 90, 80];
        const c3 = [1000, 2000];
        expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 80, 90, 100, 1000, 2000]);
    });

    describe('Non-numeric and Invalid Data Handling', () => {

        test('should handle string values by bypassing or failing gracefully', () => {
            const c1 = [1, "5" as any, 10];
            const c2 = [12, 6, 2];
            const c3 = [3, "apple" as any, 15];

            const result = merge(c1, c2, c3);

            expect(result).toContain(1);
            expect(result).toContain(15);
        });

        test('should handle NaN and Infinity', () => {
            const c1 = [1, NaN, 10];
            const c2 = [Infinity, 6, 2];
            const c3 = [3, 7, 15];

            const result = merge(c1, c2, c3);

            expect(result).toContain(6);
            expect(result).toContain(15);
            expect(result[result.length - 1]).toBe(Infinity);
        });

        test('should handle null or undefined gracefully', () => {
            const c1 = [1, null as any, 5];
            const c2 = [10, 4, 2];
            const c3 = [3, undefined as any, 7];

            const result = merge(c1, c2, c3);

            expect(result.filter(x => typeof x === 'number').length).toBeGreaterThan(0);
        });
    });
});
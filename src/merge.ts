export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const result: number[] = [];
    const clean = (arr: any[]) => arr.filter(item => typeof item === 'number' && !isNaN(item));
    
    const c1 = clean(collection_1);
    const c2_raw = clean(collection_2);
    const c3 = clean(collection_3);
    
    const c2_sorted = [];
    for (let i = c2_raw.length - 1; i >= 0; i--) {
        c2_sorted.push(c2_raw[i]);
    }

    let i = 0, j = 0, k = 0;

    while (i < c1.length || j < c2_sorted.length || k < c3.length) {
        const v1: number = i < c1.length ? (c1[i] as number) : Infinity;
        const v2: number = j < c2_sorted.length ? (c2_sorted[j] as number) : Infinity;
        const v3: number = k < c3.length ? (c3[k] as number) : Infinity;

        if (i < c1.length && v1 <= v2 && v1 <= v3) {
            result.push(v1);
            i++;
        } else if (j < c2_sorted.length && v2 <= v1 && v2 <= v3) {
            result.push(v2);
            j++;
        } else if (k < c3.length) {
            result.push(v3);
            k++;
        }
    }

    return result;
}
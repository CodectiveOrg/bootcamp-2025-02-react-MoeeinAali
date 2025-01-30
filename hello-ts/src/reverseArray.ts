export function reverseArray<T>(arr: Array<T>): Array<T> {
    let reversedArr: Array<T> = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }

    return reversedArr;
}

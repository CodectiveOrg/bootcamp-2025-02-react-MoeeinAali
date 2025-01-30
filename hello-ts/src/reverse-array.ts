export function reverseArray<T>(elements: Array<T>): Array<T> {
    const reversedElements: Array<T> = [];

    for (let i = elements.length - 1; i >= 0; i--) {
        reversedElements.push(elements[i]);
    }

    return reversedElements;
}

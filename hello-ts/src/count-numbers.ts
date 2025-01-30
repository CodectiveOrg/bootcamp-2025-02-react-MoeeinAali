export function countNumbers(elements: Array<unknown>): number {
    let numbersCount = 0
    for (const element of elements) {
        if (typeof element === "number") {
            numbersCount += 1
        }
    }
    return numbersCount
}

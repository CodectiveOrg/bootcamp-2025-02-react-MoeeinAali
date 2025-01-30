interface SortableObject {
    created_at: string;
    modified_at?: string;

    [key: string]: unknown;
}


export function sortArray(elements: Array<SortableObject>): Array<SortableObject> {
    const n = elements.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            const dateA = new Date(elements[j].modified_at ?? elements[j].created_at).getTime();
            const dateB = new Date(elements[j + 1].modified_at ?? elements[j + 1].created_at).getTime();

            if (dateA < dateB) {
                [elements[j], elements[j + 1]] = [elements[j + 1], elements[j]];
            }
        }
    }

    return elements;
}

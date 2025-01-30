type DateString = `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`;
interface SortableObject {
    created_at: DateString;
    modified_at?: DateString;

    [key: string]: unknown;
}


export function sortArray(elements: Array<SortableObject>): Array<SortableObject> {
    return elements.sort((a, b) => {
        const dateA = new Date(a.modified_at ?? a.created_at).getTime();
        const dateB = new Date(b.modified_at ?? b.created_at).getTime();
        return dateB - dateA;
    });
}


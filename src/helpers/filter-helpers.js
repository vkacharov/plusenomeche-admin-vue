export function createSearchFilter(filter) {
    const searchFilter = {};

    for (let key in filter) {
        const field = filter[key];
        if (field.value) {
            if (field.type == 'string') {
                searchFilter[key] = {
                    match: field.value
                }
            }

            if (field.type == 'date') {
                const from = field.value[0].toISOString();
                const to = field.value[1].toISOString();
                searchFilter[key] = {
                    range: [from, to]
                }
            }
        }
    }

    return searchFilter;
}

export function createSumAggregate(field) {
    return {
        type: 'sum', 
        field: field, 
        name: field + 'Sum' 
    };
}

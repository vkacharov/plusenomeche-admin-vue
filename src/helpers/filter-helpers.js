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
                console.log(field);
                const from = field.value[0].toISOString();
                const to = field.value[1].toISOString();
                console.log('fromto', [from, to]);
                searchFilter[key] = {
                    range: [from, to]
                }
            }
        }
    }

    console.log(searchFilter);
    return searchFilter;
}

export function createSumAggregate(field) {
    return {
        type: 'sum', 
        field: field, 
        name: field + 'Sum' 
    };
}

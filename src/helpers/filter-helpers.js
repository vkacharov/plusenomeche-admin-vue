export function createSearchFilter(filter) {
    const searchFilter = {};

    for (let field in filter) {
        if (filter[field].value) {
            if (filter[field].type == 'string') {
                searchFilter[field] = {
                    match: filter[field].value
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

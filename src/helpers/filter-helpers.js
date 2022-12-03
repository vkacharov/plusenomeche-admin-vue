export default function createSearchFilter(filter) {
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
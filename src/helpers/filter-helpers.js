export function createSearchFilter(filter) {
    const searchFilter = {};

    for (let key in filter) {
        const field = filter[key];
        if (field.value) {
            if (field.type == 'string' || field.type == 'select') {
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

export async function createSumAggregate(api, field) {
    const sumAggregates = {
      type: 'sum', 
      field: field,
      name: field 
    }

    const apiResult = await api.aggregate(sumAggregates);
    let aggregates = {
        totalSum: 0, 
        totalNumber: 0
    };
    if (apiResult.aggregateItems.length > 0) {
        aggregates = {
            totalSum: apiResult.aggregateItems.find(agg => agg.name == field).result.value,
            totalNumber: apiResult.total
        }
    }

    return aggregates;
}

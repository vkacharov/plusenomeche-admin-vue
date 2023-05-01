/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExpense = /* GraphQL */ `
  query GetExpense($expenseName: String!) {
    getExpense(expenseName: $expenseName) {
      expenseName
      description
      amount
      date
      causeName
      donationName
      allocationName
      createdAt
      updatedAt
    }
  }
`;
export const listExpenses = /* GraphQL */ `
  query ListExpenses(
    $expenseName: String
    $filter: ModelExpenseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listExpenses(
      expenseName: $expenseName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        expenseName
        description
        amount
        date
        causeName
        donationName
        allocationName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const expensesByAllocationName = /* GraphQL */ `
  query ExpensesByAllocationName(
    $allocationName: String!
    $sortDirection: ModelSortDirection
    $filter: ModelExpenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    expensesByAllocationName(
      allocationName: $allocationName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        expenseName
        description
        amount
        date
        causeName
        donationName
        allocationName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchExpenses = /* GraphQL */ `
  query SearchExpenses(
    $filter: SearchableExpenseFilterInput
    $sort: [SearchableExpenseSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableExpenseAggregationInput]
  ) {
    searchExpenses(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        expenseName
        description
        amount
        date
        causeName
        donationName
        allocationName
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getAllocation = /* GraphQL */ `
  query GetAllocation($allocationName: String!) {
    getAllocation(allocationName: $allocationName) {
      allocationName
      description
      date
      causeName
      donationName
      amount
      Expenses {
        items {
          expenseName
          description
          amount
          date
          causeName
          donationName
          allocationName
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAllocations = /* GraphQL */ `
  query ListAllocations(
    $allocationName: String
    $filter: ModelAllocationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAllocations(
      allocationName: $allocationName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        allocationName
        description
        date
        causeName
        donationName
        amount
        Expenses {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const allocationsByCauseName = /* GraphQL */ `
  query AllocationsByCauseName(
    $causeName: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAllocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    allocationsByCauseName(
      causeName: $causeName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        allocationName
        description
        date
        causeName
        donationName
        amount
        Expenses {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const allocationsByDonationName = /* GraphQL */ `
  query AllocationsByDonationName(
    $donationName: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAllocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    allocationsByDonationName(
      donationName: $donationName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        allocationName
        description
        date
        causeName
        donationName
        amount
        Expenses {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchAllocations = /* GraphQL */ `
  query SearchAllocations(
    $filter: SearchableAllocationFilterInput
    $sort: [SearchableAllocationSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableAllocationAggregationInput]
  ) {
    searchAllocations(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        allocationName
        description
        date
        causeName
        donationName
        amount
        Expenses {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getCause = /* GraphQL */ `
  query GetCause($causeName: String!) {
    getCause(causeName: $causeName) {
      causeName
      description
      date
      amount
      type
      Allocations {
        items {
          allocationName
          description
          date
          causeName
          donationName
          amount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCauses = /* GraphQL */ `
  query ListCauses(
    $causeName: String
    $filter: ModelCauseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCauses(
      causeName: $causeName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        causeName
        description
        date
        amount
        type
        Allocations {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchCauses = /* GraphQL */ `
  query SearchCauses(
    $filter: SearchableCauseFilterInput
    $sort: [SearchableCauseSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCauseAggregationInput]
  ) {
    searchCauses(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        causeName
        description
        date
        amount
        type
        Allocations {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getDonation = /* GraphQL */ `
  query GetDonation($donationName: String!) {
    getDonation(donationName: $donationName) {
      donationName
      description
      amount
      type
      date
      donorName
      Allocations {
        items {
          allocationName
          description
          date
          causeName
          donationName
          amount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDonations = /* GraphQL */ `
  query ListDonations(
    $donationName: String
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDonations(
      donationName: $donationName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        donationName
        description
        amount
        type
        date
        donorName
        Allocations {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const donationsByDonorName = /* GraphQL */ `
  query DonationsByDonorName(
    $donorName: String!
    $sortDirection: ModelSortDirection
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    donationsByDonorName(
      donorName: $donorName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        donationName
        description
        amount
        type
        date
        donorName
        Allocations {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchDonations = /* GraphQL */ `
  query SearchDonations(
    $filter: SearchableDonationFilterInput
    $sort: [SearchableDonationSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableDonationAggregationInput]
  ) {
    searchDonations(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        donationName
        description
        amount
        type
        date
        donorName
        Allocations {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getDonor = /* GraphQL */ `
  query GetDonor($donorName: String!) {
    getDonor(donorName: $donorName) {
      donorName
      description
      date
      Donations {
        items {
          donationName
          description
          amount
          type
          date
          donorName
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDonors = /* GraphQL */ `
  query ListDonors(
    $donorName: String
    $filter: ModelDonorFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDonors(
      donorName: $donorName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        donorName
        description
        date
        Donations {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchDonors = /* GraphQL */ `
  query SearchDonors(
    $filter: SearchableDonorFilterInput
    $sort: [SearchableDonorSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableDonorAggregationInput]
  ) {
    searchDonors(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        donorName
        description
        date
        Donations {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;

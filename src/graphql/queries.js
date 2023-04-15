/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExpense = /* GraphQL */ `
  query GetExpense($id: ID!) {
    getExpense(id: $id) {
      id
      expenseName
      description
      amount
      date
      causeID
      causeName
      donationID
      donationName
      allocationID
      allocationName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listExpenses = /* GraphQL */ `
  query ListExpenses(
    $filter: ModelExpenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        expenseName
        description
        amount
        date
        causeID
        causeName
        donationID
        donationName
        allocationID
        allocationName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncExpenses = /* GraphQL */ `
  query SyncExpenses(
    $filter: ModelExpenseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExpenses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        expenseName
        description
        amount
        date
        causeID
        causeName
        donationID
        donationName
        allocationID
        allocationName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const expensesByAllocationID = /* GraphQL */ `
  query ExpensesByAllocationID(
    $allocationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelExpenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    expensesByAllocationID(
      allocationID: $allocationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        expenseName
        description
        amount
        date
        causeID
        causeName
        donationID
        donationName
        allocationID
        allocationName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        id
        expenseName
        description
        amount
        date
        causeID
        causeName
        donationID
        donationName
        allocationID
        allocationName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
  query GetAllocation($id: ID!) {
    getAllocation(id: $id) {
      id
      allocationName
      description
      date
      causeID
      causeName
      donationID
      donationName
      amount
      Expenses {
        items {
          id
          expenseName
          description
          amount
          date
          causeID
          causeName
          donationID
          donationName
          allocationID
          allocationName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAllocations = /* GraphQL */ `
  query ListAllocations(
    $filter: ModelAllocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAllocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        allocationName
        description
        date
        causeID
        causeName
        donationID
        donationName
        amount
        Expenses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAllocations = /* GraphQL */ `
  query SyncAllocations(
    $filter: ModelAllocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAllocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        allocationName
        description
        date
        causeID
        causeName
        donationID
        donationName
        amount
        Expenses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const allocationsByCauseID = /* GraphQL */ `
  query AllocationsByCauseID(
    $causeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAllocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    allocationsByCauseID(
      causeID: $causeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        allocationName
        description
        date
        causeID
        causeName
        donationID
        donationName
        amount
        Expenses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const allocationsByDonationID = /* GraphQL */ `
  query AllocationsByDonationID(
    $donationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAllocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    allocationsByDonationID(
      donationID: $donationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        allocationName
        description
        date
        causeID
        causeName
        donationID
        donationName
        amount
        Expenses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        id
        allocationName
        description
        date
        causeID
        causeName
        donationID
        donationName
        amount
        Expenses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
  query GetCause($id: ID!) {
    getCause(id: $id) {
      id
      causeName
      description
      date
      amount
      type
      Allocations {
        items {
          id
          allocationName
          description
          date
          causeID
          causeName
          donationID
          donationName
          amount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCauses = /* GraphQL */ `
  query ListCauses(
    $filter: ModelCauseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCauses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        causeName
        description
        date
        amount
        type
        Allocations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCauses = /* GraphQL */ `
  query SyncCauses(
    $filter: ModelCauseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCauses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        causeName
        description
        date
        amount
        type
        Allocations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        id
        causeName
        description
        date
        amount
        type
        Allocations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
  query GetDonation($id: ID!) {
    getDonation(id: $id) {
      id
      donationName
      description
      amount
      type
      date
      donorID
      donorName
      Allocations {
        items {
          id
          allocationName
          description
          date
          causeID
          causeName
          donationID
          donationName
          amount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDonations = /* GraphQL */ `
  query ListDonations(
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        donationName
        description
        amount
        type
        date
        donorID
        donorName
        Allocations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDonations = /* GraphQL */ `
  query SyncDonations(
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDonations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        donationName
        description
        amount
        type
        date
        donorID
        donorName
        Allocations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const donationsByDonorID = /* GraphQL */ `
  query DonationsByDonorID(
    $donorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    donationsByDonorID(
      donorID: $donorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        donationName
        description
        amount
        type
        date
        donorID
        donorName
        Allocations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        id
        donationName
        description
        amount
        type
        date
        donorID
        donorName
        Allocations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
  query GetDonor($id: ID!) {
    getDonor(id: $id) {
      id
      donorName
      description
      date
      Donations {
        items {
          id
          donationName
          description
          amount
          type
          date
          donorID
          donorName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDonors = /* GraphQL */ `
  query ListDonors(
    $filter: ModelDonorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        donorName
        description
        date
        Donations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDonors = /* GraphQL */ `
  query SyncDonors(
    $filter: ModelDonorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDonors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        donorName
        description
        date
        Donations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        id
        donorName
        description
        date
        Donations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExpense = /* GraphQL */ `
  query GetExpense($id: ID!) {
    getExpense(id: $id) {
      id
      name
      description
      date
      causeID
      donationID
      amount
      Cause {
        id
        name
        description
        date
        amount
        type
        Expenses {
          nextToken
        }
        createdAt
        updatedAt
      }
      Donation {
        id
        name
        description
        amount
        type
        date
        donorID
        Donor {
          id
          name
          description
          date
          createdAt
          updatedAt
        }
        Expenses {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        name
        description
        date
        causeID
        donationID
        amount
        Cause {
          id
          name
          description
          date
          amount
          type
          createdAt
          updatedAt
        }
        Donation {
          id
          name
          description
          amount
          type
          date
          donorID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const expensesByCauseID = /* GraphQL */ `
  query ExpensesByCauseID(
    $causeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelExpenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    expensesByCauseID(
      causeID: $causeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        date
        causeID
        donationID
        amount
        Cause {
          id
          name
          description
          date
          amount
          type
          createdAt
          updatedAt
        }
        Donation {
          id
          name
          description
          amount
          type
          date
          donorID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const expensesByDonationID = /* GraphQL */ `
  query ExpensesByDonationID(
    $donationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelExpenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    expensesByDonationID(
      donationID: $donationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        date
        causeID
        donationID
        amount
        Cause {
          id
          name
          description
          date
          amount
          type
          createdAt
          updatedAt
        }
        Donation {
          id
          name
          description
          amount
          type
          date
          donorID
          createdAt
          updatedAt
        }
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
        id
        name
        description
        date
        causeID
        donationID
        amount
        Cause {
          id
          name
          description
          date
          amount
          type
          createdAt
          updatedAt
        }
        Donation {
          id
          name
          description
          amount
          type
          date
          donorID
          createdAt
          updatedAt
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
  query GetCause($id: ID!) {
    getCause(id: $id) {
      id
      name
      description
      date
      amount
      type
      Expenses {
        items {
          id
          name
          description
          date
          causeID
          donationID
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
    $filter: ModelCauseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCauses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        date
        amount
        type
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
        name
        description
        date
        amount
        type
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
export const getDonation = /* GraphQL */ `
  query GetDonation($id: ID!) {
    getDonation(id: $id) {
      id
      name
      description
      amount
      type
      date
      donorID
      Donor {
        id
        name
        description
        date
        Donations {
          nextToken
        }
        createdAt
        updatedAt
      }
      Expenses {
        items {
          id
          name
          description
          date
          causeID
          donationID
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
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        amount
        type
        date
        donorID
        Donor {
          id
          name
          description
          date
          createdAt
          updatedAt
        }
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
        name
        description
        amount
        type
        date
        donorID
        Donor {
          id
          name
          description
          date
          createdAt
          updatedAt
        }
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
        name
        description
        amount
        type
        date
        donorID
        Donor {
          id
          name
          description
          date
          createdAt
          updatedAt
        }
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
export const getDonor = /* GraphQL */ `
  query GetDonor($id: ID!) {
    getDonor(id: $id) {
      id
      name
      description
      date
      Donations {
        items {
          id
          name
          description
          amount
          type
          date
          donorID
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
    $filter: ModelDonorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
        id
        name
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

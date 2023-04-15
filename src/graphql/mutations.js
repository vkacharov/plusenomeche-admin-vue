/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExpense = /* GraphQL */ `
  mutation CreateExpense(
    $input: CreateExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    createExpense(input: $input, condition: $condition) {
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
export const updateExpense = /* GraphQL */ `
  mutation UpdateExpense(
    $input: UpdateExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    updateExpense(input: $input, condition: $condition) {
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
export const deleteExpense = /* GraphQL */ `
  mutation DeleteExpense(
    $input: DeleteExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    deleteExpense(input: $input, condition: $condition) {
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
export const createAllocation = /* GraphQL */ `
  mutation CreateAllocation(
    $input: CreateAllocationInput!
    $condition: ModelAllocationConditionInput
  ) {
    createAllocation(input: $input, condition: $condition) {
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
export const updateAllocation = /* GraphQL */ `
  mutation UpdateAllocation(
    $input: UpdateAllocationInput!
    $condition: ModelAllocationConditionInput
  ) {
    updateAllocation(input: $input, condition: $condition) {
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
export const deleteAllocation = /* GraphQL */ `
  mutation DeleteAllocation(
    $input: DeleteAllocationInput!
    $condition: ModelAllocationConditionInput
  ) {
    deleteAllocation(input: $input, condition: $condition) {
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
export const createCause = /* GraphQL */ `
  mutation CreateCause(
    $input: CreateCauseInput!
    $condition: ModelCauseConditionInput
  ) {
    createCause(input: $input, condition: $condition) {
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
export const updateCause = /* GraphQL */ `
  mutation UpdateCause(
    $input: UpdateCauseInput!
    $condition: ModelCauseConditionInput
  ) {
    updateCause(input: $input, condition: $condition) {
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
export const deleteCause = /* GraphQL */ `
  mutation DeleteCause(
    $input: DeleteCauseInput!
    $condition: ModelCauseConditionInput
  ) {
    deleteCause(input: $input, condition: $condition) {
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
export const createDonation = /* GraphQL */ `
  mutation CreateDonation(
    $input: CreateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    createDonation(input: $input, condition: $condition) {
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
export const updateDonation = /* GraphQL */ `
  mutation UpdateDonation(
    $input: UpdateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    updateDonation(input: $input, condition: $condition) {
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
export const deleteDonation = /* GraphQL */ `
  mutation DeleteDonation(
    $input: DeleteDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    deleteDonation(input: $input, condition: $condition) {
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
export const createDonor = /* GraphQL */ `
  mutation CreateDonor(
    $input: CreateDonorInput!
    $condition: ModelDonorConditionInput
  ) {
    createDonor(input: $input, condition: $condition) {
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
export const updateDonor = /* GraphQL */ `
  mutation UpdateDonor(
    $input: UpdateDonorInput!
    $condition: ModelDonorConditionInput
  ) {
    updateDonor(input: $input, condition: $condition) {
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
export const deleteDonor = /* GraphQL */ `
  mutation DeleteDonor(
    $input: DeleteDonorInput!
    $condition: ModelDonorConditionInput
  ) {
    deleteDonor(input: $input, condition: $condition) {
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

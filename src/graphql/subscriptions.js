/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExpense = /* GraphQL */ `
  subscription OnCreateExpense($filter: ModelSubscriptionExpenseFilterInput) {
    onCreateExpense(filter: $filter) {
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
export const onUpdateExpense = /* GraphQL */ `
  subscription OnUpdateExpense($filter: ModelSubscriptionExpenseFilterInput) {
    onUpdateExpense(filter: $filter) {
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
export const onDeleteExpense = /* GraphQL */ `
  subscription OnDeleteExpense($filter: ModelSubscriptionExpenseFilterInput) {
    onDeleteExpense(filter: $filter) {
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
export const onCreateAllocation = /* GraphQL */ `
  subscription OnCreateAllocation(
    $filter: ModelSubscriptionAllocationFilterInput
  ) {
    onCreateAllocation(filter: $filter) {
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
export const onUpdateAllocation = /* GraphQL */ `
  subscription OnUpdateAllocation(
    $filter: ModelSubscriptionAllocationFilterInput
  ) {
    onUpdateAllocation(filter: $filter) {
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
export const onDeleteAllocation = /* GraphQL */ `
  subscription OnDeleteAllocation(
    $filter: ModelSubscriptionAllocationFilterInput
  ) {
    onDeleteAllocation(filter: $filter) {
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
export const onCreateCause = /* GraphQL */ `
  subscription OnCreateCause($filter: ModelSubscriptionCauseFilterInput) {
    onCreateCause(filter: $filter) {
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
export const onUpdateCause = /* GraphQL */ `
  subscription OnUpdateCause($filter: ModelSubscriptionCauseFilterInput) {
    onUpdateCause(filter: $filter) {
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
export const onDeleteCause = /* GraphQL */ `
  subscription OnDeleteCause($filter: ModelSubscriptionCauseFilterInput) {
    onDeleteCause(filter: $filter) {
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
export const onCreateDonation = /* GraphQL */ `
  subscription OnCreateDonation($filter: ModelSubscriptionDonationFilterInput) {
    onCreateDonation(filter: $filter) {
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
export const onUpdateDonation = /* GraphQL */ `
  subscription OnUpdateDonation($filter: ModelSubscriptionDonationFilterInput) {
    onUpdateDonation(filter: $filter) {
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
export const onDeleteDonation = /* GraphQL */ `
  subscription OnDeleteDonation($filter: ModelSubscriptionDonationFilterInput) {
    onDeleteDonation(filter: $filter) {
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
export const onCreateDonor = /* GraphQL */ `
  subscription OnCreateDonor($filter: ModelSubscriptionDonorFilterInput) {
    onCreateDonor(filter: $filter) {
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
export const onUpdateDonor = /* GraphQL */ `
  subscription OnUpdateDonor($filter: ModelSubscriptionDonorFilterInput) {
    onUpdateDonor(filter: $filter) {
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
export const onDeleteDonor = /* GraphQL */ `
  subscription OnDeleteDonor($filter: ModelSubscriptionDonorFilterInput) {
    onDeleteDonor(filter: $filter) {
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

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExpense = /* GraphQL */ `
  subscription OnCreateExpense($filter: ModelSubscriptionExpenseFilterInput) {
    onCreateExpense(filter: $filter) {
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
export const onUpdateExpense = /* GraphQL */ `
  subscription OnUpdateExpense($filter: ModelSubscriptionExpenseFilterInput) {
    onUpdateExpense(filter: $filter) {
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
export const onDeleteExpense = /* GraphQL */ `
  subscription OnDeleteExpense($filter: ModelSubscriptionExpenseFilterInput) {
    onDeleteExpense(filter: $filter) {
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
export const onCreateAllocation = /* GraphQL */ `
  subscription OnCreateAllocation(
    $filter: ModelSubscriptionAllocationFilterInput
  ) {
    onCreateAllocation(filter: $filter) {
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
export const onUpdateAllocation = /* GraphQL */ `
  subscription OnUpdateAllocation(
    $filter: ModelSubscriptionAllocationFilterInput
  ) {
    onUpdateAllocation(filter: $filter) {
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
export const onDeleteAllocation = /* GraphQL */ `
  subscription OnDeleteAllocation(
    $filter: ModelSubscriptionAllocationFilterInput
  ) {
    onDeleteAllocation(filter: $filter) {
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
export const onCreateCause = /* GraphQL */ `
  subscription OnCreateCause($filter: ModelSubscriptionCauseFilterInput) {
    onCreateCause(filter: $filter) {
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
export const onUpdateCause = /* GraphQL */ `
  subscription OnUpdateCause($filter: ModelSubscriptionCauseFilterInput) {
    onUpdateCause(filter: $filter) {
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
export const onDeleteCause = /* GraphQL */ `
  subscription OnDeleteCause($filter: ModelSubscriptionCauseFilterInput) {
    onDeleteCause(filter: $filter) {
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
export const onCreateDonation = /* GraphQL */ `
  subscription OnCreateDonation($filter: ModelSubscriptionDonationFilterInput) {
    onCreateDonation(filter: $filter) {
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
export const onUpdateDonation = /* GraphQL */ `
  subscription OnUpdateDonation($filter: ModelSubscriptionDonationFilterInput) {
    onUpdateDonation(filter: $filter) {
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
export const onDeleteDonation = /* GraphQL */ `
  subscription OnDeleteDonation($filter: ModelSubscriptionDonationFilterInput) {
    onDeleteDonation(filter: $filter) {
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
export const onCreateDonor = /* GraphQL */ `
  subscription OnCreateDonor($filter: ModelSubscriptionDonorFilterInput) {
    onCreateDonor(filter: $filter) {
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
export const onUpdateDonor = /* GraphQL */ `
  subscription OnUpdateDonor($filter: ModelSubscriptionDonorFilterInput) {
    onUpdateDonor(filter: $filter) {
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
export const onDeleteDonor = /* GraphQL */ `
  subscription OnDeleteDonor($filter: ModelSubscriptionDonorFilterInput) {
    onDeleteDonor(filter: $filter) {
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

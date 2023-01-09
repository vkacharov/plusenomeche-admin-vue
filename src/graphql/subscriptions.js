/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExpense = /* GraphQL */ `
  subscription OnCreateExpense($filter: ModelSubscriptionExpenseFilterInput) {
    onCreateExpense(filter: $filter) {
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
export const onUpdateExpense = /* GraphQL */ `
  subscription OnUpdateExpense($filter: ModelSubscriptionExpenseFilterInput) {
    onUpdateExpense(filter: $filter) {
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
export const onDeleteExpense = /* GraphQL */ `
  subscription OnDeleteExpense($filter: ModelSubscriptionExpenseFilterInput) {
    onDeleteExpense(filter: $filter) {
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
export const onCreateCause = /* GraphQL */ `
  subscription OnCreateCause($filter: ModelSubscriptionCauseFilterInput) {
    onCreateCause(filter: $filter) {
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
export const onUpdateCause = /* GraphQL */ `
  subscription OnUpdateCause($filter: ModelSubscriptionCauseFilterInput) {
    onUpdateCause(filter: $filter) {
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
export const onDeleteCause = /* GraphQL */ `
  subscription OnDeleteCause($filter: ModelSubscriptionCauseFilterInput) {
    onDeleteCause(filter: $filter) {
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
export const onCreateDonation = /* GraphQL */ `
  subscription OnCreateDonation($filter: ModelSubscriptionDonationFilterInput) {
    onCreateDonation(filter: $filter) {
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
export const onUpdateDonation = /* GraphQL */ `
  subscription OnUpdateDonation($filter: ModelSubscriptionDonationFilterInput) {
    onUpdateDonation(filter: $filter) {
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
export const onDeleteDonation = /* GraphQL */ `
  subscription OnDeleteDonation($filter: ModelSubscriptionDonationFilterInput) {
    onDeleteDonation(filter: $filter) {
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
export const onCreateDonor = /* GraphQL */ `
  subscription OnCreateDonor($filter: ModelSubscriptionDonorFilterInput) {
    onCreateDonor(filter: $filter) {
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
export const onUpdateDonor = /* GraphQL */ `
  subscription OnUpdateDonor($filter: ModelSubscriptionDonorFilterInput) {
    onUpdateDonor(filter: $filter) {
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
export const onDeleteDonor = /* GraphQL */ `
  subscription OnDeleteDonor($filter: ModelSubscriptionDonorFilterInput) {
    onDeleteDonor(filter: $filter) {
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

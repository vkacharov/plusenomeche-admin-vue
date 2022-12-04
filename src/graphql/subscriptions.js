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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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

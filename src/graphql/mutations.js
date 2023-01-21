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
      date
      causeID
      donationID
      amount
      Cause {
        id
        causeName
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
        donationName
        description
        amount
        type
        date
        donorID
        Donor {
          id
          donorName
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
export const updateExpense = /* GraphQL */ `
  mutation UpdateExpense(
    $input: UpdateExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    updateExpense(input: $input, condition: $condition) {
      id
      expenseName
      description
      date
      causeID
      donationID
      amount
      Cause {
        id
        causeName
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
        donationName
        description
        amount
        type
        date
        donorID
        Donor {
          id
          donorName
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
export const deleteExpense = /* GraphQL */ `
  mutation DeleteExpense(
    $input: DeleteExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    deleteExpense(input: $input, condition: $condition) {
      id
      expenseName
      description
      date
      causeID
      donationID
      amount
      Cause {
        id
        causeName
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
        donationName
        description
        amount
        type
        date
        donorID
        Donor {
          id
          donorName
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
      Expenses {
        items {
          id
          expenseName
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
      Expenses {
        items {
          id
          expenseName
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
      Expenses {
        items {
          id
          expenseName
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
      Donor {
        id
        donorName
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
          expenseName
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
      Donor {
        id
        donorName
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
          expenseName
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
      Donor {
        id
        donorName
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
          expenseName
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

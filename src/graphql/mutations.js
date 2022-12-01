/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDonation = /* GraphQL */ `
  mutation CreateDonation(
    $input: CreateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    createDonation(input: $input, condition: $condition) {
      id
      name
      amount
      description
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
      name
      amount
      description
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
      name
      amount
      description
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
  }
`;
export const updateDonor = /* GraphQL */ `
  mutation UpdateDonor(
    $input: UpdateDonorInput!
    $condition: ModelDonorConditionInput
  ) {
    updateDonor(input: $input, condition: $condition) {
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
  }
`;
export const deleteDonor = /* GraphQL */ `
  mutation DeleteDonor(
    $input: DeleteDonorInput!
    $condition: ModelDonorConditionInput
  ) {
    deleteDonor(input: $input, condition: $condition) {
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
  }
`;

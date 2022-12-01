/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDonation = /* GraphQL */ `
  subscription OnCreateDonation($filter: ModelSubscriptionDonationFilterInput) {
    onCreateDonation(filter: $filter) {
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
export const onUpdateDonation = /* GraphQL */ `
  subscription OnUpdateDonation($filter: ModelSubscriptionDonationFilterInput) {
    onUpdateDonation(filter: $filter) {
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
export const onDeleteDonation = /* GraphQL */ `
  subscription OnDeleteDonation($filter: ModelSubscriptionDonationFilterInput) {
    onDeleteDonation(filter: $filter) {
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
export const onCreateDonor = /* GraphQL */ `
  subscription OnCreateDonor($filter: ModelSubscriptionDonorFilterInput) {
    onCreateDonor(filter: $filter) {
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
export const onUpdateDonor = /* GraphQL */ `
  subscription OnUpdateDonor($filter: ModelSubscriptionDonorFilterInput) {
    onUpdateDonor(filter: $filter) {
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
export const onDeleteDonor = /* GraphQL */ `
  subscription OnDeleteDonor($filter: ModelSubscriptionDonorFilterInput) {
    onDeleteDonor(filter: $filter) {
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

import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerExpense = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Expense, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly expenseName: string;
  readonly description?: string | null;
  readonly amount?: number | null;
  readonly date?: string | null;
  readonly causeID?: string | null;
  readonly causeName?: string | null;
  readonly donationID?: string | null;
  readonly donationName?: string | null;
  readonly allocationID: string;
  readonly allocationName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExpense = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Expense, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly expenseName: string;
  readonly description?: string | null;
  readonly amount?: number | null;
  readonly date?: string | null;
  readonly causeID?: string | null;
  readonly causeName?: string | null;
  readonly donationID?: string | null;
  readonly donationName?: string | null;
  readonly allocationID: string;
  readonly allocationName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Expense = LazyLoading extends LazyLoadingDisabled ? EagerExpense : LazyExpense

export declare const Expense: (new (init: ModelInit<Expense>) => Expense) & {
  copyOf(source: Expense, mutator: (draft: MutableModel<Expense>) => MutableModel<Expense> | void): Expense;
}

type EagerAllocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Allocation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly allocationName: string;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly causeID: string;
  readonly causeName?: string | null;
  readonly donationID: string;
  readonly donationName?: string | null;
  readonly amount?: number | null;
  readonly Expenses?: (Expense | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAllocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Allocation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly allocationName: string;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly causeID: string;
  readonly causeName?: string | null;
  readonly donationID: string;
  readonly donationName?: string | null;
  readonly amount?: number | null;
  readonly Expenses: AsyncCollection<Expense>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Allocation = LazyLoading extends LazyLoadingDisabled ? EagerAllocation : LazyAllocation

export declare const Allocation: (new (init: ModelInit<Allocation>) => Allocation) & {
  copyOf(source: Allocation, mutator: (draft: MutableModel<Allocation>) => MutableModel<Allocation> | void): Allocation;
}

type EagerCause = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cause, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly causeName: string;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly amount?: number | null;
  readonly type?: string | null;
  readonly Allocations?: (Allocation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCause = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cause, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly causeName: string;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly amount?: number | null;
  readonly type?: string | null;
  readonly Allocations: AsyncCollection<Allocation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cause = LazyLoading extends LazyLoadingDisabled ? EagerCause : LazyCause

export declare const Cause: (new (init: ModelInit<Cause>) => Cause) & {
  copyOf(source: Cause, mutator: (draft: MutableModel<Cause>) => MutableModel<Cause> | void): Cause;
}

type EagerDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly donationName: string;
  readonly description?: string | null;
  readonly amount?: number | null;
  readonly type?: string | null;
  readonly date?: string | null;
  readonly donorID: string;
  readonly donorName?: string | null;
  readonly Allocations?: (Allocation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly donationName: string;
  readonly description?: string | null;
  readonly amount?: number | null;
  readonly type?: string | null;
  readonly date?: string | null;
  readonly donorID: string;
  readonly donorName?: string | null;
  readonly Allocations: AsyncCollection<Allocation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Donation = LazyLoading extends LazyLoadingDisabled ? EagerDonation : LazyDonation

export declare const Donation: (new (init: ModelInit<Donation>) => Donation) & {
  copyOf(source: Donation, mutator: (draft: MutableModel<Donation>) => MutableModel<Donation> | void): Donation;
}

type EagerDonor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly donorName: string;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly Donations?: (Donation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDonor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly donorName: string;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly Donations: AsyncCollection<Donation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Donor = LazyLoading extends LazyLoadingDisabled ? EagerDonor : LazyDonor

export declare const Donor: (new (init: ModelInit<Donor>) => Donor) & {
  copyOf(source: Donor, mutator: (draft: MutableModel<Donor>) => MutableModel<Donor> | void): Donor;
}
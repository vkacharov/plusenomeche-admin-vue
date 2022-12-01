import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly amount?: number | null;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly donorID: string;
  readonly Donor?: Donor | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly amount?: number | null;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly donorID: string;
  readonly Donor: AsyncItem<Donor | undefined>;
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
  readonly name?: string | null;
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
  readonly name?: string | null;
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
import { AmplifyApiGraphQlResourceStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyApiGraphQlResourceStackTemplate) {

    resources.models["Donation"]
        .appsyncFunctions['MutationcreateDonationpreUpdate0FunctionMutationcreateDonationpreUpdate0Function.AppSyncFunction']
        .dataSourceName = 'DonorTable';

    resources.models['Allocation']
        .appsyncFunctions['MutationcreateAllocationpreUpdate0FunctionMutationcreateAllocationpreUpdate0Function.AppSyncFunction']
        .dataSourceName = 'DonationTable';

    resources.models['Allocation']
        .appsyncFunctions['MutationcreateAllocationpreUpdate1FunctionMutationcreateAllocationpreUpdate1Function.AppSyncFunction']
        .dataSourceName = 'CauseTable';

    resources.models['Expense']
        .appsyncFunctions['MutationcreateExpensepreUpdate0FunctionMutationcreateExpensepreUpdate0Function.AppSyncFunction']
        .dataSourceName = 'AllocationTable';
}
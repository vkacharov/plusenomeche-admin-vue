import { AmplifyAuthCognitoStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyAuthCognitoStackTemplate) {
    resources.identityPool.identityPoolName = 'plushenomecheadmin-staging-identity-pool';
}

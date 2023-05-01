import { AmplifyApiGraphQlResourceStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyApiGraphQlResourceStackTemplate) {
    const amplifyMetaJson = require('../../../amplify-meta.json');

    console.log(resources.models["Allocation"].appsyncFunctions);
     resources.models['Expense']
         .appsyncFunctions['MutationcreateExpensepreUpdate0FunctionMutationcreateExpensepreUpdate0Function.AppSyncFunction']
         .dataSourceName = 'AllocationTable';

    resources.models['Expense']
         .appsyncFunctions['MutationupdateExpensepreUpdate0FunctionMutationupdateExpensepreUpdate0Function.AppSyncFunction']
         .dataSourceName = 'AllocationTable';

    resources.models["Donor"]
         .appsyncFunctions['MutationdeleteDonorpreUpdate0FunctionMutationdeleteDonorpreUpdate0Function.AppSyncFunction']
         .dataSourceName = 'DonationTable';

         resources.models["Donation"]
         .appsyncFunctions['MutationdeleteDonationpreUpdate0FunctionMutationdeleteDonationpreUpdate0Function.AppSyncFunction']
         .dataSourceName = 'AllocationTable';
 
    resources.models["Cause"]
         .appsyncFunctions['MutationdeleteCausepreUpdate0FunctionMutationdeleteCausepreUpdate0Function.AppSyncFunction']
         .dataSourceName = 'AllocationTable';
    
    resources.models["Allocation"]
         .appsyncFunctions['MutationdeleteAllocationpreUpdate0FunctionMutationdeleteAllocationpreUpdate0Function.AppSyncFunction']
         .dataSourceName = 'ExpenseTable';

    console.log(resources.models["Allocation"].appsyncFunctions);
    const opensearchDomainName = 'plushenomecheadmin';
    const accountId = amplifyMetaJson.providers.awscloudformation.AuthRoleArn.split(":")[4];
    const region = amplifyMetaJson.providers.awscloudformation.Region;

    resources.opensearch.OpenSearchDomain.domainName = opensearchDomainName;

    resources.opensearch.OpenSearchDomain.cognitoOptions = {
        enabled: true, 
        userPoolId: amplifyMetaJson.auth.plushenomecheadmin.output.UserPoolId,
        identityPoolId: amplifyMetaJson.auth.plushenomecheadmin.output.IdentityPoolId,
        roleArn: `arn:aws:iam::${accountId}:role/service-role/CognitoAccessForAmazonOpenSearch`
    }

    const opensearchPolicyDocument = {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "es:*",
                ],
                "Resource": `arn:aws:es:${region}:${accountId}:domain/${opensearchDomainName}/*`,
                "Principal": {
                    "AWS": [
                        resources.opensearch.OpenSearchStreamingLambdaIAMRole.attrArn,
                        resources.opensearch.OpenSearchAccessIAMRole.attrArn,
                        amplifyMetaJson.providers.awscloudformation.AuthRoleArn
                    ]
                }
            },

            {
                "Effect": "Deny",
                "Action": [
                    "es:*",
                ],
                "Resource": `arn:aws:es:${region}:${accountId}:domain/${opensearchDomainName}/*`,
                "Principal": {
                    "AWS": "*"
                },
                "Condition": {
                    "StringNotLike": {
                        "aws:PrincipalArn": [
                            resources.opensearch.OpenSearchStreamingLambdaIAMRole.attrArn,
                            resources.opensearch.OpenSearchAccessIAMRole.attrArn,
                            amplifyMetaJson.providers.awscloudformation.AuthRoleArn
                        ]
                    }
                }
            }
        ]
    };

    resources.opensearch.OpenSearchDomain.accessPolicies = opensearchPolicyDocument;

    resources.opensearch.OpenSearchDomain.encryptionAtRestOptions = {
        enabled: true
    };
}
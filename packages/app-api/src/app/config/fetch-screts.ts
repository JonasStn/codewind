import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';

export const fetchSecrets = async (secretName: string) => {
  const client = new SecretsManagerClient({
    region: 'eu-central-1',
  });
  const response = await client.send(
    new GetSecretValueCommand({
      SecretId: secretName,
    })
  );
  return response.SecretString && JSON.parse(response.SecretString);
};

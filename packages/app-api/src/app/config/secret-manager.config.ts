import { fetchSecrets } from './fetch-screts';

export default async () => {
  const secrets = await fetchSecrets('codewind/dev/config');
  return {
    databaseUrl: secrets.DATABASE_URL,
  };
};

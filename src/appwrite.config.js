import { Client, Databases, Account, Storage } from 'appwrite';

export const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

const databases = new Databases(client);
const account = new Account(client);
const storage = new Storage(client);


export default client;
export { databases, account, storage };
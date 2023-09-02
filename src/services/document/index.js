import { databases, DATABASE_ID } from "../../appwrite.config";
import { ID } from "appwrite";

export const createDocument = async (COLLECTION_ID, data) => {
    try {
        const res = await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), data);
        return res;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const getDocuments = async (COLLECTION_ID) => {
    try {
        const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
        return res;
    } catch (err) {
        throw new Error(err.message);
    }
}
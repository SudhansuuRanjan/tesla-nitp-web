import { databases, DATABASE_ID } from "../../appwrite.config";
import { ID, Query } from "appwrite";

export const createDocument = async (COLLECTION_ID, data) => {
    try {
        const res = await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), data);
        return res;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const getDocuments = async (COLLECTION_ID, limit = 100, offset = 0) => {
    try {
        const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(limit),
            Query.offset(offset)
        ]);
        return res.documents;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const getDocument = async (COLLECTION_ID, DOCUMENT_ID) => {
    try {
        const res = await databases.getDocument(DATABASE_ID, COLLECTION_ID, DOCUMENT_ID);
        return res;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const updateDocument = async (COLLECTION_ID, DOCUMENT_ID, data) => {
    try {
        const res = await databases.updateDocument(DATABASE_ID, COLLECTION_ID, DOCUMENT_ID, data);
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const deleteDocument = async (COLLECTION_ID, ID) => {
    try {
        const res = await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, ID);
        return res;
    } catch (error) {
        throw new Error(err.message);
    }
}

export const getDocumentsCount = async (COLLECTION_ID) => {
    try {
        const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
        return res.sum;
    } catch (error) {
        throw new Error(err.message);
    }
}
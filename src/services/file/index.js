import { storage } from "../../appwrite.config";
import { ID } from "appwrite";

export const uploadFile = async (files) => {
    try {
        const response = await storage.createFile(
            'photos',
            ID.unique(),
            files
        );

        response.url =
            // `https://cloud.appwrite.io/v1/storage/buckets/photos/files/${response.$id}/preview?project=tesla-official-web`;
            `https://cloud.appwrite.io/v1/storage/buckets/photos/files/${response.$id}/view?project=tesla-official-web&mode=admin`
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const deleteFile = async (fileId) => {
    try {
        const response = await storage.deleteFile('photos', fileId);
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
}
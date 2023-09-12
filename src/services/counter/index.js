import { getDocuments, updateDocument } from "../document";

export const getCounter = async () => {
    try {
        const res = await getDocuments("counter");
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

const uniqueCount = async () => {
    try {
        const res = await getCounter();
        const data = {
            "unique": res[0].unique + 1,
            "total": res[0].total + 1,
        }
        const res2 = await updateDocument("counter", res[0].$id, data);
        return res2;
    } catch (error) {
        throw new Error(error.message);
    }
}

const totalCounter = async () => {
    try {
        const res = await getCounter();
        const data = {
            "total": res[0].total + 1,
            "unique": res[0].unique,
        }
        const res2 = await updateDocument("counter", res[0].$id, data);
        return res2;
    } catch (error) {
        throw new Error(error.message);
    }
}

const setVisitedCookie = () => {
    const date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = `visited=true; expires=${date.toUTCString()}; path=/`;
}

const getVisitedCookie = () => {
    const cookies = document.cookie.split(';');
    const visited = cookies.filter(cookie => cookie.includes("visited"));
    if (visited.length > 0) {
        return true;
    } else {
        return false;
    }
}

export const UpdateCounter = async () => {
    try {
        const visited = getVisitedCookie();
        if (visited) {
            const res = await totalCounter();
            return res;
        } else {
            const res = await uniqueCount();
            setVisitedCookie();
            return res;
        }
    } catch (error) {
        throw new Error(error.message);
    }
}
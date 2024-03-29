import { createContext, useEffect, useState } from "react";
import { account } from "../appwrite.config";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";
import Loader from "../components/Loader";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (user) => {
        try {
            await account.createEmailSession(user.email, user.password);
            await checkUser();
        } catch (error) {
            console.log(error.message);
        }
    }

    const logout = async () => {
        await account.deleteSession("current");
        setUser(null);
        setLoading(false);
        navigate("/admin/login");
    }

    const checkUser = async () => {
        try {
            const res = await account.get();
            setUser(res);
            setLoading(false);
        } catch (error) {
            console.log(error.message);
            setUser(null);
            setLoading(false);
        }
    }

    const signUp = async (user) => {
        try {
            await account.create(ID.unique(), user.email, user.password, user.name);
            navigate("/admin/login");
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        checkUser();
    }, []);

    const contextData = {
        user,
        handleLogin: login,
        handleLogout: logout,
        handleSignUp: signUp
    }

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <div className="flex items-center justify-center h-screen">
                <Loader/>
            </div> : children}
        </AuthContext.Provider>
    )
};

export { AuthContext, AuthProvider };
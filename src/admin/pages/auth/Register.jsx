import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const { handleSignUp, user } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            await handleSignUp({
                email,
                password,
                name,
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    if (user) {
        navigate(-1); // Go back to previous route
        return null; // Render nothing while redirecting
    }



    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="lg:w-[28rem] md:w-[28rem] w-[90%] border-gray-700 border p-8 rounded-3xl">
                <h1 className="text-3xl font-bold mb-5 px-3">Register</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 px-3">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input
                            required
                            type="email"
                            id="email"
                            className="py-2.5 px-5 rounded-xl"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="name">Name</label>
                        <input
                            required
                            type="text"
                            id="name"
                            className="py-2.5 px-5 rounded-xl"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input
                            required
                            type="password"
                            id="password"
                            className="py-2.5 px-5 rounded-xl"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            required
                            type="password"
                            id="confirmPassword"
                            className="py-2.5 px-5 rounded-xl"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button
                        className="py-2.5 mt-3 px-5 rounded-xl bg-sky-500 hover:bg-gray-700 text-white font-bold"
                        type="submit"
                    >
                        Register
                    </button>

                    <p className="text-center mt-5">
                        Already have an account?{" "}
                        <Link to="/admin/login" className="text-sky-500">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;

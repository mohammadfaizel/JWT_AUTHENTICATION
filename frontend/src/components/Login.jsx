import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    async function handleSubmit() {
        const url = "http://localhost:3000/login";
        try {
            const response = await axios.post(url, { username, password });
            const token = response.data.token;

            localStorage.setItem("token", token);
            console.log("Token Stored");
            navigate("/dashboard");
            alert("Login Successful");
        } catch (error) {
            alert("Login Failed");
            console.error(error);
        }
    }

    return (
        <div className="container">
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
            />
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <div className="dark-mode-toggle">
                <button onClick={() => setIsDarkMode(!isDarkMode)}>
                    Toggle Dark Mode
                </button>
            </div>
        </div>
    );
}

export default Login;

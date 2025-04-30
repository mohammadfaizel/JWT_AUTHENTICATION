import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();  // For navigation after login success

    async function handleSubmit() {
        const url = "http://localhost:3000/login";
        try {
            const response = await axios.post(url, { username, password });
            const token = response.data.token;

            // Save token to localStorage
            localStorage.setItem("token", token);

            // Navigate to the Dashboard component after successful login
            console.log("Token Stored");
            navigate("/dashboard");
            alert("Login Successful");
        } catch (error) {
            alert("Login Failed");
            console.error(error);
        }
    }

    return (
        <div>
            <label>Username: </label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <label>Password: </label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;

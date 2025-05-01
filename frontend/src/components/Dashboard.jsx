import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "./Login";

function Dashboard() {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login"); // Redirect if no token
        } else {
            // Send token to backend for authentication
            axios.get("http://localhost:3000/dashboard", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setMessage(response.data.message);
            }).catch(err => {
                // If token is expired or invalid, redirect to login
                localStorage.removeItem("token"); // Remove expired/invalid token
                navigate("/login");
            });
        }
    }, [navigate]);

    return (
        <div>
            <h1>{message}</h1>
            <p>This is a dashboard element</p>
        </div>
    );
}

export default Dashboard;

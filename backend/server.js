import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();
const JWT_SECRET = 'hello';

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("Hello");
})


app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Dummy check – replace with DB verification in real app
    if (username === "admin" && password === "admin123") {
        const payload = { username }; // Can include user ID, role, etc.
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '15s' });

        res.json({ token });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
})


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) return res.sendStatus(401); // No token

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err)
            {
                console.log("Token expired");
                return res.sendStatus(403); // Invalid or expired token
            } 
        req.user = user;
        next();
    });
}

app.get("/dashboard", authenticateToken, (req, res) => {
    res.json({ message: `Welcome ${req.user.username}` });
});


app.listen(3000, () => {
    console.log("Listening at 3000");
})


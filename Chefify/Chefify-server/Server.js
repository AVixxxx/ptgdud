const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4000;
const SECRET_KEY = 'your_jwt_secret';
const USERS_FILE = path.join(__dirname, 'users.json');

app.use(cors());
app.use(bodyParser.json());

const readUsers = () => {
    try {
        const data = fs.readFileSync(USERS_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

const writeUsers = (users) => {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};


app.post('/api/user/add', (req, res) => {
    const { username, email, password, role } = req.body;

    let users = readUsers();
    const exist = users.find(u => u.email === email);
    if (exist) return res.json({ success: false, message: 'Email already exists' });

    const newUser = { id: users.length + 1, username, email, password, role };
    users.push(newUser);
    writeUsers(users);

    res.status(201).json({ success: true, user: newUser });
});


app.get('/api/user/list', (req, res) => {
    const users = readUsers();
    res.json({ users });
});


app.post('/api/user/login', (req, res) => {
    const { email, password } = req.body;
    const users = readUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) return res.json({ success: false });

    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ success: true, token });
});

app.get('/api/user/me', (req, res) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ message: 'No token' });

    const token = authHeader.split(' ')[1];
    try {
        const payload = jwt.verify(token, SECRET_KEY);
        const users = readUsers();
        const user = users.find(u => u.id === payload.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json({ user });
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
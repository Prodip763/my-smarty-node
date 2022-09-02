const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hi node express tumare diya ami besi taka income krbo');
});


const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '01457854' },
    { id: 2, name: 'mabana', email: 'mabana@gmail.com', phone: '01457854' },
    { id: 3, name: 'prodip', email: 'prodip@gmail.com', phone: '01457854' },
    { id: 4, name: 'otoshi', email: 'otoshi@gmail.com', phone: '01457854' },
    { id: 5, name: 'motoshi', email: 'motoshi@gmail.com', phone: '01457854' },
    { id: 6, name: 'faruk', email: 'faruk@gmail.com', phone: '01457854' },
    { id: 7, name: 'kobir', email: 'kobir@gmail.com', phone: '01457854' },
]
app.get('/users', (req, res) => {
    //filter by search query paramater
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }




});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['apple', 'mange', 'banana', 'jushi', 'kushi']);
});

app.listen(port, () => {
    console.log('Listening to port', port)
})

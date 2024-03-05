require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>');
})

const jsonData = {
    name: "Jon",
    age: 23
}

app.get('/json', (req, res) => {
    res.json(jsonData);
})

app.listen(process.env.PORT, (req, res) => {
    console.log(`${port}`);
});
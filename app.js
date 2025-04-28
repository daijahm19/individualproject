const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const fname = req.body.fname;
    res.send(`Thank you, we will get back to you shortly.`);
});
    
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
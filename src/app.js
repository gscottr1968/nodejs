const express = require('express');
const app = express();
const PORT = 5500;

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.post('/', (req, res) => {
    res.send("This is a post request")
})

app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
});

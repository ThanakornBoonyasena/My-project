const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.urlencoded ({extended: true}));
app.use(express.static(path.join(__dirname,"pages")))
app.use(bodyParser.json());
app.set('view engine', 'ejs'); 


app.post('/level1-send', (req,res) => {
    const password = req.body;
    const passwordlist = Object.values(password);
    console.log(passwordlist);
})

app.listen(8080 ,() => console.log("Server is running"));   
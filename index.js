const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.urlencoded ({extended: true}));
app.use(express.static(path.join(__dirname,"pages")))
app.use(bodyParser.json());
app.set('view engine', 'ejs'); 


app.post('/send-name', (req,res) => {
    const name = req.body.name;
    console.log(name);
    res.json({ name }); 
})

app.listen(8080 ,() => console.log("Server is running"));   
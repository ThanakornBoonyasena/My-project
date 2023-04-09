const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.urlencoded ({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/lv1', (req, res) => {
    const password = {};
    res.render('lv1', { password });
  });
  
  


  app.post('/level1-send', (req, res) => {
    const password = req.body;
    res.render('lv1',{password});
  });
  
app.listen(8080 ,() => console.log("Server is running"))
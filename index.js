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
    const passwordlevel = "";
    res.render('lv1',{passwordlevel:passwordlevel});
  });
  
  


  app.post('/level1-send', (req, res) => {
    const password = req.body;
    const passwordlist = Object.values(password);
    console.log(passwordlist);
    const charCounts = {};
    for (let i = 0; i < passwordlist.length; i++) {
      const char = passwordlist[i];
      charCounts[char] = charCounts[char] ? charCounts[char] + 1 : 1;
    }
    console.log(charCounts);
    const score = Object.keys(charCounts).length;
    console.log(score);
    let passwordlevel = "null";
    if (score == 1 ) {
      passwordlevel = "Your password can be hacked instantly" ;
    } else if (score == 2 ) {
      passwordlevel = "Your password can be hacked instantly" ;
    } else if (score == 3 ) {
      passwordlevel = "Your password can be hacked instantly" ;
    } else if (score == 4 ) {
      passwordlevel = "Your password can be hacked instantly" ;
    } else if (score == 5 ) {
      passwordlevel = "Your password can be hacked instantly" ;
    } else if (score == 6 ) {
      passwordlevel = "Your password can be hacked instantly, but it is most secure when it only consists of numbers" ;
    } 
    console.log(passwordlevel);
    res.render('lv1',{passwordlevel: passwordlevel});
  });
  
app.listen(8080 ,() => console.log("Server is running"))
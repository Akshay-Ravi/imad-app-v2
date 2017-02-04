var express = require('express'); //Express is the library used to create a web server
var morgan = require('morgan'); //Morgan is used to output logs that come to our server
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('Article-one', function(req,res){
    res.send('Requested article is server here!');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

//In lines 8,12 and 16, a get request is made to the urls(hich contain either a link, image etc.). Once that url is obtained, the function is executed.
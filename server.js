var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    'article-one':{
        title:'Ram page 01',
        heading:'Articleone',
        date:'feb 25,2018',
        content:`
        <p>
                This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.
        </p>
        <p>
                This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.
        </p>
        <p>
                This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.
        </p>`
        











},
    'article-two':{
         title:'Ram page 02',
        heading:'Articletwo',
        date:'feb 26,2018',
        content:`
        <p>
                This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.!!!!!!!!!!!page #2!!!!!!!!
        </p>`
         },
    'article-three':{
         title: 'Ram page 03',
        heading:'Articlethree',
        date:'feb 27,2018',
        content:`
        <p>
                This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.This is my content for module 4.!!!!!!!!page #3!!!!!!!!
        </p>`
       
        
        }
};
function createtemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var htmltemplate=`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-width,initial-scale-1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h1>
            ${heading}
        </h1>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
    </html>`;
    return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createtemplate(articles[articleName]));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

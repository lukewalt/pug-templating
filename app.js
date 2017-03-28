'use strict';

const express = require('express');

const app = express();

app.set('view engine', 'pug')

const names = ['larry', 'moe', 'curly', 'mr.rogers']
// pug uses whitespace and indentation DEPENDENT

app.get('/', (req, res, next) => {
  //renders pug templ to html: obj holding data to be injected into template
  res.render('index', {subtitle: "this came from my JS data", names, loggedIn: false})
})

app.get('/article', (req, res, next) => {
  res.render('article', {subtitle: "this came from my JS data", names, loggedIn: false})
})

const port = process.env.PORT || 3000
// sets port for the app to port or 3000
app.set('port', port)
app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

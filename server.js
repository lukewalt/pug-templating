'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'))

app.set('view engine', 'pug')

const inventory = ['chocolate cake', 'cupcake', 'crescant', 'bagel', 'muffin']
// pug uses whitespace and indentation DEPENDENT

app.get('/', (req, res, next) => {
  //renders pug templ to html: obj holding data to be injected into template
  res.render('index', { loggedIn: false })
})

app.get('/inventory', (req, res, next) => {
  res.render('inventory', { inventory, loggedIn: false })
})

app.get('/about', (req, res, next) => {
  res.render('about', { loggedIn: false })
})

const port = process.env.PORT || 3000
// sets port for the app to port or 3000
app.set('port', port)
app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

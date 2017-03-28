'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'))

app.set('view engine', 'pug')

const goods = [{name: 'chocolate cake', price: 15.23}, {name: 'cupcake', price: 3.99}, {name: 'crescant', price: 4.23}, {name: 'bagel', price: 2.23}, {name: 'muffin', price: 5.23}]
// pug uses whitespace and indentation DEPENDENT

app.get('/', (req, res, next) => {
  //renders pug templ to html: obj holding data to be injected into template
  res.render('index', { home: true, inventory: false, about: false })
})

app.get('/inventory', (req, res, next) => {
  res.render('inventory', { goods, home: false, inventory: true, about: false })
})

app.get('/about', (req, res, next) => {
  res.render('about', { home: false, inventory: false, about: true })
})

const port = process.env.PORT || 3000
// sets port for the app to port or 3000
app.set('port', port)
app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

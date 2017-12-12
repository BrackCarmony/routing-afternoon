const express = require('express');
const app = express();
const port = 8989;

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()


app.use(express.static(__dirname + '/build'));
app.use(middlewares)
app.use(router)





app.listen(port, function(){
  console.log("port:", port)
})

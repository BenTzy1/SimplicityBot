(for nodejs) keep_alive.js:
var http = require('http');
http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);

In the main file (index.js) add:
const keep_alive = require('./keep_alive.js')

(for python) keep_alive.py:
from flask import Flask,render_template
from threading import Thread
app = Flask(__name__)
@app.route('/')
def index():
    return "Alive"
def run():
  app.run(host='0.0.0.0',port=8080)
def keep_alive():  
    t = Thread(target=run)

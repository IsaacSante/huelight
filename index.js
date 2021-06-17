const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

let sceneId = 0; 

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  
app.listen(port);
console.log('Server started at http://localhost:' + port);

let testSetings = [
  {
      name: 'Serenity Beach', 
      hue: 1000,
      brightness: 100,
      saturation:100,
  },
  {
      name: 'Misty Lake', 
      hue: 46920,
      brightness: 100,
      saturation:100,
  },
  {
      name: 'Redwood Forest', 
      hue: 25500,
      brightness: 100,
      saturation:100,
  }
]
console.log(testSetings[sceneId].hue)
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let sceneId = 0; 

//serve the client files 
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
  
app.listen(port);
console.log('Server started at http://localhost:' + port);
  
app.post('/scenes', function (req, res) {
  //console.log(req.body.clientId);
  let incomingId = req.body.clientId;
  res.status(201).send('Post successful')
  setLightScene(incomingId)
})

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

function setLightScene (incomingId) {
  sceneId = incomingId
  console.log(testSetings[sceneId].hue)
  console.log(testSetings[sceneId].name + ' activated')
}

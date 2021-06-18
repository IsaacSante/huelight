//server dependencies 
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let sceneId = 0; 

//hue API dependencies 
const v3 = require('node-hue-api').v3;
const LightState = v3.lightStates.LightState;
const USERNAME = "qawHUs23PIIvFXz8cylhyx4-hEeMHWrqqNi1ZELd" , LIGHT_ID = 1


//serve the client files 
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
  
//make the server
app.listen(port);
console.log('Server started at http://localhost:' + port);
  
//route for light scenes 
app.post('/scenes', function (req, res) {
  //console.log(req.body.clientId);
  let incomingId = req.body.clientId;
  res.status(201).send('Post successful')
  setLightScene(incomingId)
})

//video light settings 
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

//handle the new scene ID 
function setLightScene (incomingId) {
  sceneId = incomingId
  console.log(testSetings[sceneId].hue)
  console.log(testSetings[sceneId].name + ' activated')

      //find the hue bridge and light
      v3.discovery.nupnpSearch()
      .then(searchResults => {
        const host = searchResults[0].ipaddress;
        return v3.api.createLocal(host).connect(USERNAME);
      })
      .then(api => {
        const currentLightScene = new LightState()
        .on(true)
        .hue(testSetings[sceneId].hue)
        .brightness(testSetings[sceneId].brightness)
        .saturation(testSetings[sceneId].saturation)
        .alertShort()

        return api.lights.setLightState(LIGHT_ID, currentLightScene);
      })
      .then(result => {
        console.log(`Light state change was successful? ${result}`);
      })

}

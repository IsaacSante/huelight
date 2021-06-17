const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');
sceneId = 0; 

app.get('/', function(req, res) {
    // res.send('Hello World!')
    // res.sendFile(path.join(__dirname, 'index.html'));
    // res.send()
  });
  
app.listen(port);
console.log('Server started at http://localhost:' + port);


const v3 = require('node-hue-api').v3;
const LightState = v3.lightStates.LightState;

const USERNAME = "qawHUs23PIIvFXz8cylhyx4-hEeMHWrqqNi1ZELd" , LIGHT_ID = 1

v3.discovery.nupnpSearch()
  .then(searchResults => {
    const host = searchResults[0].ipaddress;
    return v3.api.createLocal(host).connect(USERNAME);
  })
  .then(api => {

    // create an array of objects for lightScenes
    let lightSetings = [
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
            name: 'Serenity Beach', 
            hue: 25500,
            brightness: 100,
            saturation:100,
        }
    ]

    // depending on the index of the object 
    // console.log 

    // function btnPressed(id){
    //     console.log('CLICKED FUCKER')
    //      let btnId = 0;
    //      lightSettings.filter(lightSetting => lightSetting.name == id);

    // }

    // Using a LightState object to build the desired state
    const stateOne = new LightState()
    .on(true)
    .hue(lightSetings[sceneId].hue)
    .brightness(lightSetings[sceneId].brightness)
    .saturation(lightSetings[sceneId].saturation);

    return api.lights.setLightState(LIGHT_ID, stateOne);

  })
  .then(result => {
    console.log(`Light state change was successful? ${result}`);
  })
;
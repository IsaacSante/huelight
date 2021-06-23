//client to server guide
//https://gist.github.com/aerrity/fd393e5511106420fba0c9602cc05d35
console.log("Client is running");
const url = "../images/camp.png";

const sceneName = [
  "Menu",
  "Emerald Cove",
  "Sunrise peak",
  "Serenity Beach",
  "Renewal Falls",
  "Summit Lake",
  "Sunrise Bay",
  "Redwood Forest",
  "Alpine Canopy",
  "Misty Lake",
  "Campfire Lake",
];

for (i = 0; i < sceneName.length; i++) {
  let sceneImage = document.createElement("img");
  sceneImage.innerHTML = sceneName[i];
  sceneImage.src = url;
  // append Id depending on order
  sceneImage.id = [i];
  sceneImage.onclick = async function reply_click() {
    try {
      const url = "http://localhost:8080/scenes";
      const res = await fetch(url, {
        method: "POST",
        headers: new Headers({
          Accept: "application/json",
          "content-type": "application/json",
        }),
        body: JSON.stringify({ clientId: this.id }),
      });
      console.log(res.ok);
      // console.log(res.json)
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  };
  const parentContainer = document.getElementById("test-div");
  parentContainer.appendChild(sceneImage);
}
reply_click().then((data) => console.log(data.info));

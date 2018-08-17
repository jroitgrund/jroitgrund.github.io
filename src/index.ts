require("./style");
require("./fonts");

const HACK_THE_PLANET_LABEL = "h4cktheplanet!";

let hacked = false;
const hackThePlanet = document.createElement("a");
hackThePlanet.className = "hacktheplanet";
const body = document.getElementsByTagName("body")[0];
hackThePlanet.innerText = HACK_THE_PLANET_LABEL;

hackThePlanet.onclick = () => {
    if (hacked) {
        body.className = body.className.replace(/(?:^|\s)hacked(?!\S)/g, "");
        hacked = false;
        hackThePlanet.innerText = HACK_THE_PLANET_LABEL;
    } else {
        body.className += " hacked";
        hackThePlanet.innerText = "unh4cktheplanet!";
        hacked = true;
    }
};

document.getElementById("header").appendChild(hackThePlanet);

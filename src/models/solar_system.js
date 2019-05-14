const PubSub = require('../helpers/pub_sub.js')



const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe("SelectedPlanet:click", (event) =>{
    console.log(event);
    const planet = event.detail
    this.publishPlanetInfo(planet)
  });
};


SolarSystem.prototype.publishPlanetInfo = function (planet) {
  const selectedPlanet = this.planets;
  let fullPlanetInfo = selectedPlanet.find(function(element){
  return element.name === planet})
  console.log(fullPlanetInfo);
  PubSub.publish('Planets:selected-planet-ready', fullPlanetInfo)
};


module.exports = SolarSystem;

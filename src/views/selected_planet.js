const PubSub = require('../helpers/pub_sub.js')


const SelectedPlanet = function(element){
  this.element = element;
}

SelectedPlanet.prototype.bindEvents = function () {

    PubSub.subscribe('Planets: selected-planet-ready', (event) =>{
      console.log(event);
      const planet = event.detail
      this.publishPlanetInfo(planet)
    });




  console.log('hello');
  this.element.addEventListener('click',(event) =>{
    console.log(event);
    const selectedPlanet = event.target.text; //starun
    //function(saturn)

    //selectedPlanet = function(saturn )
    PubSub.publish("SelectedPlanet:click", selectedPlanet)

  });
};

// SelectedPlanet.prototype.returnPlanetInfo = function(planet){
//
// }




module.exports = SelectedPlanet;

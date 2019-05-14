const PubSub = require('../helpers/pub_sub.js')


const Planet = function(element){
  this.element = element;
}

Planet.prototype.bindEvents = function () {
  console.log('hello you');
  PubSub.subscribe('Planets:selected-planet-ready', (event)=>{
    const planetInfo = event.detail;
    this.render(planetInfo)
  })


};


Planet.prototype.render = function (planet) {

  const planetName = document.createElement('h3')

  planetName.textContent = `${planet.name}`
  this.element.innerHTML = ' ';
  this.element.appendChild(planetName)

};




module.exports = Planet;

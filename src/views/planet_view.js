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

  const planetName = document.createElement('h1')
  const planetOrbit = document.createElement('h3')
  const planetDay = document.createElement('h3')
  const planetArea = document.createElement('h3')
  const planetVolume = document.createElement('h3')
  const planetGravity = document.createElement('h3')
  const planetMoons = document.createElement('h3')
  const planetImage = document.createElement('IMG')

  planetName.textContent = `${planet.name}`
  planetOrbit.textContent = `${planet.orbit}`
  planetDay.textContent = `${planet.day}`
  planetArea.textContent = `${planet.surfaceArea}`
  planetVolume.textContent = `${planet.volume}`
  planetGravity.textContent = `${planet.gravity}`
  planetMoons.textContent = `${planet.moons}`
  planetImage.src= planet.image

  planetImage.setAttribute("id", "image")


  this.element.innerHTML = ' ';
  this.element.appendChild(planetName)
  this.element.appendChild(planetOrbit)
  this.element.appendChild(planetDay)
  this.element.appendChild(planetArea)
  this.element.appendChild(planetVolume)
  this.element.appendChild(planetGravity)
  this.element.appendChild(planetMoons)
  this.element.appendChild(planetImage)

};




module.exports = Planet;

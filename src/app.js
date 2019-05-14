const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetView = require('./views/planet_view.js');
const SelectedPlanet = require('./views/selected_planet.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets)
  planetsDataModel.bindEvents();

  const SelectPlanet = document.querySelector(".planets-menu")
  const selectedPlanet = new SelectedPlanet(SelectPlanet)
  selectedPlanet.bindEvents()

  const planetSelction = document.querySelector(".planet-details")
  const planetView = new PlanetView(planetSelction)
  planetView.bindEvents()


});

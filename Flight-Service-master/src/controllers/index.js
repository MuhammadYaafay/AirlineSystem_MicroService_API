//instead of writing import for controller will be lengthy so importing this index will importing one time .

module.exports = {
  InfoController: require("./info-controller"),
  AirplaneController: require("./airplane-controller"),
  CityController: require("./city-controller"),
  AirportController: require("./airport-controller"),
  FlightController: require("./flight-controller"),
};

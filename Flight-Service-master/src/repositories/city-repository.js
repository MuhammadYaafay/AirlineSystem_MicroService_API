const CrudRepository = require("./crud-repository");
const { City } = require("../models");

class CityRepository extends CrudRepository {
  constructor() {
    super(City); //call constru of parent class
  }
}

module.exports = CityRepository;

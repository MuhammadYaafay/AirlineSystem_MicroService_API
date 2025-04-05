const CrudRepository = require("./crud-repository");
const { Airport } = require("../models");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport); //call constru of parent class
  }
}

module.exports = AirportRepository;

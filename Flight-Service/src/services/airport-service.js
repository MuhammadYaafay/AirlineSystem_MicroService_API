// controllers pass call on services which use reposit to get data from db
// services are business logic
const { StatusCodes } = require("http-status-codes");
const { AirportRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        if (error.name == "SequelizeValidationError") {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError(
            "cannot create a new Airport object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAirports() {
    try {
        const airport = await airportRepository.getAll();
        return airport;
    } catch (err) {
        throw new AppError(
            "cannot fetch data of all the airport",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAirport(id) {
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError("airport you requested not found", error.statusCode);
        }
        throw new AppError(
            "cannot fetch data of all the airport",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function destroyAirport(id) {
    try {
        const response = await airportRepository.destroy(id);
        return response;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError("airport you requested to delete not found", error.statusCode);
        }
        throw new AppError(
            "cannot fetch data of all the airport",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}



module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
};

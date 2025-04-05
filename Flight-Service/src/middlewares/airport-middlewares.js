const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = "Something went wrong while creating aiport";
    ErrorResponse.error = new AppError(["name not found in the oncoming request in the correct form."], StatusCodes.BAD_REQUEST)

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.code) {
    ErrorResponse.message = "Something went wrong while creating aiport";
    ErrorResponse.error = new AppError(["code not found in the oncoming request in the correct form."], StatusCodes.BAD_REQUEST)

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.cityId) {
    ErrorResponse.message = "Something went wrong while creating aiport";
    ErrorResponse.error = new AppError(["city Id not found in the oncoming request in the correct form."], StatusCodes.BAD_REQUEST)

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next(); //next middleware is controller
}

module.exports = {
  validateCreateRequest,
};

const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");

const userService = require("../services/user-service");

class UserController {
  async registration(req, res, next) {
    // console.log(req.body);
    try {
      // const errors = validationResult(req);
      // console.log(errors);
      // if (!errors.isEmpty()) {
      //   return next(
      //     ApiError.badRequest("Ошибка при валидации", errors.array())
      //   );
      // }
      const { username, password, firstname, lastname, age } = req.body;
      const userData = await userService.registration(
        username,
        password,
        firstname,
        lastname,
        age
      );
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const userData = await userService.login(username, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();

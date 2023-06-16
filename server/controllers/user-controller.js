const { v4: uuid } = require("uuid");

class UserController {
  async login(req, res, next) {
    try {
      const id = uuid();
      const { username, password } = req.body.formValues;
      if (username !== "admin" || password !== "1234") {
        return res.status(400).send({ message: "Wrong credentials" });
      }

      return res.json({
        username,
        password,
        id,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();

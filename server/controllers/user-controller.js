const { v4: uuid } = require("uuid");

class UserController {
  async login(req, res, next) {
    try {
      const id = uuid();
      const { username, password } = req.body;
      let user = {};
      if (username === "admin" && password === "1234") {
        user = {
          username,
          password,
          id,
        };
      }
      return res.json(user);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();

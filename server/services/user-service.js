const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const tokenService = require("./token-service");
const ApiError = require("../exceptions/api-error");

class UserService {
  async registration(username, password, firstname, lastname, age) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequestError(
        `Пользователь с почтовым адресом ${email} уже существует`
      );
    }
    const hashPassword = await bcrypt.hash(password, 3);

    const user = await UserModel.create({
      username,
      password: hashPassword,
      firstname,
      lastname,
      age,
    });

    const tokens = tokenService.generateToken({ ...user });

    return {
      ...tokens,
      user,
    };
  }

  async login(username, password) {
    const user = await UserModel.findOne({ username });
    if (!user) {
      throw ApiError.BadRequestError("Пользователь с таким username не найден");
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequestError("Неверный пароль");
    }

    const tokens = tokenService.generateToken({ ...user });

    await tokenService.saveToken(user.id, tokens.refreshToken);

    await user.updateOne({ lastOnline: new Date() });

    return {
      ...tokens,
      user,
    };
  }
}

module.exports = new UserService();

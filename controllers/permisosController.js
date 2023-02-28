const models = require("../models");

module.exports = {
  add: async (req, res, next) => {
    try {
      const reg = await models.permission.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },

  list: async (req, res, next) => {
    try {
      const reg = await models.permission.findAll();
      res.status(200).json(reg);
    } catch (e) {
      console.log(e);
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },

  update: async (req, res, next) => {},
  remove: async (req, res, next) => {},
};

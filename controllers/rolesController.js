const models = require("../models");

module.exports = {
  add: async (req, res, next) => {
    if (!req.body.name) {
      res.status(422).send({
        message: "no name",
      });
    } else {
      try {
        const reg = await models.rol.create(req.body);
        res.status(200).json(reg);
      } catch (e) {
        res.status(500).send({
          message: "Ocurrió un error",
        });
        next(e);
      }
    }
  },

  list: async (req, res, next) => {
    try {
      const reg = await models.rol.findAll({
        include: [
          {
            model: models.permissions,
          },
          {
            model: models.permissions,
          },
        ],
      });
      res.status(200).json(reg);
    } catch (e) {
      console.log(e);
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },

  update: async (req, res, next) => {
    try {
      const reg = await models.rol.update(
        {
          name: req.body.name,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  remove: async (req, res, next) => {
    try {
      const reg = await models.rol.destroy({
        where: {
          id: req.body.id,
        },
      });
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
};

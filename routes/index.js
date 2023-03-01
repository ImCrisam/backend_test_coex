const routerx = require("express-promise-router");
const permisosRouter = require("./permiso.js");
const rolRouter = require("./rol.js");
const userRouter = require("./usuario.js");

const router = routerx();
router.use("/usuarios", userRouter);
router.use("/roles", rolRouter);
router.use("/permisos", permisosRouter);

module.exports = router;

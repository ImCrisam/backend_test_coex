const routerx = require("express-promise-router");
const usuariosController = require("../controllers/usuariosController");

const router = routerx();
router.get("/list", usuariosController.list);

router.post("/add", usuariosController.add);
router.put("/update", usuariosController.update);
router.delete("/remove", usuariosController.remove);

module.exports = router;

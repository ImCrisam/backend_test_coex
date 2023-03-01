const routerx = require("express-promise-router");
const rolesController = require("../controllers/rolesController");

const router = routerx();
router.get("/list", rolesController.list);

router.post("/add", rolesController.add);
router.put("/update", rolesController.update);
router.delete("/remove", rolesController.remove);

module.exports = router;

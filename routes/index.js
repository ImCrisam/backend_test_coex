const routerx = require('express-promise-router');
const permisosRouter = require('./permiso.js');





const router = routerx();

//router.use('/usuarios', null);
//router.use('/roles', null);
router.use('/permisos', permisosRouter);

module.exports = router;
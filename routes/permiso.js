const routerx = require('express-promise-router');
const permisosController = require('../controllers/permisosController');


const router = routerx();
router.get('/list', permisosController.list);

router.post('/add', permisosController.add);
router.put('/update', permisosController.update);
router.delete('/remove', permisosController.remove);


module.exports = router;
//Crear un enrutador de express en el que todas las rutas inician con api
const router = require('express').Router();

//Importar el controlador de eventos
const service = require('../services/gorras.service');
const {validatorHandler} = require('../middlewares/validator.handler');
const { getGorraSchema, createGorraSchema, updateGorraSchema } = require('../schemas/gorras.schema');
const {logHandler} = require('../middlewares/log.handler');
const {sendMail}=require('../correo/correo');
//Definir las rutas de la aplicación
router.get('/', async (req,res)=>{
    const gorras = await service.index()
    res.json(gorras);
    logHandler('GET /api/gorras')
});

router.get('/:id', 
    validatorHandler(getGorraSchema, 'params'), 
    async (req,res)=>{
        const id = req.params.id
        const gorra = await service.show(id)
        res.json(gorra)
        logHandler('GET /api/gorras/'+id)
    }
);

router.post('/', 
    validatorHandler(createGorraSchema, 'body'), 
    async (req,res)=>{
        const body = req.body
        const gorra = await service.store(body)
        res.status(201).json(gorra)
        logHandler('POST /api/gorras')
        sendMail(req.body.email,req.body.marca)
    }
);

router.put('/:id', 
    validatorHandler(getGorraSchema, 'params'),
    validatorHandler(updateGorraSchema, 'body'), 
    async (req,res)=>{
        const id = req.params.id
        const body = req.body
        const gorra = await service.update(id, body)
        res.json(gorra)
        logHandler('PUT /api/gorras/'+ id)
    }
);

router.delete('/:id', 
    validatorHandler(getGorraSchema, 'params'),
    async (req,res)=>{
        const id = req.params.id
        const gorra = await service.destroy(id)
        res.json(gorra)
        logHandler('DELETE /api/gorras/'+ id)
    }
);

//Exportar el enrutador
module.exports = router;
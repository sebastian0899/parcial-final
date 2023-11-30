const {models} = require('../libs/sequelize')

//Funcion para listar todos los eventos
async function index() {
    const gorras = await models.gorra.findAll();
    return gorras;
}

//Funcion para crear un nuevo evento
async function store(body) {
    const gorra = await models.gorra.create(body);
    return gorra;
}

//Funcion para mostrar un evento
async function show(id) {
    const gorra = await models.gorra.findByPk(id);
    return gorra;
}

//Funcion para actualizar un evento
async function update(id, body) {
    const [affectedRows, [updatedEvent]] = await models.gorra.update(body, {
        where: {
            id
        },
        returning: true
    });
    return updatedEvent;
}

//Funcion para eliminar un evento
async function destroy(id) {
    const gorra = await models.gorra.findByPk(id);
    const deletedEvent = await models.gorra.destroy({
        where: {
            id
        },
        returning: true
    });
    if(deletedEvent){
        return gorra;
    }
    return null;
}

//Exportar las funciones del controlador
module.exports = {
    index,
    store,
    show,
    update,
    destroy
}
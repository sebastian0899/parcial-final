const defineEvent = require("./gorras.model");

function defineModels( sequelize ){
    defineEvent(sequelize)
    //Other models go here
}

module.exports = defineModels

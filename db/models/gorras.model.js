const { DataTypes } = require('sequelize');

function defineEvent( sequelize ) {
    sequelize.define('gorra', {
        //Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        marca: {
            type: DataTypes.STRING
        },
        color: {
            type: DataTypes.STRING
        },
        precio: {
            type: DataTypes.INTEGER
        },
        talla: {
            type: DataTypes.INTEGER
        },
        email:{
            type: DataTypes.STRING
        }
    },);
}

module.exports = defineEvent;
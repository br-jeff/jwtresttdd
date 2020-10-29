const { sequelize } = require('../../src/app/models')


module.exports = () => {
    return Promisse.all( Object.keys(sequelize.models).map( key  => {
       sequelize.models[key].destroy({truncate: true, force: true})
    }))
}
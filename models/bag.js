/* var Sequelize = require('sequelize')
 */
module.exports = function(sequelize, DataTypes){
    var bag = sequelize.define('bag',{
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        model:{
            type: DataTypes.STRING,
            allowNull: true
        },
        quantity:{
            type:DataTypes.INTEGER,
            allowNull: true
        },
        price:{
            type:DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0.0
        },
        color:{
            type:DataTypes.STRING
        },
        material:{
            type:DataTypes.STRING,
            allowNull: true
        }
    })

   /*  var user = sequelize.define('user',{
        id: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: true
        },
        email:{
            type: DataTypes.STRING,
            allowNull: true
        },
        password:{
            type: DataTypes.STRING,
            allowNull: true
        },
        credits:{
            type: DataTypes.INTEGER,
            
        },
        seller:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        
    })

     */
    return bag;
    //return user;
    //bag.sync()

}
module.exports = function(sequelize, DataTypes){
    var user = sequelize.define('user',{
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
    // itemsPurchased:{
    //     type: DataTypes.STRING,
    //     allowNull: true
    // }
    
})

return user;
}
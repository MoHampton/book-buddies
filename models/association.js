module.exports = function(sequelize, DataTypes) {
    var Association = sequelize.define("Association", {
        // userID: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // clubID: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // }
    });

    // Association.associate = function(models) {
    //     User.hasMany(models.Association);
    //     Club.hasMany(models.Association);
    // };

    return Association;
};
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("Club", {
        username: {
            type: DataTypes.STRING(15),
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bio: {
            type: DataTypes.STRING(180),
            allowNull: true,
        },
        favoriteBooks: {
            type: DataTypes.STRING,
            allowNull: true,
        }

    })
};
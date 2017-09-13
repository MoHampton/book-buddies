module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
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
            type: DataTypes.TEXT,
            allowNull: true,
        }

    });

    User.associate = function(models) {
        User.hasMany(models.Association);
    }
    return User;
};

// User has many clubs
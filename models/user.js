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
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bio: {
            type: DataTypes.STRING(180),
            allowNull: true,
        },
        favoriteBook: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        photo: {
            type: DataTypes.STRING,
            defaultValue: "https://i.pinimg.com/236x/15/73/fc/1573fc7afb3f5e3f0c0c70803fea230e--book-art-collage-book.jpg"
        }

    });

    User.associate = function(models) {
        User.hasMany(models.Association);
    }
    return User;
};

// User has many clubs
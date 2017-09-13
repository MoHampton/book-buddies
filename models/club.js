module.exports = function(sequelize, DataTypes) {
    var Club = sequelize.define("Club", {
        clubName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        moderator: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        currentBook: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        nextBook: {
            type: DataTypes.STRING,
            defaultValue: "Check back soon!"
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        }
    });

    Club.associate = function(models) {
        Club.hasMany(models.Association);
    }

    return Club;
};

// Club has many users
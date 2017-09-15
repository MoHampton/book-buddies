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
        // Do clubs need a location?
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
        },
        photo: {
            type: DataTypes.STRING,
            defaultValue: "http://whytoread.com/wp-content/uploads/2015/05/Books-That-Will-Make-You-Proud-And-Satisfied-To-Have-Read.jpg"
        }

    });

    Club.associate = function(models) {
        Club.hasMany(models.Association);
        Club.hasMany(models.Schedule);
    };

    return Club;
};

// Club has many users
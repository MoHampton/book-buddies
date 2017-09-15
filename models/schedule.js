module.exports = function(sequelize, DataTypes) {
    var Schedule = sequelize.define("User", {
        meetingDay: {
            type: DataTypes.STRING,
            allowNull: false
        },
        meetingTime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        meetingFrequency: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        endDate: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    Schedule.associate = function(models) {
        Schedule.belongsTo(models.Club, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Schedule;
}; 
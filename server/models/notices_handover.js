module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'notices_handover', 
        {
            notice: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            handover: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            name: {
                type: DataTypes.STRING(10),
                primaryKey: true,
                allowNull: false
            },
            type: {
                type: DataTypes.STRING(10),
                allowNull: false
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: false,
        }
    )
};
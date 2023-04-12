module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'storeInfo', 
        {
            storeName: {
                type: DataTypes.STRING(30),
                unique: true,
                primaryKey: true,
                allowNull: false
            },
            boss: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            number: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            phoneNumber: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            
            location: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            registerNo: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: false,
        }
    )
};
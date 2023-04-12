module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'employer', 
        {
            id: {
                type: DataTypes.STRING(30),
                unique: true,
                primaryKey: true,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            name: {
                type: DataTypes.STRING(30),
                primaryKey: true,
                allowNull: false
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            store: {
                type: DataTypes.STRING(30),
                allowNull: true
            },
            score: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                allowNull: false
            },
            bank_account: {
                type: DataTypes.STRING(100),
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
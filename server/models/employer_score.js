module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'employer_score', 
        {
            standard_avreage: {
                type: DataTypes.DOUBLE,
                primaryKey: true,
                allowNull: false,
                defultValue: 0
            },
            standard1: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            standard2: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            standard3: {
                type: DataTypes.INTEGER,
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
'use strict';

const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'db.json'))[ env ];
const db = {};

let sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
    {
      define: {
        charset: 'utf8',
        collate: 'utf8_general_ci'
      }
    }
  );
  
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.log('Unable to connect to the database: ', err);
    });
    
    db.Employer = require('./employer')(sequelize, Sequelize)
    db.Employee = require('./employee')(sequelize, Sequelize)
    db.StoreInfo = require('./storeInfo')(sequelize, Sequelize)
    db.Employer_score = require('./employer_score')(sequelize, Sequelize)
    db.Employee_score = require('./employee_score')(sequelize, Sequelize)
    db.Notices_handover = require('./notices_handover')(sequelize, Sequelize)

    db.Employer.hasOne(db.StoreInfo, {foreignKey: 'storeInfo', sourceKey: 'store'})
    db.StoreInfo.belongsTo(db.Employer, {foreignKey: 'storeInfo', targetKey: 'store'})

db.secret = '(9*)5$&!3%^0%^@@2$1!#5@2!4';
module.exports = db;
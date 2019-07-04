const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: '10-mongodb-query'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/miBaseDeDatosMongo'
  },

  test: {
    root: rootPath,
    app: {
      name: '10-mongodb-query'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/10-mongodb-query-test'
  },

  production: {
    root: rootPath,
    app: {
      name: '10-mongodb-query'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/10-mongodb-query-production'
  }
};

module.exports = config[env];

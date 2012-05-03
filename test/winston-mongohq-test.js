var winston = require('winston');

//
// Requiring `winston-mongohq` will expose
// `winston.transports.MongoHQ`
//
require('../lib/winston-mongohq').MongoHQ;

winston.add(winston.transports.MongoHQ, {
    mongohqURL: 'mongodb://<username>:<password>@flame.mongohq.com:27090/<db>'
});

// Log
winston.info('This is log message');
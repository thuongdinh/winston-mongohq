# winston

A MongoHQ transport for [winston][0].

## Installation

### Installing npm (node package manager)

``` bash
  $ curl http://npmjs.org/install.sh | sh
```

### Installing winston-mongohq

``` bash
  $ npm install winston
  $ npm install winston-mongohq
```

## Usage
``` js
  var winston = require('winston');

  //
  // Requiring `winston-mongodb` will expose
  // `winston.transports.MongoHQ`
  //
  require('winston-mongohq').MongoHQ;

  winston.add(winston.transports.MongoHQ, options);
```

The MongoHQ transport takes the following options. 'mongohqURL' is required:

* __level:__ Level of messages that this transport should log.
* __silent:__ Boolean flag indicating whether to suppress output.
* __mongohqURL:__ The mongoHQ URL you want to log to. *[required]*
* __collection__: The name of the collection you want to store log messages in, defaults to 'log'.
* __safe:__ Boolean indicating if you want eventual consistency on your log messages, if set to true it requires an extra round trip to the server to ensure the write was committed, defaults to true.

*Metadata:* Logged as a native JSON object.

#### Author: [Thuong Dinh](https://github.com/zneo99)
#### Base on: [Winston-mongoDB](https://github.com/indexzero/winston-mongodb)

[0]: https://github.com/indexzero/winston
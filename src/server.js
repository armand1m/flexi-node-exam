'use strict';

const Hapi = require('hapi');
const countTags = require('./lib/count-tags')
const getResultAsSortedRows = require('./lib/get-result-as-sorted-rows')
const getRowAsObject = require('./lib/get-row-as-object')
const memoize = require('fast-memoize')

const getTagCountAsObject = memoize(function(tags) {
  return countTags('../data', tags.split(","))
    .then(getResultAsSortedRows)
    .then(getRowAsObject)
})

const server = new Hapi.Server();

server.connection({
  port: 3000,
  host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/count',
    handler: function (request, reply) {
      let { tags } = request.query

      console.time('request')
      return getTagCountAsObject(tags)
          .then(reply)
          .then(() => console.timeEnd('request'))
          .catch(reply)
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }

    console.log(`Server running at: ${server.info.uri}`);
});

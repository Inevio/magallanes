'use strict';

module.exports = function ( node, images, callback ) {

  var client = vertigo.createClient({ host : node, port : 21042 });
  client.request('monitorUpdateImages', images, callback);

};

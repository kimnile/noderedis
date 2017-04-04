
var redis = require('redis');
var port = 6379;
var client = redis.createClient(port, '127.0.0.1', {no_ready_check: true});
client.auth(function (err) {
    if (err) throw err;
});

client.on('connect', function() {
    console.log('Connected to Redis');
});

client.set("foo", "bar", redis.print);
client.set("something","something awesome");

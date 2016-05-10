var exports = module.exports;
var request = require('sync-request');
var kafka = require('kafka-node'),
    // message = request('GET', 'http://spec.segment.com/generate/identify?pretty=true')
    Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    client = new kafka.Client(),
    producer = new Producer(client),
    km = new KeyedMessage('key', 'message')
    // payloads = [
    //     { topic: 'test', messages: message.getBody() }
    // ];

exports.send = function(data){
  data = JSON.stringify(data)
  producer.send([{
    topic: 'test',
    messages: data
  }], function (err, data) {
      console.log(data);
  });
  producer.on('error', function (err) {
    console.log(err)
  })
}


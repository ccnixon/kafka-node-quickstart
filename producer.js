'use strict';

const request = require('sync-request');
const kafka = require('kafka-node');

// message = request('GET', 'http://spec.segment.com/generate/identify?pretty=true')
const Producer = kafka.Producer;
const KeyedMessage = kafka.KeyedMessage;
const client = new kafka.Client();
const producer = new Producer(client);
const km = new KeyedMessage('key', 'message');
// payloads = [
//     { topic: 'test', messages: message.getBody() }
// ];

exports.send = function(data){
  data = JSON.stringify(data)
  producer.send([{
    topic: 'test',
    messages: data
  }], (err, data) => {
      console.log(data);
  });
  producer.on('error', err => {
    console.log(err)
  })
}

'use strict';

const kafka = require('kafka-node'),

const Consumer = kafka.Consumer;
const client = new kafka.Client();

const consumer = new Consumer(
  client,
  [
    { topic: 'test'}
  ]
);

consumer.on('message', message => {
  console.log(JSON.parse(message.value));
});

# kafka-node-quickstart

A quick Kafka sandbox with a small Hapi.js server and node client to listen for and handle POST requests.

## Set up Kafka

Follow the Kafka quickstart instructions [here](http://kafka.apache.org/documentation.html#quickstart).
The code is configured to read and write into a topic called `test` which is what you create when walking through the quickstart so be sure to stick to that naming convention or remember to dive into the `producer.js` and `consumer.js` files and swap the topic names out.

Once you've set up a couple of topics, you can quickly launch Kafka locally with two commands:

```sh
bin/zookeeper-server-start.sh config/zookeeper.properties
bin/kafka-server-start.sh config/server.properties
```

## Launch Server

In a new terminal window, cd to the project directory and type:

```sh
npm install
```

Then fire up the server with:

```sh
npm start
```

> I recommend downloading [nodemon](https://github.com/remy/nodemon) and running that instead of node as it makes it a lot easier to play around. 

## Recieve Webhooks

I use ngrok to expose localhost. Feel free to do the same here: [ngrok](https://ngrok.com/)
Once you've downloaded it and while you have the node server running, just open up a new terminal window and type in `ngrok 8080`. You can then use that generate url to send Webhook post data to.

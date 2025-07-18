const { Kafka, Partitioners } = require('kafkajs');
require('dotenv').config();

function createKafkaInstance(clientId = 'shared-client') {
    return new Kafka({
        clientId,
        brokers: [process.env.KAFKA_BROKER],
        createPartitioner: Partitioners.LegacyPartitioner,
    });
}

module.exports = { createKafkaInstance };

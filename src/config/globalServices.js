export default {
    loggerTransportCollection: {
        class: 'lib/logger/LoggerTransportCollection',
        arguments: [
            '%config.logger.transports%',
            '@loggerTransportAbstractFactory',
        ],
    },

    logger: {
        class: 'lib/logger/Logger',
        arguments: [
            '@loggerTransportCollection',
        ],
    },

    loggerTransportAbstractFactory: {
        class: 'lib/logger/LoggerTransportAbstractFactory',
        arguments: [
            [
                '@s3StreamLoggerTransportFactory',
                '@consoleLoggerTransportFactory',
            ],
        ],
    },
    consoleLoggerTransportFactory: {
        class: 'lib/logger/ConsoleLoggerTransportFactory',
    },
};

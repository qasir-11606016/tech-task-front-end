export default {
    server: {
        protocol: 'http',
        port: 4000,
        domain: 'localhost',
    },
    logger: {
        transports: [
            {
                type: 'ConsoleLoggerTransport',
                options: {
                    level: 'debug',
                    timestamp: true,
                },
            }
        ],
    },
    templateEngine: {

    }
};

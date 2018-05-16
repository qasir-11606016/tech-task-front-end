// @flow
import winston from 'winston';
import { LoggerTransportInterface } from './LoggerTransportInterface';
import { LoggerTransportFactoryInterface } from './LoggerTransportFactoryInterface';

export default class ConsoleLoggerTransportFactory implements LoggerTransportFactoryInterface {
    getType(): string {
        return 'ConsoleLoggerTransport';
    }

    createInstance(options: Object): LoggerTransportInterface {
        return new winston.transports.Console(options);
    }
}

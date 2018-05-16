// @flow
import { LoggerTransportInterface } from './LoggerTransportInterface';
import { LoggerTransportFactoryInterface } from './LoggerTransportFactoryInterface';
import NullLoggerTransport from './NullLoggerTransport';

export default class NullLoggerTransportFactory implements LoggerTransportFactoryInterface {
    getType(): string {
        return 'NullLoggerTransport';
    }

    createInstance(): LoggerTransportInterface {
        return new NullLoggerTransport();
    }
}

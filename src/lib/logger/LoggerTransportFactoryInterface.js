// @flow
import { LoggerTransportInterface } from './LoggerTransportInterface';

export interface LoggerTransportFactoryInterface {
    createInstance(options: Object): LoggerTransportInterface;

    getType(): string;
}

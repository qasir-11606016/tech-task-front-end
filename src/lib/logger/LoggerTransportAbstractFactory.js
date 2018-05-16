// @flow
import { LoggerTransportInterface } from './LoggerTransportInterface';
import { LoggerTransportFactoryInterface } from './LoggerTransportFactoryInterface';

export default class LoggerTransportAbstractFactory {
    _transportCollection: LoggerTransportFactoryInterface[];

    constructor(transportCollection: LoggerTransportFactoryInterface[]) {
        this._transportCollection = transportCollection;
    }

    createInstance(type: string, options: Object): ?LoggerTransportInterface {
        for (const transport: LoggerTransportFactoryInterface of this._transportCollection) {
            if (transport.getType() === type) {
                return transport.createInstance(options);
            }
        }

        return null;
    }
}

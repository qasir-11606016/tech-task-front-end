// @flow
import { LoggerTransportCollectionInterface } from './LoggerTransportCollectionInterface';
import { LoggerTransportInterface } from './LoggerTransportInterface';
import LoggerTransportAbstractFactory from './LoggerTransportAbstractFactory';

export default class LoggerTransportCollection implements LoggerTransportCollectionInterface {
    _transportConfig: Object[];
    _loggerTransports: LoggerTransportInterface[];
    _loggerTransportAbstractFactory: LoggerTransportAbstractFactory;

    constructor(transportConfig: Object[] = [], loggerTransportAbstractFactory: LoggerTransportAbstractFactory) {
        this._transportConfig = transportConfig;
        this._loggerTransportAbstractFactory = loggerTransportAbstractFactory;
        this._loggerTransports = [];
    }

    _initialize() {
        for (const transportConfig of this._transportConfig) {
            this._loggerTransports.push(
                this._loggerTransportAbstractFactory.createInstance(
                    transportConfig.type,
                    transportConfig.options,
                ),
            );
        }
    }

    getCollection() {
        if (this._loggerTransports.length > 0) {
            return this._loggerTransports;
        }

        this._initialize();
        return this._loggerTransports;
    }
}

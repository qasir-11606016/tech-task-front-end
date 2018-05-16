// @flow
import winston from 'winston';

import { LoggerInterface } from './LoggerInterface';
import LoggerTransportCollection from './LoggerTransportCollection';

export default class Logger implements LoggerInterface {
    _loggerTransportCollection: LoggerTransportCollection;
    _logger: Object;

    constructor(
        loggerTransportCollection: LoggerTransportCollection,
    ) {
        this._loggerTransportCollection = loggerTransportCollection;

        this._logger = new (winston.Logger)({
            transports: this._loggerTransportCollection.getCollection(),
        });
    }

    info(...msg: any): LoggerInterface {
        this._logger.info(...msg);
        return this;
    }

    debug(...msg: any): LoggerInterface {
        this._logger.debug(...msg);
        return this;
    }

    error(...msg: any): LoggerInterface {
        this._logger.error(...msg);
        return this;
    }
}

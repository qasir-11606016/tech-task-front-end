// @flow
import Logger from './Logger';
import LoggerTransportCollection from './LoggerTransportCollection';
import LoggerTransportAbstractFactory from './LoggerTransportAbstractFactory';
import { FactoryInterface } from '../FactoryInterface';
import { LoggerInterface } from './LoggerInterface';
import ConsoleLoggerTransportFactory from './ConsoleLoggerTransportFactory';

export default class ConsoleLoggerFactory implements FactoryInterface {
    createInstance(): LoggerInterface {
        return new Logger(
            new LoggerTransportCollection(
                [
                    {
                        type: 'ConsoleLoggerTransport',
                        options: {
                            level: 'debug',
                            timestamp: true,
                        }
                    }
                ],
                new LoggerTransportAbstractFactory(
                    [
                        new ConsoleLoggerTransportFactory()
                    ]
                )
            )
        );
    }
}

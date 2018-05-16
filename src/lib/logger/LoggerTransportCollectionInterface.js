// @flow
import { LoggerTransportInterface } from './LoggerTransportInterface';

export interface LoggerTransportCollectionInterface {
    getCollection(): LoggerTransportInterface[];
}

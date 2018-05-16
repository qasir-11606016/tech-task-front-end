// @flow

export interface LoggerInterface {
    info(msg: any): LoggerInterface;

    debug(msg: any): LoggerInterface;

    error(msg: any): LoggerInterface;
}

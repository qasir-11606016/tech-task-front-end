// @flow
import Container from './Container';
import { LoggerInterface } from './logger/LoggerInterface';

export default class MiddlewareLoader {
    _server: Object;
    _router: Object;
    _logger: LoggerInterface;
    _container: Container;

    constructor(container: Container, server: Object, router: Object, logger : LoggerInterface) {
        this._server = server;
        this._router = router;
        this._container = container;
        this._logger = logger;
    }

    load(middlewareStack: Object) {
        for (const middleware in middlewareStack) {
            const service = this._container.get(middlewareStack[middleware].service);
            this._logger.info(`Global Middleware: ${middleware} middleware registered`);
            this._server.use((req, res, next) => {
                service.invoke(req, res, next);
            });
        }
    }
}

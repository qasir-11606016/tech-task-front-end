// @flow
import HTTP_STATUS_CODES from 'http-status-codes';
import { MiddlewareInterface } from './MiddlewareInterface';

export default class EnsureAuthenticatedMiddleware implements MiddlewareInterface {
    invoke(req: any, res: any, next: () => void) {
        if (!req.isAuthenticated || !req.isAuthenticated()) {
            res.status(HTTP_STATUS_CODES.UNAUTHORIZED).json({});
        } else {
            next();
        }
    }
}

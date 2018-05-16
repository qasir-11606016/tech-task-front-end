// @flow
import { MiddlewareInterface } from './MiddlewareInterface';

export default class InvalidRouteRedirectMiddleware implements MiddlewareInterface {
    invoke(req: any, res: any): void {
        return res.redirect('/404');
    }
}

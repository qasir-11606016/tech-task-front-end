// @flow
export interface MiddlewareInterface {
    invoke(req: any, res: any, next: () => void): any;
}

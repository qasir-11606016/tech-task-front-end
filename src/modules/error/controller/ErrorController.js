// @flow
export default class ErrorController {
    async index(req: any, res: any): Promise<void> {
        res.render('error/views/error.hbs');
    }
}

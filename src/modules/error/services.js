/**
 * Dependency Management
 * This is based on symfony 2 DI Registry
 * https://symfony.com/doc/current/components/dependency_injection.html
 * @type {string}
 */
const MODULE_ERROR_PATH = 'modules/error';

export default {
    /**
     * Load the controller
     */
    errorController: {
        class: `${MODULE_ERROR_PATH}/controller/ErrorController`,
    },
};

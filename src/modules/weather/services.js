/**
 * Dependency Management
 * This is based on symfony 2 DI Registry
 * https://symfony.com/doc/current/components/dependency_injection.html
 * @type {string}
 */
const MODULE_WEATHER_PATH = 'modules/weather';

export default {
    /**
     * Load the controller
     */
    weatherController: {
        class: `${MODULE_WEATHER_PATH}/controller/WeatherController`,
        arguments: [
            '@weatherRepository'
        ]
    },
    /**
     * Load the address factory
     */
    weatherFactory: {
        factory: `${MODULE_WEATHER_PATH}/model/Weather`
    },

    locationFactory: {
        factory: `${MODULE_WEATHER_PATH}/model/Location`
    },

    weatherRepository: {
        class: `${MODULE_WEATHER_PATH}/repository/WeatherRepository`,
        arguments: [
            '@weatherApi'
        ]
    },
    weatherApi: {
        class: `${MODULE_WEATHER_PATH}/service/WeatherApi`,
    }
};

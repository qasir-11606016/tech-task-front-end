// @flow
import axios from 'axios';

export default class WeatherApi {
    async getWeatherByGeolocation(lat: string, long: string): Promise<Object> {
        /**
         * https://darksky.net/dev/docs
         *
         * please create an account to read document and to register for an API key https://darksky.net/dev/register
         * please implement the proxy to darknet using the API key
         *
         */

        return axios.get('');
    }
}

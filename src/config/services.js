import globalServices from './globalServices';
import weatherServices from '../modules/weather/services';
import errorServices from '../modules/error/services';

import middlewareServices from './middleware';

export default {
    ...middlewareServices.services,
    ...globalServices,
    ...weatherServices,
    ...errorServices
};

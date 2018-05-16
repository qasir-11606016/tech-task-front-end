export default {
    weather: {
        routes: {
            homePage: {
                controller: 'weatherController',
                action: 'index',
                method: ['get'],
                route: '/',
            },
        }
    },
};

const routes = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage Edit Localhost';
        },
    },
     {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page Edit Localhost';
        },
    },
];

module.exports = routes;

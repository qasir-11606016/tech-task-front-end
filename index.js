require('babel-polyfill');
require('babel-register');

let folder = 'src';
if (process.env.NODE_ENV === 'production') {
    folder = 'dist';
}

require(`./${folder}/server`); // eslint-disable-line import/no-dynamic-require

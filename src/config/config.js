/**
 *This config will dynamic merge the environment config
 * and over write the appropriate sections
 *
 */
const env = process.env.NODE_ENV || 'development';
export default require(`./${env}/${env}`).default; // eslint-disable-line import/no-dynamic-require, global-require

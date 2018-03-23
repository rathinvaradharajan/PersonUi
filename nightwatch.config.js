require('babel-core/register');
var nightwatch_config = (nightwatch => (nightwatch))(require('./nightwatch.json'));
module.exports = nightwatch_config;
require('nightwatch-cucumber')(module.exports);

var argv = require('yargs').argv;

module.exports = {
  getBrowser: function () {
    if (argv.browser === undefined) {
      return 'PhantomJS';
    }
    return argv.browser;
  },
  isWatching: function () {
    return (argv.watch === undefined) ? false : argv.watch;
  }
};

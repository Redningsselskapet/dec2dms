module.exports = function () {
  return {
    files: [
      './**/*.js' // adjust if required 
    ],

    tests: [
      'test/**/*.test.js' // adjust if required
    ],

    env: {
      type: 'node'
    }
  };
};
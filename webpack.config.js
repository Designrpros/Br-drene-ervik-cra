const path = require('path'); // Add this line

module.exports = {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'), // Adjust if your 'src' is in a different directory
      },
    },
  };
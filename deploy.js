const ghpages = require('gh-pages');

ghpages.publish('dist', function (err) {
  if (err) {
    console.error('Deploy failed:', err);
  } else {
    console.log('Deploy successful!');
  }
});

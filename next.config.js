
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['79z7DXrcW7WxvWvT2Q1sau'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  
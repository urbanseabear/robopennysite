const path = require('path')

module.exports = {
    images: {
        domains: ["img2.finalfantasyxiv.com"]
    },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
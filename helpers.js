const path = require('path')

module.exports = function root(relative) {
    return path.join(__dirname, relative)
}
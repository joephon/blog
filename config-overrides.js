const { override, addDecoratorsLegacy } = require("customize-cra");

module.exports = override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy()
)
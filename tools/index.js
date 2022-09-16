'use strict';

window.OpenSeadragon = require('mdc-openseadragon');
window.UPNG = require('upng-js');
require('./openSeadragonGL');
require('./viaWebGL');

module.exports = {
  "ViaWebGL": ViaWebGL,
  "openSeadragonGL": openSeadragonGL,
  "OpenSeadragon": window.OpenSeadragon
}


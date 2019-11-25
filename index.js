const formatcoords = require('formatcoords')
/**
 * @typedef {Object} DecCoord - Decimal coordinate
 * @property {number} lng - Longitude
 * @property {number} lat - Latitude
 */

/**
 * @typedef {Object} DMS - DMS coordinate
 * @property {string} lng - Longitude
 * @property {string} lat - Latitude
 */

/**
 * Convert decimal coordninate to dms coordinate
 * @param {Coordinate} 
 * @return {DMS}
 */
const dec2dms = ({lng, lat}) => {
    const value = formatcoords(lng, lat).format('DD m', {
        latLonSeparator: ', '
      }).split(',')
    return {
        lng: value[0],
        lat: value[1]
    }
}

module.exports = dec2dms


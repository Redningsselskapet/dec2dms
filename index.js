const formatcoords = require('formatcoords')

const dec2dms = ({lng, lat}) => {
    if (lat <= -90 || lat >= 90) throw('not an valid latitude value')
    if (lng <= -180 || lng >= 180) throw('not an valid longitude value')
    const value = formatcoords(lng, lat).format('DD m', {
        latLonSeparator: ','
      }).split(',')
    return {
        lng: value[0],
        lat: value[1]
    }
}

module.exports = dec2dms


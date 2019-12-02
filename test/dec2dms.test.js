const dec2dms = require('../index')

test('returns dms value for a given decimal coordinate', () => {
  const dms = dec2dms({lat: 0, lng: 0})
  expect(dms).toMatchObject({
    lat: '0° 0.00000',
    lng: '0° 0.00000'
  })
})

test('throws error if decimal latitude is not valid', () => {
  const invalidDecCoord = { lat: 200, lng: 0 }
  expect(() => dec2dms(invalidDecCoord)).toThrow()
})

test('throws error if decimal longitude is not valid', () => {
  const invalidDecCoord = { lat: 0, lng: -200 }
  expect(() => dec2dms(invalidDecCoord)).toThrow()
})
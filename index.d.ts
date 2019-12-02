interface DecCoords {
  lat: number,
  lng: number
}

interface DmsCoords {
  lat: string,
  lng: string
}

function dec2dms (coords: DecCoords): DmsCoords

export = dec2dms

const axios = require('axios');

const HttpError = require('../models/http-error');

async function getCoordsForAdress(address) {
  return {
    lat: 53.4813668,
    lng: -2.2433974
  };
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=YOUR_API_KEY`
  );

  const data = response.data;
  if (!data || data.status === 'ZERO_RESULTS') {
    const error = new HttpError(
      'Could not find location for the specified address.',
      422
    );
    throw error;
  }

  const coordinates = data.result[0].geometry.location;

  return coordinates;
}

module.exports = getCoordsForAdress;

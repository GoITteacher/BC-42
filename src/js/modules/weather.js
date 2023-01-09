const BASE_URL = 'https://weatherbit-v1-mashape.p.rapidapi.com';

const options = {
  headers: {
    'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
    'content-type': 'application/xml',
  },
};

export function getWeather(lat, lon, lang) {
  const params = new URLSearchParams({
    lat,
    lon,
    lang,
    lon: true,
  });

  //   console.log(`lat=${lat}&lon=${lon}&lang=Hello&World`);

  return fetch(`${BASE_URL}/forecast/3hourly?${params}`, options).then(
    response => response.json(),
  );
}

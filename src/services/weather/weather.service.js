import axios from './axios.instance';

export const weatherService = {
  getCurrentWeather,
};

async function getCurrentWeather(city) {
  return axios.get(
    `/current?access_key=fc36bc2ace46d2adf59dd33e8a55204a&query=${city}`,
  );
}

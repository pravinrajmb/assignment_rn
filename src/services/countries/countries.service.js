import axios from './axios.instance';

export const countriesService = {
  getCounrtyDetails,
};

async function getCounrtyDetails(queryString) {
  return axios.get(`/name/${queryString}`);
}

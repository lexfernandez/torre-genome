import axios from 'axios';

export const getGenome = async (username) => {
  return axios.get(`/bios/${username}`);
};

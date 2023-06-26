import axios from './defaultClient';

export const getBuyingPostList = () => {
  return axios.get('/saving/buy-together', {
    params: {
      // page: 0,
      // size: 1,
      // sort: 'string',
      // onlyOnlineBought: false,
      // lat: 0,
      // lng: 0,
      // distance: 0,
    },
  });
};

export const getBuyingPost = (id: string | undefined) => {
  return axios.get(`/saving/buy-together/${id}`, {
    params: {
      // page: 0,
      // size: 1,
      // sort: 'string',
      // onlyOnlineBought: false,
      // lat: 0,
      // lng: 0,
      // distance: 0,
    },
  });
};

export const getKnowingPostList = () => {
  return axios.get('/saving/know-together', {
    params: {
      // page: 0,
      // size: 1,
      // sort: 'string',
      // onlyOnlineBought: false,
      // lat: 0,
      // lng: 0,
      // distance: 0,
    },
  });
};

export const getKnowingPost = (id: string | undefined) => {
  return axios.get(`/saving/know-together/${id}`, {
    params: {
      // page: 0,
      // size: 1,
      // sort: 'string',
      // onlyOnlineBought: false,
      // lat: 0,
      // lng: 0,
      // distance: 0,
    },
  });
};

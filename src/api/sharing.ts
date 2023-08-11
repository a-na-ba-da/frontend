import axios from './defaultClient';

export const getSharingPostList = (keyword?: string) => {
  return axios.get('/saving/buy-together', {
    params: {
      // page: 0,
      // size: 1,
      // sort: 'string',
      // onlyOnlineBought: false,
      // lat: 0,
      // lng: 0,
      // distance: 0,
      keyword,
    },
  });
};

export const getSharingPost = (id: string | undefined) => {
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

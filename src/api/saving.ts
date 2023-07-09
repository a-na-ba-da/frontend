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

interface createOnlineKnowingPostProps {
  title: string;
  content: string;
  images: string[];
  productUrl: string;
}

export const createOnlineKnowingPost = ({
  title,
  content,
  images,
  productUrl,
}: createOnlineKnowingPostProps) => {
  return axios.post(
    '/saving/know-together/online',
    {
      title,
      content,
      images,
      productUrl,
    },
    {
      headers: { Authorization: 'Bearer ' + process.env.AUTH_TOKEN },
    },
  );
};

interface createOfflineKnowingPostProps {
  title: string;
  content: string;
  images: string[];
  buyPlaceLat: number;
  buyPlaceLng: number;
  buyPlaceDetail: string;
}

export const createOfflineKnowingPost = ({
  title,
  content,
  images,
  buyPlaceDetail,
  buyPlaceLat,
  buyPlaceLng,
}: createOfflineKnowingPostProps) => {
  return axios.post(
    '/saving/know-together/offline',
    {
      title,
      content,
      images,
      buyPlaceDetail,
      buyPlaceLat,
      buyPlaceLng,
    },
    {
      headers: { Authorization: 'Bearer ' + process.env.AUTH_TOKEN },
    },
  );
};

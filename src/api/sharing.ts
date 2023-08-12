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

interface createSharingPostProps {
  title: string;
  content: string;
  images: string[];
  productUrl?: string;
  buyPlaceDetail?: string;
  buyDate: string;
  pay: number;
  buyPlaceLat: number;
  buyPlaceLng: number;
}

export const createSharingPost = ({
  title,
  content,
  images,
  productUrl,
  buyPlaceDetail,
  buyDate,
  pay,
  buyPlaceLat,
  buyPlaceLng,
}: createSharingPostProps) => {
  return axios.post(
    '/saving/buy-together/meet-delivery',
    {
      title,
      content,
      images,
      productUrl,
      buyPlaceDetail,
      buyDate,
      pay,
      buyPlaceLat,
      buyPlaceLng,
    },
    {
      headers: { Authorization: 'Bearer ' + process.env.AUTH_TOKEN },
    },
  );
};

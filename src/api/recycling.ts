import axios from './defaultClient';

export const getRecyclingPostList = (keyword?: string) => {
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

export const getRecyclingPost = (id: string | undefined) => {
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

interface createRecyclingPostProps {
  title: string;
  content: string;
  images: string[];
  productUrl: string;
  buyPlaceDetail?: string;
  buyDate: string;
  pay: number;
}

export const createRecyclingPost = ({
  title,
  content,
  images,
  productUrl,
  buyPlaceDetail,
  buyDate,
  pay,
}: createRecyclingPostProps) => {
  return axios.post(
    '/saving/buy-together/parcel-delivery',
    {
      title,
      content,
      images,
      productUrl,
      buyPlaceDetail,
      buyDate,
      pay,
    },
    {
      headers: { Authorization: 'Bearer ' + process.env.AUTH_TOKEN },
    },
  );
};

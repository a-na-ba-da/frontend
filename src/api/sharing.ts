import axios from './defaultClient';

export const getSharingPostList = (keyword?: string) => {
  return axios.get('/lending', {
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
  return axios.get(`/lending/${id}`, {
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
  start: Date;
  end: Date;
  images: string[];
  pricePerDay: number;
  lat: number;
  lng: number;
}

export const createSharingPost = ({
  title,
  content,
  start,
  end,
  images,
  pricePerDay,
  lat,
  lng,
}: createSharingPostProps) => {
  return axios.post(
    '/lending',
    {
      title,
      content,
      start,
      end,
      images,
      pricePerDay,
      lat,
      lng,
    },
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
    },
  );
};

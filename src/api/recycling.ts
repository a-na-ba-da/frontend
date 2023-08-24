import axios from './defaultClient';

export const getRecyclingPostList = (keyword?: string) => {
  return axios.get('/recycle', {
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
  return axios.get(`/recycle/${id}`, {
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
}

export const createRecyclingPost = ({
  title,
  content,
  images,
}: createRecyclingPostProps) => {
  return axios.post(
    '/recycle',
    {
      title,
      content,
      images,
    },
    {
      headers: { Authorization: 'Bearer ' + process.env.AUTH_TOKEN },
    },
  );
};

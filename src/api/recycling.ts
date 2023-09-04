import axios from './defaultClient';

export const getRecyclingPostList = (keyword?: string) => {
  return axios.get('/recycling', {
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
  return axios.get(`/recycling/${id}`, {
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
    '/recycling',
    {
      title,
      content,
      images,
    },
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
    },
  );
};

import axios from './defaultClient';

export const getTradingPostList = (searchWord?: string) => {
  return axios.get('/changing/product', {
    params: {
      searchWord,
    },
  });
};

export const getTradingPost = (id: string | undefined) => {
  return axios.get(`/changing/product/${id}`);
};

interface createTradingPostProps {
  naverProductId: number;
  content: string;
  images: string[];
}

export const createTradingPost = ({
  naverProductId,
  content,
  images,
}: createTradingPostProps) => {
  return axios.post(
    'changing/my-product',
    {
      naverProductId,
      content,
      images,
    },
    {
      headers: { Authorization: 'Bearer ' + process.env.AUTH_TOKEN },
    },
  );
};

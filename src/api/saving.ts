import axios from './defaultClient';
import moment from 'moment';

export const getBuyingPostList = (keyword?: string) => {
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

export const getKnowingPostList = (keyword?: string) => {
  return axios.get('/saving/know-together', {
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
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
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
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
    },
  );
};

interface createParcelBuyingPostProps {
  title: string;
  content: string;
  images: string[];
  productUrl?: string;
  buyPlaceDetail?: string;
  buyDate: Date;
  pay: number;
}

export const createParcelBuyingPost = ({
  title,
  content,
  images,
  productUrl,
  buyPlaceDetail,
  buyDate,
  pay,
}: createParcelBuyingPostProps) => {
  return axios.post(
    '/saving/buy-together/parcel-delivery',
    {
      title,
      content,
      images,
      productUrl,
      buyPlaceDetail,
      buyDate: moment(buyDate).format('YYYY-MM-DD'),
      pay,
    },
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
    },
  );
};

interface createMeetBuyingPostProps {
  title: string;
  content: string;
  images: string[];
  productUrl?: string;
  buyPlaceDetail?: string;
  buyDate: Date;
  pay: number;
  deliveryPlaceLat: number;
  deliveryPlaceLng: number;
}

export const createMeetBuyingPost = ({
  title,
  content,
  images,
  productUrl,
  buyPlaceDetail,
  buyDate,
  pay,
  deliveryPlaceLat,
  deliveryPlaceLng,
}: createMeetBuyingPostProps) => {
  return axios.post(
    '/saving/buy-together/meet-delivery',
    {
      title,
      content,
      images,
      productUrl,
      buyPlaceDetail,
      buyDate: moment(buyDate).format('YYYY-MM-DD'),
      pay,
      deliveryPlaceLat,
      deliveryPlaceLng,
    },
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
    },
  );
};

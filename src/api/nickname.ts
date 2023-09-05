import axios from './defaultClient';

export const getRandNickname = () => {
  return axios.get('/auth/nickname');
};

export const changeNickname = (nickname?: string) => {
  return axios.patch(
    '/user',
    {
      params: {
        nickname,
      },
    },
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
    },
  );
};

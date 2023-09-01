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
      headers: { Authorization: 'Bearer ' + process.env.AUTH_TOKEN },
    },
  );
};

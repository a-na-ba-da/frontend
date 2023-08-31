import axios from './defaultClient';

export const getRandNickname = (nickname?: string) => {
  return axios.get('/auth/nickname', {
    params: {
      nickname,
    },
  });
};

import axios from './defaultClient';

export const getAnabadaToken = (kakaoToken: string) => {
  return axios.get(`/auth/kakao?token=${kakaoToken}`);
};

import axios from './defaultClient';

export const getMyActivity = () => {
  return axios.get('/user/activity', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    },
  });
};

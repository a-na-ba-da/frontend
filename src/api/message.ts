import axios from './defaultClient';

export const getMessageRoomList = () => {
  return axios.get('/message', {
    headers: { Authorization: 'Bearer ' + process.env.AUTH_TOKEN },
  });
};

export const getMessageRoomItem = (messageRoomId: number) => {
  return axios.get('/message', {
    params: {
      messageRoomId,
    },
    headers: { Authorization: 'Bearer ' + process.env.AUTH_TOKEN },
  });
};

export const createMessage = (postType: string, postId: number | undefined) => {
  return axios.post('/message', {
    params: {
      postType,
      postId,
    },
    headers: { Authorization: 'Bearer ' + process.env.AUTH_TOKEN },
  });
};

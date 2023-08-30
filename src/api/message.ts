import axios from './defaultClient';

export const getMessageRoomList = () => {
  return axios.get('/message', {
    headers: { Authorization: 'Bearer ' + process.env.AUTH_TOKEN },
  });
};

export const getMessageRoomItem = (messageRoomId: number) => {
  return axios.get('/message/' + messageRoomId, {
    params: {},
    headers: { Authorization: 'Bearer ' + process.env.AUTH_TOKEN },
  });
};

export const createMessage = (
  postType: string,
  postId: number | undefined,
  keyword: string,
) => {
  return axios.post(`/message/${postType}/${postId}`, keyword, {
    headers: { Authorization: 'Bearer ' + process.env.AUTH_TOKEN },
  });
};

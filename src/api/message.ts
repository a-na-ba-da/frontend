import axios from './defaultClient';

export const getMessageRoomList = () => {
  return axios.get('/message', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    },
  });
};

export const getMessageRoomItem = (messageRoomId: number) => {
  return axios.get('/message/' + messageRoomId, {
    params: {},
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    },
  });
};

export const createMessage = (
  postType: string,
  postId: number | undefined,
  keyword: string,
) => {
  return axios.post(`/message/${postType}/${postId}`, keyword, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    },
  });
};

// postType, postId로 messageRoomId 를 얻는 메서드
export const getRoomIdByPostInfo = async (postType: string, postId: number) => {
  const res = await axios.get('/message', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    },
  });
  const matchedMessageRoomSummary =
    res.data.result == 'SUCCESS' &&
    res.data.detail.find(
      (item: messageRoomSummaryType) =>
        item.postType == postType && item.postId == postId,
    );
  if (matchedMessageRoomSummary) {
    return matchedMessageRoomSummary.messageRoomId;
  }
  return 0;
};

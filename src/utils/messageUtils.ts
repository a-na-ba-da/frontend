// message 관련 공통 함수 분리

import { getRoomIdByPostInfo } from '../api/message';
import { setInterlocutorNickname } from '../context/reducer/messageReducer';

export const handleMsgSendClick = async (
  dispatch: any,
  navigate: any,
  postType: string,
  post: undefined | buyingPostType | knowingPostType,
) => {
  if (post) {
    const messageRoomId = await getRoomIdByPostInfo(postType, post.id);
    dispatch(setInterlocutorNickname(post?.writer?.nickname));
    navigate('/message/' + messageRoomId);
  }
};

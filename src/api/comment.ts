import axios from './defaultClient';

export const getComment = (postType: string, postId: number | undefined) => {
  return axios.get(`/comment/${postType}/${postId}`);
};

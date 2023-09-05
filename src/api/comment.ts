import axios from './defaultClient';

export const getComment = (postType: string, postId: number | undefined) => {
  return axios.get(`/comment/${postType}/${postId}`);
};

export const createComment = (
  postType: string,
  postId: number | undefined,
  content: string,
  parentCommentId?: number,
) => {
  return axios.post(
    `/comment/${postType}/${postId}`,
    {
      content,
      parentCommentId,
    },
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
    },
  );
};

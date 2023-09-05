import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getMessageRoomItem } from '../../api/message';

export const fetchMessageRoomItem = createAsyncThunk(
  'user/fetchMessageRoomItem',
  async (roomId: number) => {
    const res = await getMessageRoomItem(roomId);
    return res.data.detail;
  },
);

interface messageState {
  postType: string;
  postId: number;
  interlocutorNickname: string;
  data: messageRoomType;
  loading: boolean;
  error: string | undefined | null;
}

const initialState: messageState = {
  postType: '',
  postId: 0,
  interlocutorNickname: '',
  data: {
    messages: [],
    messagePostType: '',
    messagePostId: 0,
    interlocutor: {
      id: 0,
      nickname: '',
      activated: false,
    },
  },
  loading: false,
  error: null,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setPostType: (state, action) => {
      state.postType = action.payload;
    },
    setPostId: (state, action) => {
      state.postId = action.payload;
    },
    setInterlocutorNickname: (state, action) => {
      state.interlocutorNickname = action.payload;
    },
    setInit: (state) => {
      state.postType = '';
      state.postId = 0;
      state.interlocutorNickname = '';
      state.data = {
        messages: [],
        messagePostType: '',
        messagePostId: 0,
        interlocutor: {
          id: 0,
          nickname: '',
          activated: false,
        },
      };
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessageRoomItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMessageRoomItem.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.postType = action.payload.messagePostType;
        state.postId = action.payload.messagePostId; // todo: 성훈 추가 예정?
        state.interlocutorNickname = action.payload.interlocutor.nickname;
      })
      .addCase(fetchMessageRoomItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPostType, setPostId, setInterlocutorNickname, setInit } =
  messageSlice.actions;
export default messageSlice.reducer;

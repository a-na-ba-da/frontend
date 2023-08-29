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
    messagePostType: 'BUY_TOGETHER',
    messageRoomId: 0,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessageRoomItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMessageRoomItem.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMessageRoomItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPostType, setPostId, setInterlocutorNickname } =
  messageSlice.actions;
export default messageSlice.reducer;

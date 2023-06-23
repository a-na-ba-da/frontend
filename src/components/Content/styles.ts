import styled from 'styled-components';

export const ItemLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 15px 0;
  border-bottom: solid 1px #e1e1e1;
`;

export const ThumbnailCol = styled.img`
  width: 100px;
  height: 100px;
  background-color: #d9d9d9;
  border-radius: 10px;
  object-fit: cover;
`;

export const DescriptionCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0 5px 10px;
  flex-grow: 1;
`;

export const DateText = styled.div`
  font-size: 13px;
  color: #999999;
`;

export const ChatBox = styled.div`
  display: flex;
  justify-content: right;
`;

export const ChatCountText = styled.span`
  font-size: 13px;
  margin-left: 5px;
  padding-top: 1px;
`;

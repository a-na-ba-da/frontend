import styled from 'styled-components';

export const ItemLayout = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 0;
  border-bottom: solid 1px #e1e1e1;
  box-sizing: border-box;
`;

export const ThumbnailCol = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: #d9d9d9;
  object-fit: cover;
`;

export const DescriptionCol = styled.div`
  display: flex;
  padding: 5px 0 5px 10px;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

export const DateText = styled.div`
  color: #999999;
  font-size: 13px;
`;

export const ChatBox = styled.div`
  display: flex;
  justify-content: right;
`;

export const ChatCountText = styled.span`
  padding-top: 1px;
  margin-left: 5px;
  font-size: 13px;
`;

import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <SearchLayout>
      <SearchInputBox placeholder="검색어를 입력해주세요" />
      <SearchImg>
        <SearchIcon style={{ verticalAlign: 'middle' }} />
      </SearchImg>
    </SearchLayout>
  );
}

const SearchLayout = styled.header`
  display: flex;
  position: relative;
  height: 50px;
  padding: 0 15px;
  background-color: #fbfbfb;
  justify-content: center;
  align-items: center;
`;

const SearchInputBox = styled.input`
  width: 100%;
  height: 34px;
  padding-left: 10px;
  border: solid 1px #e7e7e7;
  border-radius: 5px;
  background-color: white;
  box-sizing: border-box;
`;

const SearchImg = styled.div`
  position: absolute;
  right: 20px;
`;

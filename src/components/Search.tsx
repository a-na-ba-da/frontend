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
  position: relative;
  height: 50px;
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

const SearchInputBox = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  border: solid 1px #e7e7e7;
  background-color: white;
  border-radius: 5px;
  padding-left: 10px;
`;

const SearchImg = styled.div`
  position: absolute;
  right: 20px;
`;

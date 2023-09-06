import React, { KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchBuyingPostList } from '../context/reducer/buyingReducer';
import { fetchKnowingPostList } from '../context/reducer/knowingReducer';
import { fetchSharingPostList } from '../context/reducer/sharingReducer';

export default function Search() {
  const dispatch = useAppDispatch();
  const [keyword, setKeyword] = useState<string>('');
  const menuType = useAppSelector((state) => state.menu.menuType);
  const [isKeyDown, setIsKeyDown] = useState(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing && !isKeyDown) {
      setIsKeyDown(true);
      // 키워드가 없을 경우 전체 검색
      if (keyword.length === 0) {
        switch (menuType) {
          case 'buying':
            dispatch(fetchBuyingPostList());
            break;
          case 'knowing':
            dispatch(fetchKnowingPostList());
            break;
          case 'sharing':
            dispatch(fetchSharingPostList());
            break;
        }
      } else if (keyword.length > 1) {
        switch (menuType) {
          case 'buying':
            dispatch(fetchBuyingPostList(keyword));
            break;
          case 'knowing':
            dispatch(fetchKnowingPostList(keyword));
            break;
          case 'sharing':
            dispatch(fetchSharingPostList(keyword));
            break;
        }
      } else alert('2자 이상부터 검색 가능합니다.');
    }
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsKeyDown(false);
    }
  };

  return (
    <SearchLayout>
      <SearchInputBox
        placeholder="검색어를 입력해주세요"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
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

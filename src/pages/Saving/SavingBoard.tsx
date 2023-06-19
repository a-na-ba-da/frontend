import React, { useState } from 'react';
import styled from 'styled-components';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

import Header from '../../components/Header/Header';
import Search from '../../components/Search';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer';
import HeaderRight from '../../components/Header/HeaderRight';

export default function SavingBoard() {
  const [isBuyingMenu, setIsBuyingMenu] = useState<boolean>(true);

  const handleClick = (whatMenu: string) => {
    // 현재 선택된 메뉴를 또 클릭시 smooth한 스크롤로 최상단 이동
    if (
      (whatMenu === 'buying' && isBuyingMenu) ||
      (whatMenu === 'knowing' && !isBuyingMenu)
    )
      window.scrollTo({ top: 0, behavior: 'smooth' });
    // 현재 선택되지 않은 메뉴를 클릭시 메뉴 전환 후 스크롤 최상단 이동
    // 전환후 최상단 스크롤 이동이 없을 경우 이전 메뉴의 스크롤이 전환 후 메뉴 스크롤에도 남게됨
    else if (whatMenu === 'buying') {
      setIsBuyingMenu(true);
      window.scrollTo({ top: 0 });
    } else {
      setIsBuyingMenu(false);
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <SavingLayout>
      {/* 
        props.children으로 전달된 컴포넌트를 헤더 내부에서 배치 
        HeaderRight로 감싸면 오른쪽에 배치
        HeaderLeft로 감싸면 왼쪽에 배치
      */}
      <HeaderSection>
        <Header title="아껴쓰기">
          <HeaderRight>
            <MessageOutlinedIcon />
          </HeaderRight>
        </Header>
        <Search />
        <MenuCol
          onClick={() => handleClick('buying')}
          isBuyingMenu={isBuyingMenu}
        >
          같이 사요
        </MenuCol>
        <MenuCol
          onClick={() => handleClick('knowing')}
          isBuyingMenu={!isBuyingMenu}
        >
          같이 알아요
        </MenuCol>
      </HeaderSection>
      <ContentSection>
        <Content isBuyingMenu={isBuyingMenu} />
      </ContentSection>
      <Footer />
    </SavingLayout>
  );
}

const SavingLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const HeaderSection = styled.section`
  position: fixed;
  background-color: white;
`;

const ContentSection = styled.section`
  padding-top: 177px;
  padding-bottom: 79px;
`;

interface MenuColProps {
  isBuyingMenu: boolean;
}

const MenuCol = styled.div<MenuColProps>`
  font-size: 15px;
  border-bottom: ${(props) =>
    props.isBuyingMenu ? '2px solid #8f00ff' : null};
  display: inline-flex;
  width: calc(100vw / 2);
  height: 50px;
  justify-content: center;
  align-items: center;
`;

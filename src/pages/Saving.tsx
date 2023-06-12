import React from 'react';
import styled from 'styled-components';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SearchIcon from '@mui/icons-material/Search';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

const Saving = () => {
  return (
    <SavingLayout>
      <Header>
        <HeaderBox>
          <HeaderText>아껴쓰기</HeaderText>
          <HeaderMessage>
            <MessageOutlinedIcon />
          </HeaderMessage>
        </HeaderBox>
      </Header>
      <Main>
        <SearchBox>
          <SearchInputBox placeholder="검색어를 입력해주세요" />
          <SearchImg>
            <SearchIcon style={{ verticalAlign: 'middle' }} />
          </SearchImg>
        </SearchBox>
        <MenuCol>같이 사요</MenuCol>
        <MenuCol>같이 알아요</MenuCol>
        <ContentList>
          <ContentItem>
            <ThumbnailCol></ThumbnailCol>
            <DescriptionCol>
              <TitleText>썬크림 1 + 1</TitleText>
              <DateText>2020.11.06 | 비대면</DateText>
              <PriceText>5,000원</PriceText>
              <ChatBox>
                <QuestionAnswerOutlinedIcon fontSize="small" />
                <ChatCountText>2</ChatCountText>
              </ChatBox>
            </DescriptionCol>
          </ContentItem>
        </ContentList>
      </Main>
      <Footer>
        <NavItem>
          <NavImg></NavImg>
          <NavText>아껴쓰기</NavText>
        </NavItem>
        <NavItem>
          <NavImg></NavImg>
          <NavText>나눠쓰기</NavText>
        </NavItem>
        <NavItem>
          <NavImg></NavImg>
          <NavText>바꿔쓰기</NavText>
        </NavItem>
        <NavItem>
          <NavImg></NavImg>
          <NavText>다시쓰기</NavText>
        </NavItem>
        <NavItem>
          <NavImg></NavImg>
          <NavText>마이페이지</NavText>
        </NavItem>
      </Footer>
    </SavingLayout>
  );
};

const SavingLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header`
  top: 0;
  width: 100%;
`;

const HeaderBox = styled.div`
  position: relative;
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.span`
  font-size: 18px;
`;

const HeaderMessage = styled.div`
  position: absolute;
  right: 30px;
`;

const SearchBox = styled.div`
  position: relative;
  height: 50px;
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
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

const Main = styled.main``;

const MenuCol = styled.div`
  font-size: 15px;
  border-bottom: solid 2px #8f00ff;
  display: inline-flex;
  width: calc(100vw / 2);
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  height: calc(100vh - 179px);
`;

const ContentItem = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 20px 0;
  border-bottom: solid 1px #e1e1e1;
`;

const ThumbnailCol = styled.div`
  width: 100px;
  height: 100px;
  background-color: #d9d9d9;
  border-radius: 10px;
`;

const DescriptionCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0 5px 10px;
  flex-grow: 1;
`;

const TitleText = styled.div`
  font-size: 15px;
`;

const DateText = styled.div`
  font-size: 13px;
  color: #999999;
`;

const PriceText = styled.div`
  font-size: 15px;
  color: #8f00ff;
`;

const ChatBox = styled.div`
  display: flex;
  justify-content: right;
`;

const ChatCountText = styled.span`
  font-size: 13px;
  margin-left: 5px;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 78px;
  border-top: solid 1px #f0f0f0;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavImg = styled.div`
  width: 32px;
  height: 32px;
  background-color: #999999;
`;

const NavText = styled.div`
  font-size: 12px;
  margin-top: 5px;
`;

export default Saving;

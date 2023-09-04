import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setNickname } from '../context/reducer/nicknameReducer';
import { getRandNickname, changeNickname } from '../api/nickname';
import PostBack from '../components/Post/PostBack';
import IdCard from '../asset/img/idcard.png';

export default function Nickname() {
  const dispatch = useAppDispatch();
  const nickname = useAppSelector((state) => state.nickname.nickname);
  const navigate = useNavigate();

  const handleRandNicknameClick = () => {
    getRandNickname()
      .then((res) => {
        dispatch(setNickname(res.data.generated_nickname));
      })
      .catch(() =>
        alert(
          '랜덤 닉네임을 생성하는 중에 문제가 발생했습니다. 잠시 후에 다시 시도해주세요.',
        ),
      );
  };

  const handleConfirmNicknameClick = () => {
    changeNickname(nickname)
      .then(() => {
        navigate('/');
      })
      .catch(() => alert('로그인 이후 사용할 수 있는 기능입니다.'));
  };

  return (
    <NicknameLayout>
      <HeaderWrapper>
        <Header>
          <PostBackWrapper>
            <PostBack color="#8f00ff" whatShape="back" />
          </PostBackWrapper>
          닉네임 설정
        </Header>
      </HeaderWrapper>
      <IdCardSection>
        <IdCardWrapper>
          <IdCardImg alt="IdCardIcon" src={IdCard} />
        </IdCardWrapper>
      </IdCardSection>
      <CreateNicknameText>닉네임을 설정해주세요</CreateNicknameText>
      <CreateRandNicknameBtnSection>
        <CreateRandNicknameBtnWrapper>
          <CreateRandNicknameBtn onClick={handleRandNicknameClick}>
            랜덤 닉네임 생성
          </CreateRandNicknameBtn>
        </CreateRandNicknameBtnWrapper>
      </CreateRandNicknameBtnSection>
      <NicknameInputSection>
        <NicknameInputWrapper>
          <NicknameInput
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={(e) => dispatch(setNickname(e.target.value))}
          />
        </NicknameInputWrapper>
      </NicknameInputSection>
      <ConfirmBtnSection>
        <ConfirmBtnWrapper>
          <ConfirmBtn onClick={handleConfirmNicknameClick}>완료</ConfirmBtn>
        </ConfirmBtnWrapper>
      </ConfirmBtnSection>
    </NicknameLayout>
  );
}

const NicknameLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const HeaderWrapper = styled.div``;

const Header = styled.div`
  display: flex;
  width: calc(100vw - 20px);
  height: 64px;
  margin: 0 auto;
  border-bottom: 1px solid #eaeaeb;
  font-size: 18px;
  justify-content: center;
  align-items: center;
`;

const PostBackWrapper = styled.div`
  position: absolute;
  top: -6px;
  left: -5px;
`;

const IdCardSection = styled.div`
  @media screen and (max-height: 480px) {
    padding-top: 10px;
    padding-bottom: 5px;
  }
  width: 100vw;
  height: 25vh;
`;

const IdCardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const IdCardImg = styled.img`
  width: 130px;
  height: 130px;
`;

const CreateNicknameText = styled.div`
  @media screen and (max-height: 480px) {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  font-size: 18px;
  text-align: center;
`;

const CreateRandNicknameBtnSection = styled.div`
  padding-top: 15px;
  padding-bottom: 10px;
`;

const CreateRandNicknameBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateRandNicknameBtn = styled.button`
  width: 130px;
  height: 30px;
  border: 1px solid #8f00ff;
  border-radius: 5px;
  background-color: #fff;
  font-size: 13px;
  font-weight: 600;
  color: #8f00ff;
`;

const NicknameInputSection = styled.div`
  padding-top: 15px;
  padding-bottom: 10px;
`;

const NicknameInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NicknameInput = styled.input`
  width: calc(100vw - 80px);
  max-width: 500px;
  height: 40px;
  border: 0;
  border-radius: 5px;
  background-color: #efefef;
  font-size: 16px;
  text-align: center;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 16px;
    color: #8f8f8f;
    text-align: center;
  }
  :-ms-input-placeholder {
    font-size: 16px;
    color: #8f8f8f;
    text-align: center;
  }
`;

const ConfirmBtnSection = styled.div`
  padding-top: 35px;
`;

const ConfirmBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConfirmBtn = styled.button`
  width: 60px;
  height: 30px;
  border: 0;
  border-radius: 5px;
  background-color: #8f00ff;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;

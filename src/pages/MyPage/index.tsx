import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AccountCircleTwoTOutlined from '@mui/icons-material/AccountCircleOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import RecyclingIcon from '@mui/icons-material/Recycling';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import Footer from '../../components/Footer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchMyActivity } from '../../context/reducer/mypageReducer';

export default function MyPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const myActivity = useAppSelector((state) => state.mypage.data);

  useEffect(() => {
    dispatch(fetchMyActivity());
  }, []);

  const handleSavingActivityClick = () => {
    navigate('/mypage/saving');
  };

  return (
    <MyPageLayout>
      <Header>마이 페이지</Header>
      <NicknameSection>
        <AccountCircleTwoTOutlined sx={{ fontSize: 32 }} />
        까칠한 비쿠냐
      </NicknameSection>
      <MyActivitySection>
        <MyActivityTitle>나의 아나바다</MyActivityTitle>
        <MyActivityList>
          <MyActivityListItem>
            <MyActivityListItemIcon>
              <HandshakeOutlinedIcon
                sx={{
                  fontSize: 24,
                }}
              />
            </MyActivityListItemIcon>
            <MyActivityListItemText onClick={handleSavingActivityClick}>
              아껴쓰기
            </MyActivityListItemText>
          </MyActivityListItem>
          <MyActivityListItem>
            <MyActivityListItemIcon>
              <ViewInArIcon
                sx={{
                  fontSize: 24,
                }}
              />
            </MyActivityListItemIcon>
            <MyActivityListItemText>나눠쓰기</MyActivityListItemText>
          </MyActivityListItem>
          <MyActivityListItem>
            <MyActivityListItemIcon>
              <SyncAltOutlinedIcon
                sx={{
                  fontSize: 24,
                }}
              />
            </MyActivityListItemIcon>
            <MyActivityListItemText>바꿔쓰기</MyActivityListItemText>
          </MyActivityListItem>
          <MyActivityListItem>
            <MyActivityListItemIcon>
              <RecyclingIcon
                sx={{
                  fontSize: 24,
                }}
              />
            </MyActivityListItemIcon>
            <MyActivityListItemText>다시쓰기</MyActivityListItemText>
          </MyActivityListItem>
        </MyActivityList>
      </MyActivitySection>
      <ReportSection>
        <ReportTitle>기타</ReportTitle>
        <ReportList>
          <ReportListItem>
            <ReportListItemIcon>
              <SupportAgentIcon sx={{ fontSize: 24 }} />
            </ReportListItemIcon>
            <ReportListItemText>자주 묻는 질문</ReportListItemText>
          </ReportListItem>
        </ReportList>
      </ReportSection>
      <Footer pageName="mypage" />
    </MyPageLayout>
  );
}

const MyPageLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  height: 56px;
  justify-content: center;
  align-items: center;
`;

const NicknameSection = styled.div`
  display: flex;
  height: 56px;
  background-color: #fbfbfb;
  justify-content: center;
  align-items: center;
`;

const MyActivitySection = styled.div`
  width: 94%;
  padding-top: 6%;
  padding-left: 6%;
  border-bottom: 1px solid #f3f3f3;
`;

const MyActivityTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const MyActivityList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const MyActivityListItem = styled.li`
  display: flex;
  height: 50px;
  align-items: center;
`;

const MyActivityListItemIcon = styled.div``;

const MyActivityListItemText = styled.div`
  margin-bottom: 1.5px;
  margin-left: 10px;
`;

const ReportSection = styled.div`
  width: 94%;
  padding-top: 6%;
  padding-left: 6%;
`;

const ReportTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const ReportList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const ReportListItem = styled.li`
  display: flex;
  height: 50px;
  align-items: center;
`;

const ReportListItemIcon = styled.div``;

const ReportListItemText = styled.div`
  margin-bottom: 1.5px;
  margin-left: 10px;
`;

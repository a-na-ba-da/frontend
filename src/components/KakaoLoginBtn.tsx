// 카카오 로그인 버튼
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';

import { getAnabadaToken } from '../api/authApi';
import Kakaotalk from '../asset/img/kakaotalk.png';
import { useNavigate } from 'react-router-dom';

export default function KakaoLoginBtn() {
  const navigate = useNavigate();
  const kakaoClientId = process.env.KAKAO_JS_API_KEY;
  const kakaoOnSuccess = async (data: any) => {
    const KakaoToken = data.response.access_token;
    const res = await getAnabadaToken(KakaoToken);
    localStorage.setItem('access_token', res.data.detail.access_token);
    localStorage.setItem(
      'access_token_expires',
      res.data.detail.access_token_expires,
    );
    localStorage.setItem('refresh_token', res.data.detail.refresh_token);
    localStorage.setItem(
      'refresh_token_expires',
      res.data.detail.refresh_token_expires,
    );
    navigate('/');
  };
  const kakaoOnFailure = (error: any) => {
    console.log(error);
  };
  return (
    <KakaoLogin
      token={kakaoClientId}
      onSuccess={kakaoOnSuccess}
      onFail={kakaoOnFailure}
      style={{
        position: 'relative',
        display: 'flex',
        width: '70vw',
        maxWidth: '500px',
        height: '42px',
        margin: '0 auto',
        border: '0',
        borderRadius: '5px',
        backgroundColor: '#f9e000',
        color: '#513838',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <KakaotalkBtnImg alt="kakaotalkicon" src={Kakaotalk} />
        <KakaotalkBtnText>카카오로 시작하기</KakaotalkBtnText>
      </div>
    </KakaoLogin>
  );
}

const KakaotalkBtnImg = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 10px;
`;

const KakaotalkBtnText = styled.span`
  position: relative;
  @media screen and (max-width: 425px) {
    left: 3%;
  }
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
`;

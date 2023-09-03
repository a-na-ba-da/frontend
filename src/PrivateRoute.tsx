// 권한 라우트 컴포넌트
// 로그인된 클라이언트만 접근 가능
import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
  component: JSX.Element;
}

export default function PublicRoute({ component }: PublicRouteProps) {
  const accessToken = localStorage.getItem('access_token');
  const accessTokenExpires = localStorage.getItem('access_token_expires');

  const hasAccess = () => {
    if (!accessToken) {
      return false;
    } else if (
      accessTokenExpires &&
      Date.now() < parseInt(accessTokenExpires)
    ) {
      return false;
    }
    return true;
  };

  if (hasAccess()) {
    return component;
  }
  return <Navigate to="/landing" />;
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// SPA는 페이지를 전환해도 스크롤이 유지되는 단점이 있다.
// 해당 코드는 페이지 이동마다 스크롤을 최상단으로 이동시켜주는 코드이다.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// 자주 사용되는 타입을 관리
// 이 파일에서 타입을 지정해주면 각 파일 내부에서 import 없이 바로 사용 가능

// 이미지 import 관련 타입 지정
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';

// react-slick 라이브러리 타입
declare module 'react-slick';

// env 전역 설정
declare const process;

// 글쓴이 타입
interface writerType {
  id: number;
  nickname: string;
  activated: boolean;
}

// 아껴쓰기-같이사요 게시글 타입
interface buyingPostType {
  id: number;
  title: string;
  content: string;
  productUrl: string | null;
  buyPlaceLat: number | null;
  buyPlaceLng: number | null;
  buyDate: string;
  pay: number;
  createdAt: string;
  modifiedAt: string;
  images: string[];
  parcelDelivery: boolean;
  writer: writerType;
  commentCount: number;
}

// 아껴쓰기-같이알아요 게시글 타입
interface knowingPostType {
  id: number;
  title: string;
  content: string;
  productUrl: string | null;
  buyPlaceDetail: string;
  buyPlaceLat: string | null;
  buyPlaceLng: string | null;
  isOnline: boolean;
  createdAt: string;
  modifiedAt: string;
  images: string[];
  writer: writerType;
  commentCount: number;
}

// 바꿔쓰기 게시글 타입
interface tradingPostType {
  id: number;
  name: string;
  content: string;
  productUrl: string | null;
  pay: number;
  createdAt: string;
  modifiedAt: string;
  images: string[];
}
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';

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
  onlineDelivery: boolean;
  writer: {
    id: number;
    nickname: string;
    activated: boolean;
  };
}

interface knowingPostType {
  id: number;
  title: string;
  content: string;
  productUrl: string | null;
  buyPlaceLat: string | null;
  buyPlaceLng: string | null;
  isOnlineBought: boolean;
  createdAt: string;
  modifiedAt: string;
  images: string[];
  writer: {
    id: number;
    nickname: string;
    activated: boolean;
  };
}

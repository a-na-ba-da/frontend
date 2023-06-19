import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ContentBuyingItem from './ContentBuyingItem';
import ContentKnowingItem from './ContentKnowingItem';

interface ContentProps {
  isBuyingMenu: boolean;
}

export default function Content({ isBuyingMenu }: ContentProps) {
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

  const [buyingPostList, setBuyingPostList] = useState<buyingPostType[]>([]);
  const [knowingPostList, setKnowingPostList] = useState<knowingPostType[]>([]);

  useEffect(() => {
    if (isBuyingMenu) {
      axios
        .get('http://172.105.237.249:8080/api/v1/saving/buy-together', {
          params: {
            // page: 0,
            // size: 1,
            // sort: 'string',
            // onlyOnlineBought: false,
            // lat: 0,
            // lng: 0,
            // distance: 0,
          },
        })
        .then((res) => {
          setBuyingPostList(res.data.content);
          console.log(res.data);
        });
    } else {
      axios
        .get('http://172.105.237.249:8080/api/v1/saving/know-together', {
          params: {
            // page: 0,
            // size: 1,
            // sort: 'string',
            // onlyOnlineBought: false,
            // lat: 0,
            // lng: 0,
            // distance: 0,
          },
        })
        .then((res) => {
          setKnowingPostList(res.data.content);
          console.log(res.data);
        });
    }
  }, [isBuyingMenu]);

  return (
    <ContentLayout>
      {isBuyingMenu
        ? buyingPostList.map((post) => (
            <ContentBuyingItem
              key={post.id}
              title={post.title}
              date={post.createdAt}
              isOnline={post.onlineDelivery}
              price={post.pay}
            />
          ))
        : knowingPostList.map((post) => (
            <ContentKnowingItem
              key={post.id}
              title={post.title}
              date={post.createdAt}
            />
          ))}
    </ContentLayout>
  );
}

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  overflow: scroll;
  & :last-child {
    border: 0;
  }
`;

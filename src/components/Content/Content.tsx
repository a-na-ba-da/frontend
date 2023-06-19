import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ContentBuyingItem from './ContentBuyingItem';
import ContentKnowingItem from './ContentKnowingItem';
import { getBuyingPostList, getKnowingPostList } from '../../api/saving';

interface ContentProps {
  isBuyingMenu: boolean;
}

export default function Content({ isBuyingMenu }: ContentProps) {
  const [buyingPostList, setBuyingPostList] = useState<buyingPostType[]>([]);
  const [knowingPostList, setKnowingPostList] = useState<knowingPostType[]>([]);

  useEffect(() => {
    if (isBuyingMenu) {
      getBuyingPostList().then((res) => {
        setBuyingPostList(res.data.content);
        console.log(res.data);
      });
    } else {
      getKnowingPostList().then((res) => {
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
              id={post.id}
              title={post.title}
              date={post.createdAt}
              isOnline={post.onlineDelivery}
              price={post.pay}
            />
          ))
        : knowingPostList.map((post) => (
            <ContentKnowingItem
              key={post.id}
              id={post.id}
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

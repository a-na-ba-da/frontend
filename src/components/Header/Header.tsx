import React, { Children, ReactNode, isValidElement } from 'react';
import styled from 'styled-components';

import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const leftContentsProps = (<HeaderLeft />).type;
const rightContentsProps = (<HeaderRight />).type;

// HeaderLeft 요소만 필터링해서 반환
function getLeftContents(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) => isValidElement(child) && child.type === leftContentsProps,
    )
    .slice(0, 2);
}

// HeaderRight 요소만 필터링해서 반환
function getRightContents(children: React.ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) => isValidElement(child) && child.type === rightContentsProps,
    )
    .slice(0, 2);
}

interface HeaderProps {
  children?: React.ReactNode;
  title: string;
}

export default function Header({ children, title }: HeaderProps) {
  const leftContents = getLeftContents(children);
  const rightContents = getRightContents(children);

  return (
    <HeaderLayout>
      <HeaderBox>
        <LeftSection>{leftContents && <div>{leftContents}</div>}</LeftSection>
        <HeaderText>{title}</HeaderText>
        <RightSection>
          {rightContents && <div>{rightContents}</div>}
        </RightSection>
      </HeaderBox>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.header`
  top: 0;
  width: 100%;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 77px;
`;

const HeaderText = styled.span`
  position: absolute;
  width: 100%;
  font-size: 18px;
  text-align: center;
`;

const LeftSection = styled.section`
  margin-left: 20px;
`;

const RightSection = styled.section`
  margin-right: 20px;
`;

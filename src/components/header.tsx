import React from 'react'
import styled from '@emotion/styled'

import Button from '../components/button'

interface HeaderProps {
  siteTitle: string
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  padding-bottom: 64px;

  @media(min-width: 420px) {
    padding: 64px;
  }
`;

const Heading = styled.h1`
  font-size: 4em;
  line-height: 1em;
  margin-bottom: 0px;
  word-spacing: 40000px;
`;

const Header: React.SFC<HeaderProps> = ({siteTitle}) => {
  return (
    <Wrapper>
      <Heading>{siteTitle}</Heading>
      <Button tabIndex={0} href="https://github.com/lychyi" target="_blank">Github</Button>
    </Wrapper>
  )
}
export default Header

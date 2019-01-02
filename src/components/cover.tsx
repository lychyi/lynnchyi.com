import React from 'react'
import styled from '@emotion/styled';

import coverImg from '../images/kellsworth-elly.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Cover: React.SFC = () => {
  return (
    <Wrapper>
      <img src={coverImg} alt=""/>
    </Wrapper>
  )
}

export default Cover;
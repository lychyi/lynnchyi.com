import React from 'react'
import styled from '@emotion/styled';

import img1 from '../images/kellsworth-elly.svg'
import img2 from '../images/america-the-beautiful.svg'
import img3 from '../images/blue-red.svg'
import img4 from '../images/blue-red-2.svg'
import img5 from '../images/green-circle.svg'
import img6 from '../images/rgb.svg'
import img7 from '../images/sticks.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  height: calc(100vh - 272px - 24px);
  width: 100%;
  padding: 0 16px;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  @media(min-width: 420px) {
    height: calc(100vh - 272px - 24px);
    padding: 0 64px;
  }
`;

class RandomCover extends React.Component<{}, { currentCover: any }> {
  pool = [img1, img2, img3, img4, img5, img6, img7];

  constructor(props: {}) {
    super(props);

    this.state = {
      currentCover: undefined
    }
  }

  componentDidMount() {
    this.setState({
      currentCover: this.getRandomElementFromArray(this.pool) 
    })
  }

  getRandomElementFromArray(arr: any[]) {
    return arr[Math.floor(Math.random()*arr.length)];
  }

  randomizeCover() {
    if (this.pool) {
      this.setState({
        currentCover: this.getRandomElementFromArray(this.pool)
      });
    }
  }

  render() {
    return (
      <Wrapper onClick={() => this.randomizeCover()}>
        <img style={{ width: '100%', height: '100%' }} src={this.state.currentCover} />
      </Wrapper>
    )
  }
  
}

export default RandomCover;
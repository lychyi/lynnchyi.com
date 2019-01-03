import React from 'react'
import styled from '@emotion/styled';

import img1 from '../images/kellsworth-elly.svg'
import img2 from '../images/america-the-beautiful.svg'
import img3 from '../images/blue-red.svg'
import img4 from '../images/blue-red-2.svg'
import img5 from '../images/green-circle.svg'
import img6 from '../images/rgb.svg'
import img7 from '../images/sticks.svg'
import img8 from '../images/bang.svg'
import img9 from '../images/black.svg'
import img10 from '../images/corners.svg'
import img11 from '../images/slope.svg'

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

  @media(max-height: 640px) {
    margin: 0 auto;
    height: 100%;
    max-width: 1280px;
  }
`;

class RandomCover extends React.PureComponent<{}, { currentIndex: number }> {
  pool = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

  constructor(props: {}) {
    super(props);

    this.state = {
      currentIndex: -1
    }
  }

  componentDidMount() {
    this.setState({
      currentIndex: this.randomIndex(this.pool) 
    })
  }

  randomIndex(arr: any[]): number {
    const index = Math.floor(Math.random()*arr.length);

    if (typeof arr === 'undefined') return -1;

    if (this.state.currentIndex !== -1 && index === this.state.currentIndex) {
      return this.randomIndex(this.pool);
    }

    return index;
  }

  randomizeCover() {
    if (this.pool) {
      this.setState({
        currentIndex: this.randomIndex(this.pool)
      });
    }
  }

  render() {
    return (
      <Wrapper onClick={() => this.randomizeCover()}>
        <img style={{ width: '100%', height: '100%' }} src={this.pool[this.state.currentIndex]} />
      </Wrapper>
    )
  }
  
}

export default RandomCover;
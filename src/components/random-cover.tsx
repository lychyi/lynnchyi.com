import React from 'react'
import styled from '@emotion/styled';

import img1 from '../images/kellsworth-elly.svg'
import img2 from '../images/america-the-beautiful.svg'
import img3 from '../images/blue-red.svg'
import img4 from '../images/blue-red-2.svg'
import img5 from '../images/green-circle.svg'
import img6 from '../images/rgb.svg'
import img7 from '../images/sticks.svg'
import img8 from '../images/viridis-dots.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  user-select: none;
  cursor: pointer;
`;

const Image: React.FC<{src: string}> = ({src}) => {
  return (
    <img src={src} />
  )
}

class RandomCover extends React.Component<{}, { currentCover: any }> {
  pool = [img1, img2, img3, img4, img5, img6, img7, img8];

  constructor(props: {}) {
    super(props);
    this.state = {
      currentCover: this.getRandomElementFromArray(this.pool)
    };
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
        <Image src={this.state.currentCover} />
      </Wrapper>
    )
  }
  
}

export default RandomCover;
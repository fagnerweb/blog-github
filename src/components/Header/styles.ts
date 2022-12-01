import styled from 'styled-components'

import bgHeader from '../../assets/bg-header.png'

export const Container = styled.div`
  background-image: url(${bgHeader});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 300px;
  align-items: center;

  img {
    margin-top: 64px;
    align-self: flex-start;
  }
`

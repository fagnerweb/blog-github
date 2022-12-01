import styled from 'styled-components'

export const Container = styled.article`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 32px;
  border: 2px solid transparent;
  transition: border-color 0.6s;
  cursor: pointer;

  &:hover {
    border: 2px solid #3a536b;
  }

  .title-group {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;

    h3 {
      max-width: 240px;
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
      color: ${(props) => props.theme['base-title']};
      margin-bottom: 20px;
    }

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
      margin-top: 5px;
    }
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }
`

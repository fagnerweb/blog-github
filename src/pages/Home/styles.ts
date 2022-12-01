import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding-bottom: 234px;
`

export const BoxHeader = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 32px;

  padding: 32px 40px;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  margin-top: -87px;

  img {
    width: 148px;
    height: 148px;
    object-fit: cover;
    border-radius: 8px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 8px;
  }

  a {
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const BoxSocial = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  list-style: none;
  margin-top: 24px;

  li {
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${(props) => props.theme['base-span']};
  }
`

export const FormContainer = styled.form`
  margin-top: 72px;

  .h-title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 160%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      text-align: right;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    display: block;
    width: 100%;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    height: 50px;
    padding: 12px 16px;
    margin-top: 12px;
    margin-bottom: 48px;
    color: ${(props) => props.theme['base-text']};

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  input::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme['base-label']};
  }

  input:focus {
    outline: 1px solid ${(props) => props.theme.blue};
  }
`
export const Articles = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`

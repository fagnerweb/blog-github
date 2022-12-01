import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding-bottom: 234px;
`

export const BoxHeader = styled.div`
  display: flex;
  flex-direction: column;

  padding: 32px 40px;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  margin-top: -87px;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  color: #e7edf4;
  margin-bottom: 8px;
`

export const NavTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  a {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
    color: #3294f8;
  }
`

export const BoxSocial = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-start;
  gap: 32px;
  align-items: center;

  li {
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${(props) => props.theme['base-span']};
  }
`

export const BoxArticle = styled.div`
  padding: 40px 32px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    font-size: 24px;
    line-height: 160%;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-bottom: 20px;
    color: ${(props) => props.theme['base-text']};
    text-decoration: none;
  }

  blockquote {
    background: ${(props) => props.theme['base-post']};
    padding: 16px;
    border-radius: 2px;
    margin-bottom: 30px;
  }

  blockquote p {
    margin-bottom: 0px;
  }

  pre {
    background-color: ${(props) => props.theme['base-post']};
    color: ${(props) => props.theme['base-text']};
    padding: 16px;
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style-position: inside;
    margin-bottom: 30px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }
`

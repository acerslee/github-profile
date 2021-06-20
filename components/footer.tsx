import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #262626;
  color: #f2f2f2;
  padding: 0.8em 0;
`;

const FooterText = styled.p`
  font-family: 'Anonymous Pro', monospace;
  text-align: center;
`;

const date = new Date().getFullYear();

const Footer = () => {
  return(
    <FooterContainer>
      <FooterText>©{date} Designed by Alex Lee</FooterText>
    </FooterContainer>
  )
}

export default Footer;
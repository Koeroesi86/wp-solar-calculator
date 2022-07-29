import styled, {createGlobalStyle} from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  background: #b0e001;
  border-radius: 8px;
  color: #046a38;
  font-family: "Montserrat", sans-serif;

  & * {
    box-sizing: border-box;
  }
`;

export const Content = styled.div`
  padding: 12px 63px 53px 58px;
  display: flex;
  flex-direction: row;
`;

export const ContentColumn = styled.div`
  flex: 1 1 auto;
`;

export const Title = styled.div`
  padding: 36px 63px 12px 58px;
  font-size: 25px;
  font-weight: 800;
`;

export const SectionHeader = styled.div`
  margin: 6px 0 12px 0;
  font-size: 18px;
`;

export const BillValue = styled.div`
  text-align: right;
  font-size: 15px;
  font-weight: 800;
`;

export const GlobalStyle = createGlobalStyle<{ baseUrl: string }>`
  @font-face {
    font-family: "Montserrat";
    font-weight: 100;
    src: ${({baseUrl}) => `
      url(${baseUrl}/fonts/Montserrat-Thin.woff2) format('woff2'),
      url(${baseUrl}/fonts/Montserrat-Thin.woff) format('woff'),
      url(${baseUrl}/fonts/Montserrat-Thin.ttf) format('truetype')
    `};
  }
  @font-face {
    font-family: "Montserrat";
    font-weight: 200;
    src: ${({baseUrl}) => `
      url(${baseUrl}/fonts/Montserrat-Light.woff2) format('woff2'),
      url(${baseUrl}/fonts/Montserrat-Light.woff) format('woff'),
      url(${baseUrl}/fonts/Montserrat-Light.ttf) format('truetype')
    `};
  }
  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    src: ${({baseUrl}) => `
    url(${baseUrl}/fonts/Montserrat-Regular.woff2) format('woff2'),
    url(${baseUrl}/fonts/Montserrat-Regular.woff) format('woff'),
    url(${baseUrl}/fonts/Montserrat-Regular.ttf) format('truetype')
    `};
  }
  @font-face {
    font-family: "Montserrat";
    font-weight: 600;
    src: ${({baseUrl}) => `
    url(${baseUrl}/fonts/Montserrat-SemiBold.woff2) format('woff2'),
    url(${baseUrl}/fonts/Montserrat-SemiBold.woff) format('woff'),
    url(${baseUrl}/fonts/Montserrat-SemiBold.ttf) format('truetype')
    `};
  }
  @font-face {
    font-family: "Montserrat";
    font-weight: 800;
    src: ${({baseUrl}) => `
      url(${baseUrl}/fonts/Montserrat-Bold.woff2) format('woff2'),
      url(${baseUrl}/fonts/Montserrat-Bold.woff) format('woff'),
      url(${baseUrl}/fonts/Montserrat-Bold.ttf) format('truetype')
    `};
  }
  @font-face {
    font-family: "Montserrat";
    font-weight: 900;
    src: ${({baseUrl}) => `
      url(${baseUrl}/fonts/Montserrat-Black.woff2) format('woff2'),
      url(${baseUrl}/fonts/Montserrat-Black.woff) format('woff'),
      url(${baseUrl}/fonts/Montserrat-Black.ttf) format('truetype')
    `};
  }
`;

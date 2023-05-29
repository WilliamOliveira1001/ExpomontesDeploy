import styled from "styled-components";

export const StyledComponetTituloSecond = styled.div`
  display: flex;

  div {
    margin: 0px 5px 0px 10px;
    width: 3px;
    height: 34px;
    background: linear-gradient(
      to top,
      rgb(151, 231, 0) 0%,
      rgb(140, 182, 60) 33.3%,
      rgb(121, 85, 72) 33.3%,
      rgb(157, 35, 35) 66.6%,
      rgb(255, 193, 7) 66.6%
    );
  }

  h2 {
    font-size: 26px;
    margin: 0px 0px 15px;
    font-weight: 100;
    color: black
    ;
  }

  @media (min-width: 480px) {
    h2 {
      font-size: 39px;
    }
  }
`;

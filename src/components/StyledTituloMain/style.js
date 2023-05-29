import styled from "styled-components";

export const StyledComponentsTituloMain = styled.div`

  width: 97%;
  margin: 0px auto;
  padding: 0px 0px 10px;


  h2 {
    text-align: start;
    font-weight: 300;
    margin: 18px 0px 6px;
    font-size: 25px;
    color:white;
  }

  div {
    margin: 12px 0px;
    width: 44%;
    height: 4px;
    background: linear-gradient(
      to right,
      rgb(151, 231, 0) 0%,
      rgb(140, 182, 60) 33.3%,
      rgb(121, 85, 72) 33.3%,
      rgb(157, 35, 35) 66.6%,
      rgb(255, 193, 7) 66.6%
    );
  }

  p {
      text-align: start;
    width: 85%;
    margin: 14px 0px;
    color: white;
  }

  @media (min-width: 480px) {
    padding: 10px 0px 13px;

    h2 {
      font-size: 39px;
    }

    div {
      width: 32%;
    }
  }
`;

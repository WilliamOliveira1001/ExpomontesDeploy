import styled from "styled-components";
import textura from "../../assets/news-bg.webp"
import corda from "../../assets/corda.png"


export const StyledComponetPatro = styled.div`
  .container-data-espera {
    background-image: url(${textura});
  }

  .bk-corda{ 
    background-image: url(${corda});
    background-size: contain;
    height: 25px;
  }

  .section-tyme{
    display: flex;
    align-items: center;
    padding: 20px 0px;
    flex-direction: column;
  }

  .img-identidade{
    width: 45%;
  }

  .div-data-espera-text h2 {
    font-weight: 300;
    font-size: 31px;
    text-align: center;
  }

  .div-data-espera-text p {
    width: 97%;
    font-size: 18px;
  }

  @media (min-width: 480px) {
    .section-tyme{
      flex-direction: column;
      justify-content: space-evenly;
      padding: 40PX 0px;
    }

    .img-identidade {
      width: 20%;
    }

    .div-data-espera-text p {
    font-size: 19px;
    margin: 12px 0px 20px;
    text-align: center;
    width: 100%;

    }

    .div-data-espera-text {
      width: 453px;
    }
  }
`
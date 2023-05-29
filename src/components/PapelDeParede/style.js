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

  .img-identidade{
    width: 45%;
  }

  @media (min-width: 480px) {

    .img-identidade {
      width: 20%;
    }

  }
`
import styled from "styled-components";
import textura from "../../assets/news-bg.webp"
import corda from "../../assets/corda.png"

export const StyleOutrasmidia = styled.div`

  .img-identidade {
    width: 45%;
  }

  .container-data-espera {
    background-image: url(${textura});
  }

  .bk-corda{ 
    background-image: url(${corda});
    background-size: contain;
    height: 25px;
  }

  .div-data-espera-text {
    padding: 0px 0px 25px 10px;
  }

  .titulo-texttura h2{
    color: #000;
    font-size: 30px;
  }

  .container-cards-comunicacao{
    width: 100%;

  }

  .container-cards-comunicacao figure{
    width: 90%;
    margin: 5px auto;
  }
  .container-cards-comunicacao figure img{
    width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border-radius: 8px;
  }

  .titulo-outra-comunicacao{
    text-align: center;
    margin: 20px 0px 14px;
  }

  @media (min-width: 480px) {

    .container-cards-comunicacao{
        gap: 25px;
        display: flex;
        max-width: 1092px;
        margin: 0 auto;
        padding-bottom: 40px;
    }

    .img-identidade {
        width: 20%;
    }

    .div-data-espera-text {
        width: 453px;
    }
    .container-cards-comunicacao figure  :hover{
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
}
`
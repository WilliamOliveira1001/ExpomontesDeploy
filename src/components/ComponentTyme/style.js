import styled from "styled-components";
import textura from "../../assets/news-bg.webp"
import corda from "../../assets/corda.png"


export const StyledComponetTymeExpo = styled.div`

  .container-data-espera {
    background-image: url(${textura});
  }

  .bk-corda{ 
    background-image: url(${corda});
    background-size: contain;
    height: 25px;
  }

  .div-data-espera-text {
    padding: 0px 0px 8px 10px;
  }

  .section-tyme{
    display: flex;
    padding: 9px 0px;
    flex-direction: column;
  }

  .img-identidade{
    width: 45%;
  }

  .div-auxliar-style-time {
    background-image: url(https://i.ibb.co/TBj1x2Q/placa-tempo.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 22px;
    width: 95%;
    height: 296px;
    margin: 0px auto;
  }

  .div-data-espera-text h2 {
  font-size: 25px;
    font-weight: 700;
    color: rgb(14, 66, 35);
  }

  .div-data-espera-text p {
    margin: 4px 0px 8px;
    font-size: 16px;
    width: 267px;
  }

  .div-data-espera-time {
    display: flex;
    gap: 5px;
    margin-top: 15px;
    align-items: center;
  }

  .div-auxliar-style-time h2 {
    color: rgb(255 255 255 / 68%);
    font-size: 12px;
    margin: 7px 0px 0px 10px;
  }

  .div-data-espera-time p{
    color: white;
    font-size: 30px;
  }
  
  .div-time {
    width: 47px;
    height: 56px;
    border-radius: 5px;
    color: rgb(235 235 235);
    display: flex;
    padding: 0px 3px 0px 0px;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    justify-content: center;
    align-items: flex-end;
  }

  .div-time h3 {
    font-size: 43px;
    margin-bottom: -2px;
  }

  .div-time h4 {
    font-weight: 200;
    font-size: 12px;
  }

  .titulo-tituo-video p{
    width: 267px;
  }

  @media (min-width: 480px) {
    .section-tyme{
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      padding: 0px 0px;
      max-width: 1211px;
      margin: 0 auto;
    }

    .img-identidade {
      width: 20%;
    }

    .div-auxliar-style-time{
      width: 489px;
      height: 300px;
      margin: 0px;
      gap: 0px;
      justify-content: space-evenly;
    }

    .div-data-espera-text p {
      font-size: 19px;
      width: 85%;
      margin: 10px 0px 0px;
    }

    .div-data-espera-text {
      width: 453px;
    }

    .div-data-espera-time {
      gap: 13px;
      margin-top: 15px;
    }

    .div-time {
      height: 82px;
    }

    .div-time h4 {
      font-weight: 200;
      font-size: 13px;
      margin: -4px 4px 0px 0px;
    }

    .div-time h3 {
      font-size: 46px;
    }

    .div-data-espera-text h2 {
      font-size: 40px;
    }

    .div-auxliar-style-time h2 {
        margin: -42px 0px 0px 10px;
    }

  }
`
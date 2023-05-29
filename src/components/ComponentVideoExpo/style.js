import styled from "styled-components";


export const StyledComponentsVideo = styled.div`

 .container-agro-tech {
    display: flex;
    background-image: url(https://i.imgur.com/g7OC7v1.png);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .div-text-agro-tech{
    gap: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 8px;
  }

  .div-iframe-video1 {
    display: flex;
    padding: 23px 0px;  
    justify-content: center;
  }

  .div-text-agro-tech p {
    font-size: 17px;
    text-align: start;
    max-width: 488px;
    color: white;
  }
  
  .div-text-agro-tech button {
    border: none;
    border-radius: 5px;
    width: 218px;
    height: 43px;
    background-color: #F7AF19;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .div-text-agro-tech button:hover{
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .div-text-agro-tech button h6 {
    font-weight: 400;
    font-size: 18px;
    color: white;
  }

  .iframe-video1 {
    width: 97%;
    height: 200px;
  }

  .corda1{
    display: none;
  }

  .corda{
    display: none;
  }

  .section-info-video{
    display: flex;
    flex-direction: column;
    width: 97%;
    margin: 0 auto;
  }

  #H2-test {
    max-width: 371px;
    width: 100%;
  }
  
  .div-text-agro-tech p {
    font-size: 16px;
    text-align: start;
    max-width: 336px;
    color: white;
  }

  @media (min-width: 480px) {

    .container-agro-tech{
      background-image: url(https://i.imgur.com/6IcsSSW.png);
      background-position: center;
    }

    .section-info-video{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      max-width: 1130px;
      gap: 85px;
      padding: 9px 0px 30px;
    }

    .div-text-desck{

    }
    
    .corda1{
      display: block;
      height: 300px;
    }

    .corda{
      display: block;
      width: 101px;
      margin-bottom: 145px;
    }

    .div-text-agro-tech {
      text-align: center;
    }

    .div-iframe-video1 {
      width: 48%;
      height: 320px;
      padding: 0px 0px;

    }

    .iframe-video1 {
      width: 100%;
      height: 100%;
    }


    #h2-section-video{
      margin: 0px;
    }

    #H2-test {
        max-width: 404px;
        width: 100%;
    }

    #H2-text {
      font-size: 30px;
      max-width: 404px;
    }
  }
`
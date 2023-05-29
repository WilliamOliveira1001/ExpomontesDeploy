import styled from "styled-components";

export const StyledNoticias = styled.div`
  .container-agro-tech {
    display: flex;
    background-color: rgb(14, 66, 35);
  }

  .div-text-agro-tech{
    gap: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .div-iframe-video1 {
    display: flex;
    padding: 23px 0px;  
    justify-content: center;
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

  .div-noticias-main-page {
    width: 100%;
  }


  .div-noticias-main-page ul {
    display: flex;
    gap: 195px;
    flex-direction: row;
    overflow: scroll;
    padding-bottom: 42px;
    padding: 0px 10px 40px;
  }

    .div-noticias-main-page ul li{
      height:   100%;
    }
  

  .sesction-noticias{
    padding-bottom: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  .sesction-noticias button { 
    border: none;
    border-radius: 5px;
    width: 171px;
    height: 34px;
    background-color: rgb(247, 175, 25);
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .sesction-noticias button:hover{
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .sesction-noticias button p{
    font-weight: 400;
    font-size: 18px;
    color: white;

  }

  @media (min-width: 480px) {

    .container-agro-tech {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .corda1{
      display: block;
      height: 407px;
      margin-top: 80px;
    }

    .corda{
      display: block;
      width: 119px;
      margin-bottom: 241px;
    }

    .div-iframe-video1 {
      height: 320px;
      padding: 41px;
    }

    .iframe-video1 {
      width: 100%;
      height: 100%;
    }

    .div-noticias-main-page ul {
        gap: 10px;
        overflow-x: hidden;
        overflow-y: hidden;
        padding-bottom: 50px;
        justify-content: space-between;
    }


    .div-noticias-main-page ul li{
         margin: auto;
         height: 100%;
    }

    .sesction-noticias{
      max-width: 1040px;
    }

}
`
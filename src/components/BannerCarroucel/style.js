import styled from "styled-components";

import img2 from "../../assets/bannersecundario.png"

export const StyledHeadlline = styled.div`
  margin-top: -86px;
  z-index: -1;
  position: relative;

  img {
    height: 100%;
    width: 100%;
  }

  .swiper {
    height: 47vh;
  }

  #Swiper1{
    display: none;
  }

  #Swiper2{
    display: block;
  }


  @media (min-width: 480px) {
    margin-top: -100px;
    z-index: -1;
    position: relative;
    height: 77vh;

    img {
      height: auto;
      width: 100%;
      margin-top: -100px;
    }

    #swiper {
      height: 77vh;
    }
    
    #Swiper2{
      display: none;
      height: 77vh;
    }

    #Swiper1{
      display: block;
      height: 77vh;
    }

    #img1 {
      display: block;
      background-image: url(${img2});
      background-position: bottom;
      background-size: cover;
    } 


  }
`;

import styled from "styled-components";

export const StyledBannerPatrocinadores = styled.div` 
  width: 100%;
  height: 125px;
  background-color: rgb(14, 66, 35);

  img {
    height: 100%;
    width: 100%;
  }

  .swiper { 
    height: 100%;
    width: 100%;
  }

  .patrocinadores-desck{
    display: none;
  }

  .patrocinadores-mobile{

  }

  @media (min-width: 480px) {

    img {
      height: 100%;
      width: 100%;
    }

    .patrocinadores-desck{
      display: block;
    }

    .patrocinadores-mobile{
      display: none;
    }
  }
`;

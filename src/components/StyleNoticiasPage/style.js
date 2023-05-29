import styled from "styled-components"

export const StyleComponetPageNoticias = styled.div`
    max-width: 1000px;
    width: 96%;
    margin: 0px auto;
    text-align: justify;

    img{
        width: 100%;
    }
    
    @media (min-width: 480px){
        img{
            width: 500px;
            margin:  0  auto;
        }

        figure{
            width: 500px;
            margin: 0 auto;
        }
    }

`
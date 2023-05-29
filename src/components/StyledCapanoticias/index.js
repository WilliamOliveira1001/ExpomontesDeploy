import styled from "styled-components"


export const StyledCapaNoticias = styled.div`
    width: 201%;
    height: 100%;
    margin: 0px auto;
    border: 1px solid rgba(211, 211, 211, 0.14);
    border-radius: 5px;
    box-shadow: rgba(104, 104, 104, 0.24) 4px 3px 10px;
    padding: 10px 6px 4px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: space-between;


    img{
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .div-text-noticia h2{
        font-size: 20px;
        padding: 8px 5px;
        color: white;
    }
    
    .div-text-noticia P{
        padding: 0px 5px 5px 5px;
        font-weight: 500;
        color: white;
    }

    .div-rodape-card-noticias{
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin: 9px 6px 2px;
        -webkit-box-align: center;
        align-items: center;
    }

    .div-rodape-card-noticias span{
        font-size: 14px;
        color: white;
    }

    .div-rodape-card-noticias a{
        display: flex;
        gap: 7px;
        align-items: center;
        color: white;
    }

    .div-rodape-card-noticias img{
        width: 23px;
        margin: 2px 0px 0px;
    }

    .div-rodape-card-noticias a p{
        font-size: 13px;
    }

    @media (min-width:480px){

        width: 290px;


        .div-noticias-main-page ul {
            gap: 20px;
        }
    }
`
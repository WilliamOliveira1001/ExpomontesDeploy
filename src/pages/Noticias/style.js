import styled from "styled-components";

export const StyledPageNoticia = styled.div`

    color: White;

    .div-container-card-noticia{
        width: 100%;
    }

    .div-card-noticias{
        width: 100%;
    }

    .div-info-card{
        width: 90%;
        margin: 25px auto;
        background-color: white;
    }

    .div-container-card-noticia h1{
        color: #505050;
        font-size: 17px;
        width: 90%;
        margin: 19px auto -8px;
        font-weight: 100;
    }

    .rodape-footer{
        background-color: rgb(218, 218, 218);
        padding: 10px 0px;
        text-align: center;
        margin-top: 10px;
    }

    .styled2-titulo h2{
        color: #343434;
        font-size: 31px;
    }

    #id-text-card-noticia h2{
        color: #3a3a3a;
    }

    #id-text-card-noticia p{
        color: #3a3a3a; 
    }

    #id-span-card-noticia span{
        color: #3a3a3a;
    }

    @media (min-width:480px){
        .div-card-noticias {
            max-width: 1210px;
            margin: 0 auto;
        }

        .div-card-noticias li{
            display: flex;
            flex-wrap: wrap;
        }

        .div-info-card {
            width: 30%;
            height: 470px;
        }

        .container-headlline-noticias{
            height: 40vh;
        }
        .container-headlline-noticias h2{
            font-size: 46px;
        }

        .styled2-titulo{
            padding: 0px;
            max-width: 1208px;
        }

    }

`
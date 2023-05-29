import styled from "styled-components";

export const StyledPaginaSObre = styled.div`

    .conteudostyle2{
        background-color: rgb(237, 237, 237);
        padding-bottom: 19px;
    }

    .container-conteudo-1 figure{
        width: 94%;
        margin: 0 auto;
    }

    .container-conteudo-1 figure img{
        width: 100%;
    }

    .div-text-conteudo{
        padding: 0px 0px 15px;
        font-size: 18px;
    }

    .div-text-conteudo h2{
        color: #164c00;
        margin-bottom: 11px;
    }

    .div-text-conteudo p{
        text-align: justify;
    }
        
    .rodape-footer {
        background-color: rgb(218, 218, 218);
        padding: 10px 0px;
        text-align: center;
        margin-top: 10px;
    }

    .section-tyme{
        display: flex;
        align-items: center;
        width: 95%;
        flex-direction: column;
        margin: 31px auto;
    }

    .figure-img1 img{
        width: 100%;
    }

    #id-div-text-conteudo button{   
        border: none;
        border-radius: 5px;
        width: 218px;
        height: 43px;
        background-color: rgb(247, 175, 25);
        transition: all 0.3s ease 0s;
        margin-top: 15px;
    }


    #id-div-text-conteudo button h6{
        font-weight: 400;
        font-size: 18px;
        color: white;
    }
    
    .figure-identidade{
        display: flex;
        justify-content: flex-end;
    }

    @media (min-width:480px){

        /* .primeira-div-conteudo{
            flex-direction: row-reverse;
        } */

        /* .container-conteudo-1{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 89%;
            margin: 0px auto;
            padding: 40px 0px;
            gap: 75px;
        } */
    

        .figure-img1 img{
            height: 350px;
            width: 555px;
        }

        .section-tyme{
            max-width: 1288px;
            width: auto;
            margin: 0px auto;
            flex-direction: row;
            padding: 18px 40px 60px;
        }
        .div-text-conteudo{
            padding: 14px 50px 14px 0px;
            font-size: 18px;
        }

        #id-section-tyme{
            flex-direction: row-reverse;
        }

        #id-div-text-conteudo{
            padding: 14px 0px 13px 50px;
        }
    }

`
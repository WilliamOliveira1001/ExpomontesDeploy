import styled from "styled-components";
export const StyledMap = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 35px 0px 25px;

    figure{
        width: 95%;
        height: 80%;
        margin: 0 auto;
        border: 1px solid #7a7a7a14;
        border-radius: 5px;
    }

    img{
        width: 97%;
        height: 100%;
        padding: 6px;
    }
    
    button{
        background-color: rgb(16, 96, 69);
        border: none;
        border-radius: 5px;
        width: 165px;
        margin: 0px 5px 0px 10px;
        height: 37px;
    }

    .div-text-mapa h2{
        font-size: 26px;
        font-weight: 100;
        margin: 15px 23px 0px 9px;
    }

    .div-text-mapa p{
        font-size: 17px;
        margin: 9px 61px 9px 12px;
    }

    .div-button-mapa{
        display: flex;
    }

    button h4{
        font-weight: 400;
        font-size: 16px;
        color: white;
    }

    @media (min-width: 480px) {

        display: flex;
        width: 80%;
        margin: 0 auto;
        
        .div-container-mapa{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        figure{
            width: 50%;
            height: 80%;
            margin: 0px auto;
            border: 1px solid rgba(122, 122, 122, 0.08);
            border-radius: 5px;
        }

        img{
            width: 98%;
            height: 100%;
            padding: 6px;
        }
        .div-text-mapa{
            width: 43%;
            padding: 0px 0px 0px 39px;
        }
        
        .h2-components{
            width: 100%;
        }
    }

`


import styled from "styled-components";

export const StyledComponentsProgramacao = styled.div`
    .container-painel-programacao{
        padding-top: 50px;
    }

    .div-fixed{
        padding: 19px 15px;
        width: 100%;
        border: 5px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        display: flex;
        justify-content: space-between;
    }

    .div-fixed p{
        font-size: 17px;
    }

    .div-card-programacao{
        width: 97%;
        margin: 0 auto;
    }

    .div-relative{
        background-color: #fffcfc;
        border: 1px solid #00000014;
        font-size: 15px;
        padding: 8px;
    }

    .div-relative li{
        list-style-type: disc;
        margin: 10px 0px 0px 19px;
    }

    .container-card-programacao{
        display: flex;
        gap: 10px;
        flex-direction: column;
        max-width: 1100px;
        margin: 0px auto 0px;
        padding: 30px 3px;
    }

    .div-text-conteudo {
        width: 95%;
        margin: 12px auto;
        padding: 14px 0px;
        font-size: 18px;
    }

    .titulo-programacao h2{
        color: black;
    }
    `

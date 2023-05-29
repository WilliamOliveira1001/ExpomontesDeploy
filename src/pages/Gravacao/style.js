import styled from "styled-components"

export const StyledPageGravacao = styled.div`
    .container-gravacao{
        padding: 25px 0px 0px;
    }

    .div-container-diasGravacao{
        width: 100%;
    }

    .container-text-iframe{
        width: 94%;
        padding: 8px 0px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        margin: 0px auto 0px;
        box-shadow: 2px 3px 8px #73737324;
        background: #fdfdfd;
    }

    .container-text-iframe h2{
        text-align: center;
    }

    .div-iframes{
        width: 94%;
        margin: 0px auto;
        padding: 18px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        flex-wrap: wrap;
    }

    .div-text-gravacao{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 0px 0px;
    }

    .div-text-gravacao h2{
        color: black;
    }

    @media (max-width: 480px) {
        max-width: 1390px;
        margin: 0px auto;
    }


`
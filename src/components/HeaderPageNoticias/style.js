import styled from "styled-components"

export const HeaderPageNoticiasStyleComponet = styled.div`

    .div-informacao-post {
        width: 97%;
        margin: 0px auto 21px;
        padding-bottom: 30px;
        border-bottom: 1px solid rgb(70, 131, 72);
    }

    .div-caminho-blog {
        margin: 24px 0px 10px;
    }

    .div-informacao-post h1 {
        font-weight: 600;
        font-size: 22px;
        max-width: 382px;
        margin: 0px 0px 10px;
        color: #000000f5;
    }

    .div-informacao-post p {
        font-size: 12px;
    }

    
    @media (min-width: 480px){

        .div-informacao-post{
            max-width: 1000px;
        }

        .div-informacao-post h1 {
            font-size: 29px;
            max-width: 100%;
        }
    }

`
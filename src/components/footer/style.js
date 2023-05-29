import styled from "styled-components";

export const StyledFooter = styled.div`

    .div-containaer-footer{
        background-color: white;
        border-top: 1px solid #08080830;
        padding: 15px 0px 0px 0px;
        color: #585858;
    }


    .div1-footer h2{
        font-size: 15px;
        font-weight: 100;
        width: 95%;
        margin: 8px 0px 0px 8px;
    }

    .div2-footer a{
        color: rgb(88, 88, 88);
    }


    .div1-footer img{
        width: 120px;
        margin-left: 4px; 
    }

    .ul-div1 { 
        padding: 10px 8px 24px;
    }
    
    .ul-div1 li{
        display: flex;
        gap: 7px;
        margin: 10px 0px ;
    }

    .div2-footer{
        margin: 0px 0px 0px 10px;
    }

    .div2-footer h3{
        color: #094532;
    }
    
    .div2-footer p{
        margin: 6px 0px;
        font-size: 15px;
    }

    .div3-footer h3{
        color: #094532;
        margin-bottom: 7px;
    }

    .div3-footer{
        margin: 28px 0px 0px 10px;
    }

    .div3-footer button{
        background: rgba(110, 110, 110, 0);
        color: rgb(46, 46, 46);
        border: 1px solid rgb(195, 195, 195);
        font-size: 17px;
        font-weight: 400;
        padding: 4px 21px;
        border-radius: 21px;
        margin: 8px 0px 21px;


    }
    .div3-midiasocial{
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .rodape-footer {
        background-color: rgb(218, 218, 218);
        padding: 10px 0px;
        text-align: center;
        margin-top: 10px;
    }
    
    @media (min-width:480px){
        .div-containaer-footer{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 120px;
        }

        .div1-footer h2 {
            width: 329px;
        }

        .div3-footer {
            margin: 0px 0px 0px 10px;
        }
    }


`
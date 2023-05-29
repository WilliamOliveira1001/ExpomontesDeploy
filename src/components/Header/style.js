import styled from "styled-components"
import corda from "../../assets/corda.png"

export const HeaderStyles = styled.div`
    height: 85px;
    background-color: transparent;

    .bk-corda{ 
        background-image: url(${corda});
        background-repeat: repeat-x;
        background-size: contain;
        width: 100%;
        height: 25px;
    }

    .div-header{
        width: 95%;
        margin: 0px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .figure-img-logo img {
        width: 120px;
    }
    
    .button-hamburguer-header{
        background: transparent;
        border: none;
    }
    
    .nav-header{
        display: none;
    }

    #area-cliente{
        display: none;
    }

    
    .div-auxiliar-span{
        display: none;
    }
    
    @media (min-width:480px) { 
        height: 100px;
        
        .div-auxiliar-span{
            display: flex;
            gap: 5px;
        }
        
        .div-header{
            width: 85%;
        }

        #area-cliente{
            display: block;
            border: 1px solid #FFC107;
            border-radius: 28px;
            padding: 9px 17px 9px 22px;
            margin-left: 6px;
            background-color: #F9B61A;
        }

        .ul-header{
            display: flex;
            gap: 25px;
        }
        
        .li-header a{
            color: white;
            font-size: 17px
        }

        .button-hamburguer-header{
            display: none;
        }

        .figure-img-logo img {
            width: 155px;
        }

        .nav-header{
            display: block;
        }

        .figure-img-hamburguer{
            display: none;
        }


    }

`
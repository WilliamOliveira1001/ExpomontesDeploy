import styled from "styled-components";
// import imgRainha from "../../assets/rainhas1.png"
// import imgRainha2 from "../../assets/rainhas2.png"
// import imgRainha3 from "../../assets/rainhas3.png"
// import imgRainha4 from "../../assets/rainhas4.png"


export const StyledRainhas = styled.div`
    #titulo-rainha h2, p{
        color: black;
    }

    .titulo-rainha p{
        margin: 14px auto;
        text-align: center;
    }

    .titulo-rainha div{
        width: 30%;
        margin: 0 auto;
    }

    #titulo-rainha {
        width: 94%;
        margin: 0px auto;
    }

    .container-card{
        width: 95%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .card{
        width: 100%;
        background-position: center center;
        background-size: cover;
        height: 300px;
        margin: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        padding: 9px;
        justify-content: flex-end;
    }
    
    #rainha1{
        background-image: url("https://i.ibb.co/Cv4Lqqk/rainhas1.png") ;
    }

    #rainha2{
        background-image:  url("https://i.ibb.co/1MmK0cJ/rainhas2.png") ;
    }
    #rainha4{
        background-image: url("https://i.ibb.co/0VPrGD8/rainhas4.png") ;
    }
    
    #rainha3{
        background-image:  url("https://i.ibb.co/QbZqQ1G/rainhas3.png") ;
    }

    .h2-card{
        color: white;
        padding: 3px 0px;
    }

    .p-card{
        color: white;
    }

    @media (min-width: 480px){
        .container-card{
            max-width: 1255px;

        }

        .card{
            width: 43%;
        }

        #titulo-rainha {
            max-width: 1135px;
        }

    }
`
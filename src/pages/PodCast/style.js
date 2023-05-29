import styled from "styled-components";

export const StyledComponentsPodcast = styled.div`
    .container-text-inicial{
        padding-top: 25px;
    }

    .container-text-inicial figure{
        width: 50%;
        margin: 0 auto;
    }

    .container-text-inicial figure img{
        width: 100%;
    }

    .div-episodios{
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10px;
    }

    .div-episodios iframe{
        height: 90px;
        width: 95%;
    }

    
    .text-podCast h2, p{
        color: black;
        text-align: center;
    }

    .text-podCast {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    @media (min-width: 480px){
        
        .container-text-inicial {
            padding-top: 63px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            padding: 40px 0px 50px;
            width: 79%;
            margin: 0 auto;
        }
        
        .container-text-inicial figure {
            width: 20%;
        }
        
        .text{
            width: 40%;
        }
        
        .div-episodios{
            width: 80%;
            margin: 0 auto;
        }
        
        .text-podCast{
            width: 470px;
        }
    }
`
import styled from "styled-components"


export const StyledMenuHeader = styled.div`
    .app-menu {
        height: 100vh;
        width: 20rem;
        background-color: #0e4223;
        z-index: 99999;

        transform: translateX(-100%);
        transition: 0.3s;

        position: fixed;
        left: 0;
        top: 0;

        display: flex;
    }

    .nav-descktop img{
        width: 110px;
        margin: 6px 0px 13px 6px;
    }

    .menu-open {
        transform: translateX(0%);
    }

    .ul-nav li{
        padding: 10px 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.02);
        display: flex;
        align-items: flex-end;
        gap: 11px;
    }

    .ul-nav li a {
        color: white;
        font-size: 17px;
    }


    #area-cliente{
        display: block;
        border: 1px solid rgb(255, 193, 7);
        border-radius: 28px;
        padding: 6px 19px 7px 25px;
        margin-left: 10px;
    }
`

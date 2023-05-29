import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&family=Roboto:wght@100;300;400;500;700;900&display=swap');

    
    :root{
        --Color-primary: #0e4931;
        --Color-primary-Focus: #FF427F;
        --Color-primary-Negative: #59323F;
        --Grey-5: #000000bf;
        --Grey-4: #121214;
        --Grey-3: #212529;
        --Grey-2: #343B41
        --Grey-1: #868E96; 
        --Grey-0: #F8F9FA;
        --Sucess: #3FE864;
        --Negative: #E83F5B;
    }
    
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        text-decoration: none;
        list-style: none;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }
`
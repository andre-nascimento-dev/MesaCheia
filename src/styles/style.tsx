import { createGlobalStyle } from "styled-components";
import vecnaWoff from "../assets/font/vecna/VecnaBold.woff";
import vecnaWoff2 from "../assets/font/vecna/VecnaBold.woff2";
import vecnaTTF from "../assets/font/vecna/VecnaBold.ttf";
import vecnaOTF from "../assets/font/vecna/VecnaBold.otf";
import cursorPointer from "../assets/img/cursor-pointer.png";
import cursor from "../assets/img/cursor.png";

export const GlobalStyle = createGlobalStyle`

@font-face { 
    font-family: "Vecna";
    src: url(${vecnaWoff}) format('woff'),
     url(${vecnaWoff2}) format('woff2'), 
     url(${vecnaTTF}) format('ttf'), 
     url(${vecnaOTF}) format('otf');
}

:root { 
    --mainBgColor: #1a1a1d;
    --secondaryBgColor: #6f2232;
    --mainButtonBg: #c3073f;
    --secondaryButtonBg: #4e4e50;
    --highLigthBgColor: #950740;
    --mainTextColor: #000;
    --secondaryTextColor: #fff;
}

html, body, div, ul ,li, figure, figcaption, h1, h2, h3, h4, h5, h6, p, a, form, input, button, main, section, header, footer {
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;
}

html, body { 
    cursor: url(${cursor}),auto;
    font-family: 'Roboto', serif;
    scroll-behavior: smooth;
    background-color: var(--mainBgColor);
}

button, a { 
    cursor:url(${cursorPointer}), auto;
    font-family: 'Roboto', serif;
}
`;

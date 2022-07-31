import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#EDEDED',
    fontColor: '#000'
}

export  const darkTheme = {
    body: '#121212',
    fontColor: '#EDEDED'
}

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
        transition: all 0.25s linear;
    }

`;
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --Branco: #FFFFFF;
        --Cinza: #3a3a3a;
        --Vermelho: #CA6D6D;
    }

    body {
        background: var(--Vermelho);
        color: var(--Branco);
    }
`
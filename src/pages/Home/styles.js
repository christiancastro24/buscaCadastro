import styled from "styled-components"


export const ContainerHome = styled.div`

@media (min-width: 300px) and (max-width: 568px){
        margin: 35% auto;
        background-color: #C37C7C;
        border-radius: 4px;
        width: 18.5rem;
    }

    h1 {
        font-size: 3.2rem;
        font-family: 'Oleo Script Swash Caps', cursive;
    }

    @media (min-width: 569px) {
        margin: 15% auto;
        background-color: #C37C7C;
        border-radius: 4px;
        width: 35rem;
        padding: 0.1rem;
        
        h1 {
            font-family: 'Oleo Script Swash Caps', cursive;
            font-size: 4rem;
        }
    }

    button {
        border: none;
        margin: 0.5rem;
        font-weight: bold;
    }
`
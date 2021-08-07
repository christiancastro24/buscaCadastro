import styled from "styled-components"


export const ContainerHome = styled.div`

h1 {
            font-family: 'Oleo Script Swash Caps', cursive;
            color: #fff;
                font-size: 5rem;
                letter-spacing: 5px;
  text-shadow:   0px -6px 0 #212121,
                 6px  0px 0 #212121,
                -6px  0px 0 #212121,
                 6px  0px 0 #212121,
                -6px -6px 0 #212121,  
                 6px -6px 0 #212121,
                -6px  6px 0 #212121,
                 6px  6px 0 #212121,
                -6px  8px 0 #212121,
                 0px  8px 0 #212121,
                 6px  8px 0 #212121,
                 0 9px 1px rgba(0,0,0,.1),
                 0 0 6px rgba(0,0,0,.1),
                 0 6px 3px rgba(0,0,0,.3),
                 0 2px 6px rgba(0,0,0,.2),
                 0 8px 8px rgba(0,0,0,.5),
                 0 4px 4px rgba(0,0,0,.2),
                 0 6px 6px rgba(0,0,0,.5);
        }

        h3 {
            font-size: 1.4rem;
            font-family: 'Oleo Script Swash Caps', cursive;
        }

@media (min-width: 300px) and (max-width: 568px){
        margin: 35% auto;
        border-radius: 4px;
        width: 18.5rem;
    }

    h1 {
        font-size: 4.2rem;
        font-family: 'Oleo Script Swash Caps', cursive;
    }

    @media (min-width: 569px) {
        margin: 10% auto;
        border-radius: 4px;
        width: 35rem;
        padding: 0.1rem;
        
        
    }

    button {
        border: none;
        margin: 0.5rem;
        font-weight: bold;
    }
`
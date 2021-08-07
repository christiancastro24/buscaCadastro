import styled from "styled-components"

export const ContainerDashboard = styled.div`

    @media (min-width: 300px) and (max-width: 767px) {
        margin: 5% auto;
        
        input {
            width: 11rem;
            color: var(--Branco);
            font-weight: bold;
        }   

    h1 {
        font-family: 'Oleo Script Swash Caps', cursive;
        font-size: 3rem;
    }
  }

    @media (min-width: 768px) {
        margin: 5% auto;
        
        input {
            width: 16rem;
            color: var(--Branco);
            font-weight: bold;
        }

        h1 {
            font-family: 'Oleo Script Swash Caps', cursive;
            font-size: 3rem;
    }
}
`

export const ItemsDashboard = styled.div`
    @media (min-width: 300px) and (max-width: 768px) {
        width: 17rem;
        margin: 6% auto;
        background-color: #D67D7D;
        text-align: left;
        padding: 0.3rem 0.2rem;
        
        button {
            font-weight: bold;
            display: block;
            margin: 0 auto;
        }
        svg {
            position: relative;
            top: 0.37rem;
        }
    }

    @media (min-width: 768px) {
        width: 25rem;
        margin: 6% auto;
        background-color: #D67D7D;
        border-radius: 9px;
        text-align: left;
        padding: 0.3rem 0.2rem;
        
        button {
            font-weight: bold;
            display: block;
            margin: 0 auto;
        }
        svg {
            position: relative;
            top: 0.37rem;
        }
    }
    
`
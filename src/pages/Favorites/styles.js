import styled from "styled-components"

export const ContainerFavorites = styled.div`
    @media (min-width: 300px) and (max-width: 615px) {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 616px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`

export const ItemsFavorites = styled.div`
    @media (min-width: 300px) and (max-width: 615px) {

        width: 18.5rem;
        margin: 6% auto;
        background-color: #D67D7D;
        border-radius: 9px;
        text-align: left;
        padding: 0.3rem 0.2rem;

        button {
            display: block;
            margin: 0 auto;
        }

        svg {
            position: relative;
            top: 0.3rem;
        }
    }

    @media (min-width: 616px) {

            width: 18.5rem;
            height: 12.5rem;
            margin: 4% auto;
            background-color: #D67D7D;
            border-radius: 9px;
            text-align: left;
            padding: 0.3rem 0.2rem;
            margin: 2rem 0.2rem;

            button {
                display: block;
                margin: 0 auto;
            }

            svg {
                position: relative;
                top: 0.3rem;
        }
    }

    
`
import styled from "styled-components"

export const ContainerForm = styled.form`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: auto;

        a {
            color: #0095;
        }

        h1 {
            font-family: 'Oleo Script Swash Caps', cursive;
            font-size: 3rem;
            margin-top: 2.5rem;
        }

        input {
            width: 15rem;
            color: var(--Branco);
            font-weight: bold;
        }

        img {
            height: 50vh;
            position: relative;
            top: 10rem;
        }

        p {
            padding-top: 5rem;
            font-family: 'Oleo Script Swash Caps', cursive;
            font-size: 1.4rem;
        }

        @media (min-width: 300px) and (max-width: 1206px) {
            img {
                display: none;
            }
        }
`

export const Image = styled.div`
    background-color: #282c34;
    height: 100vh;
    width: 50rem;
    margin-left: -18rem;
    overflow: hidden;

    @media (min-width: 300px) and (max-width: 1206px) {
        display: none;
    }

`
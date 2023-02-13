import styled from "styled-components";

export const DivListHeader = styled.header`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
            width: 80px;
            background-color: #00FF7F;
            border: #00FF7F;
            color: #000000
        }

`

export const DivHeader = styled.header`
    height: 100vh;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline:  1px ;

    h1 {
        color: #00FF7F;
        font-size: 42px;
    }

    div {
        margin-top: 25px;
    }

    hr {
        margin-top: 50px;
        color: aliceblue;
        width: 100%;
    }

    #headerHome {
        width: 80%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -80px;

        button {
            width: 80px;
            background-color: #808080;
            border: #808080;
        }
    }

    #userHome {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 40px;

        button {
            width: 80px;
            background-color: #808080;
            border: #808080;
        }

        span {
            color: #868E96;
        }

    }

    @media screen and (max-width: 700px){
        #userHome {
        flex-direction: column;
        }
}

`;
import styled from "styled-components";

        // --black: #222221
        // --gray-dark: #404040
        // --gray-middle: #6e6e6e
        // --gray-brigth: #d1d1d1
        // --white-middle: #f5f5f5
        // --white-white: #ffffff


export const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline:  1px ;

    h1 {
        color: #00FF7F;
        font-size: 42px;
    }

    h2 {
        text-align: center;
        color: #FFF5EE;
        font-size: 26px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    label {
        color: #FFF5EE;
        margin-left: 4px;
        margin-bottom: -14px;
    }

    input {
        width: 260px;
        height: 32px;
        border-radius: 7px;
        font-size: 16px;
        text-align: left;
    }

    span {
        color: #d1d1d1;
        font-size: 11px;
        margin-top: -12px;
        margin-left: 4px;
    }

    .divform-login {
        width: 300px;
        height: 430px;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        background-color: #3F3F3F;
        border-radius: 12px;
    }

    .divform-register {
        width: 300px;
        height: 600px;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        background-color: #3F3F3F;
        border-radius: 12px;
    }

    #div-title-register {
        width: 240px;
        display: flex;
        justify-content: space-between;
    }

    p {
        color: #FFF5EE;
        margin-top: -22px;
        margin-bottom: -20px;
    }

    button {
        width: 266px;
        height: 36px;  
        font-weight: 600;
        margin-top: 14px;
        background-color: #00FF7F;
        border-radius: 7px;
        border: #222221;
        font-size: 18px;
        font-weight: 400;
        color: #404040;
        }

    #out-button {
        width: 80px;
        font-size: 16px;
    }

`;
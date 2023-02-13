import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.6);

    h2 {
        color: red;
        font-size: 28px;
        margin-top: -15px;
        margin-bottom: 50px;
        text-align: center;
    }

    p {
        font-size: 18px;
    }

    #modal {
        width: 700px;
        height: 250px;
        border-radius: 8px;
        background-color: #212529;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    #div-buttons {
        width: 400px;
        display: flex;
        justify-content: space-around;
    }

    #button-cancel {
        width: 80px;
        height: 39px;
        background-color: #00FF7F !important;
        border: 1px solid #00FF7F;
        border-radius: 4px;
        color: #212529;
        font-size: 16px;
        text-align: center;
        font-weight: 600;

            :hover {
            border: 1px solid #00FF7F;
            background-color: #212529 !important;
            color: #FFFFFF;
            cursor: pointer;
        }
    }

    #button-delete {
        width: 80px;
        height: 39px;
        background-color: #FF1100 !important;
        border: 1px solid #00FF7F;
        border-radius: 4px;
        color: #FFFFFF;
        font-size: 16px;
        text-align: center;
        font-weight: 600;

            :hover {
            border: 1px solid #FF1100;
            background-color: #212529 !important;
            color: #FF1100;
            cursor: pointer;
        }
    }

`;


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
        color: #00FF7F;
        font-size: 28px;
        margin-top: 10px;
        margin-bottom: 20px;
        text-align: center;
    }

    #divAccountEdit {
        width: 386px;
        height: 520px;
        background-color: #404040;
        border-radius: 12px;
    }

    #closeModal {
        border-radius: 8px;
        margin-left: 86%;
        margin-top: 4px;
        font-size: 14px;
        font-weight: 800;
        background-color: transparent !important;
        color: inherit;
        cursor: pointer;
    }

    form {
        height: 420px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    label {
        margin-left: 22px;
        margin-bottom: -14px;
        color: #f5f5f5;
    }
    
    input {
        width: 90%;
        height: 38px;
        background-color: #343B41;
        border: 1px solid #F8F9FA;
        border-radius: 8px;
        margin-left: 18px;
        color: #f5f5f5;
        padding-left: 5px;
        padding-right: -5px;
    }

    span {
        font-size: 12px;
        margin-top: -12px;
        margin-left: 20px;
    }

    #save-button {
        width: 80px;
        height: 39px;
        background-color: #00FF7F !important;
        border: 1px solid #00FF7F;
        border-radius: 4px;
        color: #212529;
        font-size: 13px;
        text-align: center;
        font-weight: 500;
        margin-left: 40%;

            :hover {
            border: 1px solid #00FF7F;
            background-color: #212529 !important;
            color: #FFFFFF;
            cursor: pointer;
        }
    }

`;


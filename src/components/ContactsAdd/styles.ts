import styled from "styled-components";

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed; 
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);

   #divContactsRegister {
    width: 296px;
    height: 420px;
    background-color: #212529;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 8px;

    h2 {
        color: #00FF7F;
        font-size: 28px;
        margin-top: 10px;
        margin-bottom: 20px;
        text-align: center;
    }

    #closeModal {
        border-radius: 8px;
        margin-left: 88%;
        margin-top: -4px;
        font-size: 14px;
        font-weight: 800;
        background-color: transparent !important;
        color: inherit;
        cursor: pointer;
    }

    form {
        width: 85%;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    label {
        margin-left: 5px;
        color: #f5f5f5;
        font-size: 12px;
    }
    
    span{
        width: 90%;
        text-align: left;
        padding-bottom: 10px;
        font-size: 10px;
        color: #868E96;
        margin-left: 5px;
    }
    
    .errors{
        color: #E83F5B;
    }
   }

   #contact-button {
        width: 100px;
        height: 39px;
        background-color: #00FF7F !important;
        border: 1px solid #00FF7F;
        border-radius: 4px;
        color: #212529;
        font-size: 13px;
        text-align: center;
        font-weight: 500;
        margin-top: 8px;
        margin-left: 30%;

            :hover {
            border: 1px solid #00FF7F;
            background-color: #212529 !important;
            color: #FFFFFF;
            cursor: pointer;
        }
    }

`;
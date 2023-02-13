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

    h2 {
        color: #00FF7F;
        font-size: 26px;
        margin-top: 8px;
        margin-bottom: 16px;
        text-align: center;
    }

   #divContactRegister {
    width: 296px;
    height: 380px;
    background-color: #212529;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 8px;

    #closeModal {
        font-size: 14px;
        font-weight: 600;
        width: 93%;
        background-color: transparent;
        border: none;
        color: inherit;
        text-align: right;
    }

    #divButtons {
        width: 95%;
        display: flex;
        justify-content: space-around;
        margin-top: 6px;
    }

    #edit {
        width: 140px;
        border: 1px solid #00FF7F;
        background-color: #00FF7F;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #trash {
        width: 60px;
        border: 1px solid #868E96;
        background-color: #868E96;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    form {
        width: 85%;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-top: -5px;
    }

    label {
        width: 90%;
        text-align: left;
        font-size: 10px;
        color: #F8F9FA;
        margin-left: 5px;
    }

    span{
        width: 90%;
        text-align: left;
        margin-left: 10px;
        font-size: 10px;
        color: #868E96;
    }
    
    .errors{
        color: #E83F5B;
    }
   }

`;
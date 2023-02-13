import styled from "styled-components";



export const List = styled.div`
    width: 100%;
    height: 400px;
    background-color: #212529;
    border: #FEFEFE;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    border-radius: 8px;
    overflow-y: scroll;
    margin-bottom: 25px;

    #listHeader {
      width: 95%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 5px;

      button {
        width: 100px;
        height: 40px;
      }

    }

    #emptyList {
        padding: 30px;
    }

    #listCard {
      margin-top: 20px;
    }

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
      background: var(--color-text-light);
      margin: 1rem;
      border-radius: 1.6rem;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--color-primary-dark);
      border-radius: 1.6rem;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: var(--color-primary);
    }
`;

export const Contact = styled.div`
    min-width: 21%;
    height: 100px;
    background-color: black;
    border: 1px solid  #808080;
    list-style: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    text-align: left;

    p {
      font-size: 12px;
    }

    #divCard{
        width: 95%;
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-top: -2px;
        padding: 5px;
        
    }

    p {
      margin: auto;
    }

    button {
      width: 28px;
      height: 28px;
      margin-left: 15px;
    }

    :hover {
      background-color: #343B41;
    }

`;
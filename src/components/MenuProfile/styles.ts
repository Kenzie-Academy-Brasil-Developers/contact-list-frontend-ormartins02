import styled from "styled-components";

export const Section = styled.section`
    position: fixed;
    display: flex;
    background-color: black;
    border-radius: 8px;
    background-color: rgba(0,0,0,0.0);
    width: 100%;
    height: 100%;
    
    #ulMenu {
        list-style: none;
        position: fixed;
        width: 90px;
        height: 100px;
        top: 23%;
        left: 70%;
        margin-top: 8px;
        margin-right: 4px;
        border-radius: 8px;
        background-color: rgba(0,0,0,0.8);

        li {
            margin-top: 8px;
            margin-left: 5px;
        }

        hr {
            margin-top: 6px;
            border: none;
        }

        button {
            border-radius: 4px;
            margin-bottom: 2px;
            background-color: #00FF7F;
            cursor: pointer;

            :hover {
                background-color: #222221;
                color: #ffffff;
            }

        }

        #del {
            :hover {
                background-color: red;
                color: #ffffff;
                }
        }
    }
`;
import styled from "styled-components";
import {ContainerBlock} from "../main/Main.tsx";
import {HeadingH2} from "../universal/HeadingH2.tsx";


export const Contacts = () => {
    return (
        <ContactsBlock>
            <ContainerBlock className={'blockContainer'}>
                <HeadingH2 marginBottom={'50px'} text={'КОНТАКТЫ'}/>
                <form action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea >
                    </textarea>
                </form>
                <button>НАНЯТЬ МЕНЯ</button>
            </ContainerBlock>
        </ContactsBlock>
    );
};

const ContactsBlock = styled.div`
  background-color: #e9f9ff;
  padding: 30px 0;
  
  
  .blockContainer {
    flex-direction: column;
    & form {
      
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      @media (max-width: 900px) {
        width: 70%;
      }
      @media (max-width: 700px) {
        width: 90%;
      }
      & input {
        padding: 20px;
        width: 100%;
        height: 60px;
        background-color: #fff;
        margin-bottom: 20px;
        font-size: 18px;
      }
      & textarea {
        height: 150px;
        resize: none;
        font-size: 18px;
      }
    }
    & button {
      width: 220px;
      height: 60px;
      color: #fff;
      background-color: #130f49;
      border: 1.5px solid #130f49;
      border-radius: 4px;
      padding: 9px 40px;
    }
  }

`

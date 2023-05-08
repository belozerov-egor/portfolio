import styled from "styled-components";
import {ContainerBlock} from "../main/Main.tsx";


export const Contacts = () => {
    return (
        <ContactsBlock>
            <ContainerBlock className={'blockContainer'}>
                <h2>КОНТАКТЫ </h2>
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
  min-height: 100vh;
  background-color: rebeccapurple;

  .blockContainer {
    flex-direction: column;

    & h2 {
      background-color: blanchedalmond;
      margin-bottom: 50px;
    }
    & form {
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;
    }
    & button {
      width: 120px;
      height: 40px;
    }
  }

`

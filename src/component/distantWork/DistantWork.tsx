import styled from "styled-components";
import {ContainerBlock} from "../main/Main.tsx";


export const DistantWork = () => {
    return (
        <MyWorksBlock>
            <ContainerBlock className={'blockContainer'}>
                <h2>Рассматриваю варианты удаленной работы </h2>
                    <button>НАНЯТЬ МЕНЯ</button>
            </ContainerBlock>
        </MyWorksBlock>
    );
};

const MyWorksBlock = styled.div`
  min-height: 250px;
  background-color: cornflowerblue;

  .blockContainer {
    flex-direction: column;

    & h2 {
      background-color: blanchedalmond;
      margin-bottom: 50px;
    }
    & button {
      width: 120px;
      height: 40px;
    }
  }

`

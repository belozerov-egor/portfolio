import styled from "styled-components";
import {ContainerBlock} from "../main/Main.tsx";


export const DistantWork = () => {
    return (
        <DistantWorkBlock>
            <ContainerBlock className={'blockContainer'}>
                <h2>РАССМАТРИВАЮ ВАРИАНТЫ УДАЛЕННЫЙ РАБОТЫ </h2>
                    <button>НАНЯТЬ МЕНЯ</button>
            </ContainerBlock>
        </DistantWorkBlock>
    );
};

const DistantWorkBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

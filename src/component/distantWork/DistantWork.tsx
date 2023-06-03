import styled from "styled-components";
import {ContainerBlock} from "../main/Main.tsx";
import {HeadingH2} from "../universal/HeadingH2.tsx";


export const DistantWork = () => {
    return (
        <DistantWorkBlock>
            <ContainerBlock className={'blockContainer'}>
                <HeadingH2 marginBottom={'50px'} text={'РАССМАТРИВАЮ ВАРИАНТЫ УДАЛЕННЫЙ РАБОТЫ '}/>
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

  .blockContainer {
    flex-direction: column;
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

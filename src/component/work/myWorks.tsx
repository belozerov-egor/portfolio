import styled from "styled-components";
import {ContainerBlock} from "../main/Main.tsx";
import {Works} from "./Works.tsx";


export const MyWorks = () => {
    return (
        <MyWorksBlock>
            <ContainerBlock className={'blockContainer'}>
                <h2>МОИ РАБОТЫ</h2>
                <div className={'worksBlock'}>
                    <Works name={'First Project'} description={'это мой первый проект бла бла бла'}/>
                    <Works name={'Second Project'} description={'это мой второй проект бла бла бла'}/>
                </div>
            </ContainerBlock>
        </MyWorksBlock>
    );
};

const MyWorksBlock = styled.div`
  padding-top: 30px;
  min-height: 100vh;
  background-color: red;

  .blockContainer {
    flex-direction: column;

    & h2 {
      background-color: blanchedalmond;
      margin-bottom: 50px;
    }

    .worksBlock {
      flex-wrap: wrap;
      display: flex;
      justify-content: space-between;
      width: 100%;
      border: 1px solid blanchedalmond;
    }
  }

`

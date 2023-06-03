import styled from "styled-components";
import {ContainerBlock} from "../main/Main.tsx";
import {Works} from "./Works.tsx";
import {HeadingH2} from "../universal/HeadingH2.tsx";
import imgWorks from "./imgWorks.ts";


export const MyWorks = () => {
    return (
        <MyWorksBlock>
            <ContainerBlock className={'blockContainer'}>
                <HeadingH2 marginBottom={'50px'} text={'МОИ РАБОТЫ'}/>
                <div className={'worksBlock'}>
                    <Works img={imgWorks.socialNetwork} name={'Social Network'} description={'это мой первый проект бла бла бла'}/>
                    <Works img={imgWorks.toDo} name={'ToDo List'} description={'это мой второй проект бла бла бла'}/>
                    <Works img={imgWorks.money} name={'My Money'} description={'это мой третий проект бла бла бла'}/>
                </div>
            </ContainerBlock>
        </MyWorksBlock>
    );
};

const MyWorksBlock = styled.div`
  padding: 30px 0;
  min-height: 800px;
  border-bottom: 1px solid rgba(30, 30, 30, .2);
  .blockContainer {
    flex-direction: column;

    .worksBlock {
      flex-wrap: wrap;
      display: flex;
      justify-content: center;
      gap: 15px;
      width: 100%;
    }
  }

`

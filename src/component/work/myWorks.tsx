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
                    <Works img={imgWorks.socialNetwork} name={'Social Network'} description={'Стек: React, Redux, Typescript, Javascript, Axios, React Hook Form,React-Router-dom'}/>
                    <Works img={imgWorks.toDo} name={'ToDo List'} description={'Стек: React, Redux, Typescript, Javascript, Formik,MUI,Axios, React-Router-dom'}/>
                    <Works img={imgWorks.money2} name={'My Money'} description={'это мой третий проект бла бла бла'}/>
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

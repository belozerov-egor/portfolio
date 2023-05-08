import styled from "styled-components";
import {Skill} from "./Skill.tsx";
import {ContainerBlock} from "../main/Main.tsx";



export const Skills = () => {
    return (
        <SkillsBlock>
            <ContainerBlock className={'blockContainer'}>
                <h2>МОИ СКИЛЛЫ</h2>
                <div className={'skills'}>
                    <Skill title={'JS'} description={'jdsfjsdfjsdjkfs djfhwefwefbhrbfherfbherf'}/>
                    <Skill title={'HTML & CSS'} description={"asdasdas dasdasdasdasdasdasdasdasdasdasdasd "}/>
                    <Skill title={'REACT'} description={'jdsfjsdfjsdjkf sdjfhwefwefbhrbfherfbherf'}/>
                </div>
            </ContainerBlock>
        </SkillsBlock>
    );
};

const SkillsBlock = styled.div`
  padding-top: 30px;
  min-height: 100vh;
  background-color: violet;
  
  
    & h2 {
      background-color: blanchedalmond;
      margin-bottom: 50px;
    }
    .blockContainer{
      flex-direction: column;
    .skills {
      flex-wrap: wrap;
      display: flex;
      justify-content: space-between;
      width: 100%;
      border: 1px solid blanchedalmond;
      
    }
  }

`

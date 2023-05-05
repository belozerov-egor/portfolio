import styled from "styled-components";
import {Skill} from "./Skill.tsx";
import {ContainerBlock} from "../main/Main.tsx";



export const Skills = () => {
    return (
        <SkillsBlock>
            <ContainerBlock>
                <h2>MY SKILLS</h2>
                <div className={'skills'}>
                    <Skill title={'JS'} description={'jdsfjsdfjsdjkfs djfhwefwefbhrbfherfbherf'}/>
                    <Skill title={'HTML & CSS'} description={"asdasdas dasdasdasdasdasdasdasdasdasdasdasd"}/>
                    <Skill title={'REACT'} description={'jdsfjsdfjsdjkf sdjfhwefwefbhrbfherfbherf'}/>
                </div>
            </ContainerBlock>
        </SkillsBlock>
    );
};

const SkillsBlock = styled.div`
  height: 100vh;
  background-color: violet;
  
    & h2 {
      background-color: blanchedalmond;
    }

    .skills {
      flex-wrap: wrap;
      display: flex;
      justify-content: space-between;
      width: 100%;
      border: 1px solid blanchedalmond;

    }
  }

`

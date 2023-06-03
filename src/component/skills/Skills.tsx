import styled from "styled-components";
import {Skill} from "./Skill.tsx";
import {ContainerBlock} from "../main/Main.tsx";
import {HeadingH2} from "../universal/HeadingH2.tsx";
import imgSkills from "./imgSkills.ts";


export const Skills = () => {
    return (
        <SkillsBlock>
            <ContainerBlock className={'blockContainer'}>
                <HeadingH2 marginBottom={'100px'} text={'МОИ СКИЛЛЫ'}/>
                <div className={'skills'}>

                    <Skill img={imgSkills.jsIcon} title={'JS'}
                           description={'jdsfjsdfjsdjkfs djfhwefwefbhrbfherfbherf'}/>
                    <Skill img={imgSkills.tsIcon} title={'TYPESCRIPT'}
                           description={'jdsfjsdfjsdjkf sdjfhwefwefbhrbfherfbherf'}/>
                    <Skill img={imgSkills.reactIcon} title={'REACT'}
                           description={'jdsfjsdfjsdjkf sdjfhwefwefbhrbfherfbherf'}/>
                    <Skill img={imgSkills.reduxIcon} title={'REDUX & TOOLKIT'}
                           description={'jdsfjsdfjsdjkf sdjfhwefwefbhrbfherfbherf'}/>
                    <Skill img={imgSkills.mobX} title={'MOBX'}
                           description={'jdsfjsdfjsdjkf sdjfhwefwefbhrbfherfbherf'}/>
                    <Skill img={imgSkills.htmlIcon} title={'HTML'}
                           description={"asdasdas dasdasdasdasdasdasdasdasdasdasdasd "}/>
                    <Skill img={imgSkills.cssIcon} title={'CSS'}
                           description={"asdasdas dasdasdasdasdasdasdasdasdasdasdasd "}/>
                    <Skill img={imgSkills.postman} title={'POSTMAN'}
                           description={'jdsfjsdfjsdjkf sdjfhwefwefbhrbfherfbherf'}/>
                    <Skill img={imgSkills.swagger} title={'SWAGGER'}
                           description={'jdsfjsdfjsdjkf sdjfhwefwefbhrbfherfbherf'}/>
                    <Skill img={imgSkills.git} title={'GIT'} description={'jdsfjsdfjsdjkf sdjfhwefwefbhrbfherfbherf'}/>
                    <Skill img={imgSkills.figma} title={'FIGMA'}
                           description={'jdsfjsdfjsdjkf sdjfhwefwefbhrbfherfbherf'}/>
                    <Skill img={imgSkills.maUi} title={'MATERIAL UI'}
                           description={'jdsfjsdfjsdjkf sdjfhwefwefbhrbfherfbherf'}/>
                </div>
            </ContainerBlock>
        </SkillsBlock>
    );
};

const SkillsBlock = styled.div`
  padding: 30px 0;
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(30, 30, 30, .2);

  .blockContainer {
    flex-direction: column;


    .skills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      width: 100%;

    }
  }

`

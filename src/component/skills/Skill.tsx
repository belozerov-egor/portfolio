import styled from "styled-components";
import {FC} from "react";


type PropsType = {
    title:string
    description: string
}

export const Skill: FC<PropsType>= ({title,description}) => {
    return (
        <SkillBlock>
            <div></div>
            <h3>{title}</h3>
            <span>{description}</span>
        </SkillBlock>
    );

};


const SkillBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 250px;
  min-height: 250px;
  background-color: cadetblue;


  & div {
    width: 60px;
    height: 60px;
    background-color: aqua;
  }
  
`

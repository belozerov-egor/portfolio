import styled from "styled-components";
import {FC} from "react";


type PropsType = {
    title:string
    description: string
    img?: string
}

export const Skill: FC<PropsType>= ({title,description, img}) => {
    return (
        <SkillBlock>
            <div>
                <img src={img} alt=""/>
                <h3>{title}</h3>
                <span>{description}</span>
            </div>
        </SkillBlock>
    );

};


const SkillBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 400px;
  min-height: 300px;
  padding: 0 20px 0 20px;
  border: 1px solid rgba(30, 30, 30, .2);
  border-radius: 4px;
  box-shadow: 30px 40px 80px #e4edf5;

  & div {
    width: 100%;
    padding: 32px 40px 55px;
    border-radius: 4px;

    & img {
      margin-bottom: 20px;
    }

    & h3 {
      font-size: 25px;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 10px;
    }

    & span {
      color: #55527c;
      font-size: 18px;
      line-height: 32px;
    }
  }

`

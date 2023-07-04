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
  width: 450px;
  height: 410px;
  padding: 0 20px 0 20px;
  border: 1px solid rgba(30, 30, 30, .2);
  border-radius: 4px;
  box-shadow: 30px 40px 80px #e4edf5;

  & div {
    width: 100%;
    padding: 32px 20px 55px;
    border-radius: 4px;

    & img {
      @media (max-width: 500px) {
        width: 60px;
        height: 60px;
      }
      margin-bottom: 20px;
    }

    & h3 {
      font-size: 25px;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 10px;
      @media (max-width: 500px){
        font-size: 20px;
      }
    }

    & span {
      color: #55527c;
      font-size: 18px;
      line-height: 32px;
      @media (max-width: 500px){
        font-size: 15px;
    }
  }

`

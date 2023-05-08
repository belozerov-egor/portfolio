import styled from "styled-components";
import {FC} from "react";


type PropsType = {
    name:string
    description: string
}

export const Works: FC<PropsType>= ({name, description }) => {
    return (
        <WorksBlock>
            <div className={'topBlock'}>
                <a href="#">
                    Смотреть
                </a>
            </div>
            <div className={'bottomBlock'}>
                <p>{name}</p>
                <p>{description}</p>
            </div>
        </WorksBlock>
    );

};


const WorksBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 450px;
  min-height: 250px;
  background-color: cadetblue;


  .topBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 150px;
    background-color: brown;
    
    & a {
      background-color: gold;
      width: 90px;
      height: 50px;
      padding: 15px;
    }
  }
  .bottomBlock {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
  
`

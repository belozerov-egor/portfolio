import styled from "styled-components";
import {FC} from "react";


type PropsType = {
    name:string
    description: string
    img: string
}

export const Works: FC<PropsType>= ({img,name, description }) => {
    return (
        <WorksBlock>
            <div className={'topBlock'}>
                <img src={img} alt=""/>
                <div>
                    <a href="#">
                        Смотреть
                    </a>
                </div>

            </div>
            <div className={'bottomBlock'}>
                <h3>{name}</h3>
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
  flex-grow: 1;
  max-width: 550px;
  height: 680px;
  background-color: cadetblue;
  border: 1px solid rgba(30, 30, 30, .2);
  


  .topBlock {
    position: relative;
    width: 100%;
    height: 70%;
    background-color: white;
    
    
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover
    }
    
    & div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #130f49;
      border: 1.5px solid #130f49;
      border-radius: 4px;
      width: 100px;
      height: 40px;
      padding-top: 10px;
      & a {
        color: #f3f9ff;
      }
    }
  }
  .bottomBlock {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    & h3{
      font-size: 25px;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 10px;
    }
    & p {
      max-width: 60%;
      font-size: 20px;
      
    }
  }
  
`

import styled from "styled-components";
import {ContainerBlock} from "../main/Main.tsx";



export const Footer = () => {
    return (
        <FooterBlock>
            <ContainerBlock className={'blockContainer'}>
                <h2>БЕЛОЗЕРОВ ЕГОР</h2>
                <div className={'socialBlock'}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
                <p>2023 все права защищены</p>
            </ContainerBlock>
        </FooterBlock>
    );
};

const FooterBlock = styled.div`
  padding-top: 30px;
  min-height: 150px;
  background-color: violet;
    .blockContainer{
      flex-direction: column;
      & h2 {
        background-color: blanchedalmond;
        margin-bottom: 50px;
      }
      .socialBlock {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 50%;
        min-height: 50px;
        border: 1px solid blanchedalmond;
        margin-bottom: 50px;
        & div{
          width: 90px;
          background-color: wheat;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      }
  }

`

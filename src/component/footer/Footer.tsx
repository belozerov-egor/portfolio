import styled from "styled-components";
import {ContainerBlock} from "../main/Main.tsx";
import {HeadingH2} from "../universal/HeadingH2.tsx";
import {SocialCard} from "./SocialCard.tsx";
import telegram  from "../../img/telegram.svg"
import linkedin  from "../../img/linkedin.svg"
import whatsapp  from "../../img/whatsapp.svg"



export const Footer = () => {
    return (
        <FooterBlock>
            <ContainerBlock className={'blockContainer'}>
                <HeadingH2 marginBottom={'50px'} text={'БЕЛОЗЕРОВ ЕГОР'}/>
                <div className={'socialBlock'}>
                    <SocialCard img={telegram}/>
                    <SocialCard img={linkedin}/>
                    <SocialCard img={whatsapp}/>
                </div>
                <p>2023 все права защищены</p>
            </ContainerBlock>
        </FooterBlock>
    );
};

const FooterBlock = styled.div`
  padding: 30px 0;
  min-height: 150px;
  background-color: #e9f9ff;
  
    .blockContainer{
      flex-direction: column;
      .socialBlock {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 50%;
        min-height: 50px;
        margin-bottom: 50px;
        & div{
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      }
  }

`

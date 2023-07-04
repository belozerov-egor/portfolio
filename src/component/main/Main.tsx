import styled from "styled-components";
import photo from "../../img/grey.png";

export const Main = () => {
    return (
        <MainBlock>
            <ContainerBlock className={"contentBlock"}>
                <div className={"text"}>
                    <span>Всем привет!</span>
                    <h1>Меня зовут Белозеров Егор</h1>
                    <p>Я frontend разработчик</p>
                </div>
                <div className={"photo"}>
                    <img src={photo} alt="photo" />
                </div>
            </ContainerBlock>
        </MainBlock>
    );
};

const MainBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: black;
  font-size: 50px;

.contentBlock {
  @media (max-width: 1150px){
    flex-direction: column-reverse;
  }
  .text {
    width: 50%;
    font-family: "Inter", sans-serif;
    font-weight: 800;
    color: white;
    @media (max-width: 1550px) {
      font-size: 40px;
      width: 30%;
    }
    @media (max-width: 1250px) {
      font-size: 30px;
    }
    @media (max-width: 1150px) {
      width: 100%;
    }
    @media (max-width: 480px){
      font-size: 20px;
    }

    h1 {
      padding: 5px 0;
      line-height: 80px;
      @media (max-width: 1250px) {
        line-height: 55px;
      }
      @media (max-width: 480px){
        line-height: 35px;
      }
    }
  }

  .photo {
    width:30%;
      @media (max-width: 1470px) {
        width: 50%;
      }
      @media (max-width: 1224px){
        width: 70%;
      }
       @media (max-width: 824px){
        width: 100%;
      }

    img {
      width: 100%;
      @media (max-width: 1250px) {
        width: 100%;
      }
    }
  }

}
 
`;

export const ContainerBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  width: 80%;
  margin: 0 auto;
`;

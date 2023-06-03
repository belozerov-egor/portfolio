import styled from "styled-components";
import photo from "../../img/2.png"

export const Main = () => {
    return (
        <MainBlock>
            <ContainerBlock className={'contentBlock'}>
                <div className={'text'}>
                    <span>Всем привет!</span>
                    <h1>Меня зовут Белозеров Егор</h1>
                    <p>Я frontend разработчик</p>

                </div>
                <div className={'photo'}><img src={photo} alt="photo"/></div>
            </ContainerBlock>
        </MainBlock>

    )
        ;
};


const MainBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: black;

  .text {
    width: 50%;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 50px;
    line-height: 80px;
    color: white;
  }

  .contentBlock {
    justify-content: center;
    padding: 0 50px;
  }

`
export const ContainerBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  width: 80%;
  margin: 0 auto;
`
import styled from "styled-components";


export const Main = () => {
    return (
        <MainBlock>
            <ContainerBlock className={'contentBlock'}>
                <div className={'text'}>
                    <span>Hi there</span>
                    <h1>I am Egor Belozerov</h1>
                    <p>frontend developer</p>
                </div>
                <div className={'photo'}></div>
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
  background-color: #e05b2c;
  
  .text {
    width: 300px;
    background-color: lightgreen;
  }

  .photo {
    width: 300px;
    height: 400px;
    background-color: lightgreen;
  }
  .contentBlock{
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
  border: 1px solid seashell;
`
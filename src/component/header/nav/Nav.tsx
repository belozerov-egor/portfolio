import styled from "styled-components";
import React from "react";

export const Nav: React.FC = () => {
    return (
        <NavBlock>
          <div>
              <a href="">Главная</a>
              <a href="">Скиллы</a>
              <a href="">Проекты</a>
              <a href="">Контакты</a>
          </div>
        </NavBlock>

    );
};



const NavBlock = styled.div`
  border: 1px solid violet;
  & div {
    display: flex;
    justify-content: space-between;
    width: 300px;
  }
`
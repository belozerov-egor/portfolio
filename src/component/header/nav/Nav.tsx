import styled from "styled-components";
import React from "react";

export const Nav: React.FC = () => {
    return (
        <NavBlock>
              <a href="">Главная</a>
              <a href="">Скиллы</a>
              <a href="">Проекты</a>
              <a href="">Контакты</a>
        </NavBlock>

    );
};



const NavBlock = styled.div`
    display: flex;
    color: #A5A6FF;
    font-size: 18px;
  & a:not(:last-child){
    margin-right: 50px;
  }
`

import styled from "styled-components";
import React from "react";
import {Nav} from "./nav/Nav.tsx";

export const Header: React.FC = () => {
    return (
        <HeaderBlock>
          <Nav/>
        </HeaderBlock>

    );
};



const HeaderBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 80px;
  background-color: rgba(91, 185, 109, 0.96);
`
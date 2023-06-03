import styled from "styled-components";
import {FC} from "react";


type PropsType = {
    img: string
}
export const SocialCard: FC<PropsType> = ({img}) => {
    return (
        <SocialCardStyle>
            <img src={img} alt=""/>
        </SocialCardStyle>
    );
};


const SocialCardStyle = styled.div`
`


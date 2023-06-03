import  {FC} from 'react';
import styled from "styled-components";


type PropsType= {
    text: string,
    marginBottom?: string
}
export const HeadingH2: FC<PropsType> = ({text, ...style}) => {
    return (
        <HeadingSk marginBottom={style.marginBottom}>
            {text}
        </HeadingSk>
    );
};
type PropsStyleType = {
    marginBottom?: string
}

const HeadingSk = styled.h2<PropsStyleType>`
  font-size: 35px;
  font-weight: 800;
  margin-bottom: ${({marginBottom})=>marginBottom};
    
`

import './App.css'
import {Header} from "./component/header/Header.tsx";
import {Main} from "./component/main/Main.tsx";
import {Skills} from "./component/skills/Skills.tsx";
import {MyWorks} from "./component/work/myWorks.tsx";
import {DistantWork} from "./component/distantWork/DistantWork.tsx";
import {Contacts} from "./component/contacts/Contacts.tsx";
import {Footer} from "./component/footer/Footer.tsx";
import styled from "styled-components";


function App() {


    return (
        <AppBlock>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <DistantWork/>
            <Contacts/>
            <Footer/>
        </AppBlock>
    )
}

export default App

const AppBlock = styled.div`

`

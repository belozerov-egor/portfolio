import './App.css'
import {Header} from "./component/header/Header.tsx";
import {Main} from "./component/main/Main.tsx";
import {Skills} from "./component/skills/Skills.tsx";
import {MyWorks} from "./component/work/myWorks.tsx";
import {DistantWork} from "./component/distantWork/DistantWork.tsx";


function App() {


    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <DistantWork/>
        </div>
    )
}

export default App

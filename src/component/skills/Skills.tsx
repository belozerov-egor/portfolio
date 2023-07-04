import styled from "styled-components";
import {Skill} from "./Skill.tsx";
import {ContainerBlock} from "../main/Main.tsx";
import {HeadingH2} from "../universal/HeadingH2.tsx";
import imgSkills from "./imgSkills.ts";


export const Skills = () => {
    return (
        <SkillsBlock>
            <ContainerBlock className={'blockContainer'}>
                <HeadingH2 marginBottom={'100px'} text={'МОИ СКИЛЛЫ'}/>
                <div className={'skills'}>

                    <Skill img={imgSkills.jsIcon} title={'JS'}
                           description={'Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.'}/>
                    <Skill img={imgSkills.tsIcon} title={'TYPESCRIPT'}
                           description={'Язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.'}/>
                    <Skill img={imgSkills.reactIcon} title={'REACT'}
                           description={'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Может использоваться для разработки одностраничных и мобильных приложений.'}/>
                    <Skill img={imgSkills.vue} title={'VUE'}
                           description={'Это прогрессивный JavaScript-фреймворк для создания пользовательских интерфейсов (UI) и одностраничных приложений (SPA).'}/>
                    <Skill img={imgSkills.reduxIcon} title={'REDUX & TOOLKIT'}
                           description={'Библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения.'}/>
                    <Skill img={imgSkills.mobX} title={'MOBX'}
                           description={'Это библиотека для управления состоянием приложения в React-приложениях и других JavaScript-приложениях. Она позволяет легко создавать реактивные модели данных, которые автоматически обновляются, когда изменяются их зависимости'}/>
                    <Skill img={imgSkills.htmlIcon} title={'HTML'}
                           description={"Стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере."}/>
                    <Skill img={imgSkills.cssIcon} title={'CSS'}
                           description={"Формальный язык описания внешнего вида документа, написанного с использованием языка разметки."}/>
                    <Skill img={imgSkills.sass} title={'SASS'}
                           description={"Метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей."}/>
                    <Skill img={imgSkills.postman} title={'POSTMAN'}
                           description={'Платформа API, позволяющая разработчикам проектировать, создавать, тестировать и повторять свои API.'}/>
                    <Skill img={imgSkills.storybook} title={'STORYBOOK'}
                           description={'Библиотека UI, которую можно использовать для документирования компонентов. Также она позволяет упорядочивать и собирать компоненты.'}/>
                    <Skill img={imgSkills.swagger} title={'SWAGGER'}
                           description={'Это набор инструментов для описания, создания, документирования и использования веб-сервисов RESTful API. Swagger позволяет разработчикам и командам разработки создавать и поддерживать документацию для API.'}/>
                    <Skill img={imgSkills.test} title={'Unit Testing'}
                           description={'Процесс в программировании, позволяющий проверить на корректность отдельные модули исходного кода программы.'}/>
                    <Skill img={imgSkills.git} title={'GIT'}
                     description={'Бесплатная распределенная система управления версиями с открытым исходным кодом, предназначенная для быстрой и эффективной обработки любых проектов.'}/>
                    <Skill img={imgSkills.figma} title={'FIGMA'}
                           description={'Это графический редактор и инструмент для дизайна интерфейсов и прототипирования, который работает в облаке и позволяет командам разработки создавать, редактировать и обмениваться дизайн-файлами в режиме реального времени.'}/>
                    <Skill img={imgSkills.maUi} title={'MATERIAL UI'}
                           description={'Фрэймворк, предоставляющий готовые google решения для быстрой и довольно простой web разработки.'}/>
                </div>
            </ContainerBlock>
        </SkillsBlock>
    );
};

const SkillsBlock = styled.div`
  padding: 30px 0;
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(30, 30, 30, .2);

  .blockContainer {
    flex-direction: column;


    .skills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      width: 100%;

    }
  }

`

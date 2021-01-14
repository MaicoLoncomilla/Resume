import React from 'react';
import { arrayProjects } from '../utils/array';
import Projects from './Projects';
import sContainer from '../styles/container.module.css'
import { useSelector } from 'react-redux';
export default function SectionProjects(){

    const active = useSelector(state => state.active)
    return (
        <section className={sContainer.containerSectionMain} id="section-projects">
            {arrayProjects && arrayProjects.map((el, index) => 
                <Projects
                    key={index}
                    direction={el.direction}
                    title={el.title}
                    description={active ? el.descriptionEs : el.descriptionEn}
                    front={el.front}
                    back={el.back}
                    database={el.database}
                    link={el.link}
                    image={el.image}
                    linkGithub={el.linkGithub}
                />
            )}
        </section>
    )
}
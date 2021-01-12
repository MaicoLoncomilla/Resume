import React from 'react';
import { arrayProjects } from '../utils/array';
import Projects from './Projects';
import sContainer from '../styles/container.module.css'

export default function SectionProjects(){

    return (
        <section className={sContainer.containerSectionMain}>
            {arrayProjects && arrayProjects.map(el =>
                <Projects
                    direction={el.direction}
                    title={el.title}
                    description={el.description}
                    front={el.front}
                    back={el.back}
                    database={el.database}
                    link={el.link}
                    image={el.image}
                />
            )}
        </section>
    )
}
import React from 'react';
import Projects from './Projects';

export default function SectionProjects(){
    return (
        <section>
            <Projects
                direction={"row"}
                title={"Wultur"}
                description={"This is a student project we made as part of our education at Henry"}
                front={"React Js, Redux, CSS (vanilla)"}
                back={"Node Js, Express, Passport, Sequelize"}
                database={"PostgreSQL"}
            />
            <Projects
                direction={"row-reverse"}
                title={"Wultur"}
                description={"This is a student project we made as part of our education at Henry"}
                front={"React Js, Redux, CSS (vanilla)"}
                back={"Node Js, Express, Passport, Sequelize"}
                database={"PostgreSQL"}
            />
            <Projects
                direction={"row"}
                title={"Wultur"}
                description={"This is a student project we made as part of our education at Henry"}
                front={"React Js, Redux, CSS (vanilla)"}
                back={"Node Js, Express, Passport, Sequelize"}
                database={"PostgreSQL"}
            />
            <Projects
                direction={"row-reverse"}
                title={"Wultur"}
                description={"This is a student project we made as part of our education at Henry"}
                front={"React Js, Redux, CSS (vanilla)"}
                back={"Node Js, Express, Passport, Sequelize"}
                database={"PostgreSQL"}
            />
        </section>
    )
}
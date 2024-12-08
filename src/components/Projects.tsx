import React from 'react'
import Heading from './Heading';
import Card from './Card';


const data =[
    {
        id:0,
        title: "Digital Clock",
        desc: "A Python project based on clock which has timer for study session",
        img:"/project_1.jpg",
        tags:["Python"],
    },
    {
        id:1,
        title: "To-Do List",
        desc: "A Typescript project for managing multiple tasks",
        img:"/project_2.png",
        tags:["Typecsript"],
    },
    {
        id:2,
        title: "Calculator",
        desc: "A Nextjs Calculator with custom and tailwind css",
        img:"/project_3.png",
        tags:["Nextjs", "Custom CSS", "Tailwind CSS"],
    },
    {
        id:3,
        title: "Figma Design",
        desc: "A figma design for food and coffee using Nextjs, custom css and tailwind css",
        img:"/project_4.png",
        tags:["Figma Design","Nextjs", "Custom CSS", "Tailwind CSS"],
    },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md-: grid -cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects

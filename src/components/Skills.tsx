import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-down">
            <h2 className='text-4xl md:text-5xl'data-aos="zoom-in-down">Technologies I Work with</h2>
            <p className='text-gray-500 pt-2'>I have a strong skill set in both frontend and backend development. In Python, I am proficient in handling data structures and algorithms, allowing me to write efficient and optimized code for solving complex problems. On the frontend, I work with TypeScript and Next.js, building dynamic, responsive, and scalable web applications. I am also adept at styling with CSS to ensure visually appealing user interfaces. Additionally, I possess a solid foundation in graphic design, utilizing tools like Photoshop and Adobe Illustrator to create professional and visually engaging designs. This combination of development and design skills allows me to approach projects with both technical and creative expertise.</p>
        </div>
        <div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-down">Typescript</h2>
                    <h2 data-aos="zoom-in-down">Next.js</h2>
                    <h2 data-aos="zoom-in-down">Python</h2>
                    <h2 data-aos="zoom-in-down">HTML</h2>
                </div>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-down">CSS</h2>
                    <h2 data-aos="zoom-in-down">Adobe AI</h2>
                    <h2 data-aos="zoom-in-down">Adobe Photoshop</h2>
                    <h2 data-aos="zoom-in-down">Wordpress WebSite</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

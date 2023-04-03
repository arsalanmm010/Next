import React from 'react';
import panaverseImg from '../public/assets/projects/panaverseImg.png';
import notes from '../public/assets/projects/notes.png'
import expenseImg from '../public/assets/projects/expense.png'
import quizImg from '../public/assets/projects/quiz.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Panaverse Website'
            backgroundImg={panaverseImg}
            projectUrl='/panaverse'
            tech='Next JS'
          />
          <ProjectItem
            title='Notes App'
            backgroundImg={notes}
            projectUrl='/notes'
            tech='React JS'

          />
          <ProjectItem
            title='Expense Tracker'
            backgroundImg={expenseImg}
            projectUrl='/expense'
            tech='React JS'

          />
          <ProjectItem
            title='quiz App'
            backgroundImg={quizImg}
            projectUrl='/quiz'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
import React, {useContext} from 'react';
import { globalContext } from '../../../context/GlobalContext';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const {personalProjects} = useContext(globalContext)
    return (
        <div id='projects' className='container projects'>
            <h2 className='h2'>Projects</h2>
            <div className='projects-cards-container'>
                {personalProjects?.map(project => {
                    return <ProjectCard key={project.id} project={project}/>
                })}
            </div>
        </div> 
    )
}

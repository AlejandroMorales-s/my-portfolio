import { useContext } from 'react'
import ProjectCard from '../components/home/projects/ProjectCard'
import { globalContext } from '../context/GlobalContext'

export default function Projects() {
    const {personalProjects} = useContext(globalContext)
    return (
        <div className='projects-page container'>
            <h2 className='h2'>Projects</h2>
            <div className='projects-page-container'>
                {personalProjects?.map(project => {
                    return <ProjectCard key={project.id} project={project}/>
                })}
            </div>
        </div>
    )
}

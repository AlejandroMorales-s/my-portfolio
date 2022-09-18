import {FaReact, FaSass, FaHtml5} from 'react-icons/fa'
import {SiTailwindcss, SiJavascript, SiFirebase} from 'react-icons/si'
import {IoLogoCss3, IoLogoNodejs} from 'react-icons/io'

export default function ProjectCard({project}) {
    const {name, images, description, technologies} = project.data

    return (
        <div className='project-card'>
            <div className='project-card-img-container'>
                <img src={images[0]} alt={name} />
            </div>
            <div className='project-card-info-container'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className='project-card-technologies'>
            {technologies.map(technology => {
                return (
                    <div key={technology} className={`${technology.toLowerCase() + '-project-card'} project-card-technology`}>
                        {technology.toLowerCase() ===  'react' && <FaReact className='project-card-icon'/>}
                        {technology.toLowerCase() ===  'tailwind' && <SiTailwindcss className='project-card-icon'/>}
                        {technology.toLowerCase() ===  'firebase' && <SiFirebase className='project-card-icon'/>}
                        {technology.toLowerCase() ===  'javascript' && <SiJavascript className='project-card-icon'/>}
                        {technology.toLowerCase() ===  'sass' && <FaSass className='project-card-icon'/>}
                        {technology.toLowerCase() ===  'css' && <IoLogoCss3 className='project-card-icon'/>}
                        {technology.toLowerCase() ===  'node' && <IoLogoNodejs className='project-card-icon'/>}
                        {technology.toLowerCase() ===  'html' && <FaHtml5 className='project-card-icon'/>}
                    </div>
                )
            })}
            </div>                                                                                                                                                                                       
        </div>
    )
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Loader from "../components/Loader";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../libs/firebase";
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import ProfilePhoto from '../assets/headerPhoto.png';
import DocumentTitle from "react-document-title";

export default function ProjectDetails() {
    //* State
    const [project, setProject] = useState()
    const [imagesTotal, setImagesTotal] = useState()
    const [currentImage, setCurrentImage] = useState(0)
    
    //* Query param
    const param = useParams()
    const {id} = param

    //* Get project data
    const getProject = async () => {
        const docRef = doc(database, "projects", id)
        const docSnap = await getDoc(docRef)
        return docSnap.data()
    }

    //* Previous image
    const previousImage = () => {
        if(currentImage === 0) setCurrentImage(imagesTotal)
        else setCurrentImage(currentImage - 1)
    }
    
    //* Next image
    const nextImage = () => {
        if(currentImage === imagesTotal) setCurrentImage(0)
        else setCurrentImage(currentImage + 1)
    }

    useEffect(() => {
        getProject()
        .then(data => {
            setProject(data)
            setImagesTotal(data.images.length - 1)
        })
        .catch(error => console.log(error))
    }, [])    

    return (
        <>
            <DocumentTitle title={!project ? 'Loading...' : project.name}/>
            <div className="project-details-container container">
                {!project ? 
                    <Loader/>
                :
                    <>
                        <h2 className="h2">{project.name}</h2>
                        <div className="project-images-container">
                            <div onClick={() => previousImage()} className="project-images-icons-container">
                                <AiOutlineLeft className="project-images-icon"/>
                            </div>
                            <div className="project-image-container">
                                <img src={ProfilePhoto} srcSet={project.images[currentImage]} alt={project.name} />
                            </div>
                            <div onClick={() => nextImage()} className="project-images-icons-container">
                                <AiOutlineRight className="project-images-icon"/>
                            </div>
                        </div>
                        <div className="info-container">
                            <p>{project.info}</p>
                            {project.functions && 
                                <>
                                    <h3>Funcionalidades disponibles:</h3>
                                    <ul className="functionalities-list">
                                        {project.functions.map((element, index) => {
                                            return(
                                                <li key={index}>{element}</li>
                                            )
                                        })}
                                    </ul>
                                </>
                            }
                            <div className="project-buttons-container">
                                <a href={project.repoLink} target='_blank'>
                                    <button>Repositorio</button>
                                </a>
                                <a href={project.siteLink} target='_blank'>
                                    <button >Ir al sitio</button>
                                </a>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

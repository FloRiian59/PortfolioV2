import { Link } from 'react-router-dom'
import '../css/myprojects.css'

const MyProjects = () => {
    return (
        <>
            <p className="section-project-text">Découvrez mes projets en mode jeu rétro ! <br></br>
                Plongez dans une aventure pixelisée où chaque pas vous dévoile un de mes projets.<br></br>
            </p>
            <div className="section-project-button">
                <Link to={"/explore"} className='link'>
                    <button className="button">
                        <i className="fa-solid fa-gamepad game"></i>
                        Mode Exploration
                        <div className="arrow">››</div>
                    </button>
                </Link>
                <p>Explorez mes réalisations de manière ludique !</p>
            </div>
        </>
    )
}

export default MyProjects
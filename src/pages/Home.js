import Header from '../components/Header';
import Title from '../components/Title';
import Presentation from '../components/Presentation';
import MyProjects from '../components/MyProjects';
import ProjectGallery from '../components/ProjectGallery';

const Home = () => {
    return (
        <>
            <Header />
            <Title text="À propos de moi" />
            <div className="section-presentation">
                <Presentation />
            </div>
            <Title text="Mes projets" />
            <div className="section-project-container">
                <MyProjects />
            </div>
            <Title text="Galerie" />
            <ProjectGallery />
        </>
    )
}
export default Home
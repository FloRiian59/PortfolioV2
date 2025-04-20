import AboutMe from "../components/AboutMe"
import Exploration from "../components/Exploration"
import Gallery from "../components/Gallery"
import Header from "../components/Header"
import Title from "../components/Title"
const Home = () => {
    return (
        <>
            <Header />
            <Title title="À propos de moi" />
            <AboutMe />
            <Title title="Mes projets" />
            <Exploration />
            <Title title="Galerie" />
            <Gallery />
        </>
    )
}
export default Home
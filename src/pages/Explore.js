import { useState } from "react";
import City from "../components/City"
import GameMenu from "../components/GameMenu"

const Explore = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [ambiance, setAmbiance] = useState("Jour")

    const handlePlay = () => {
        setGameStarted(true);
    };
    return (
        <>
            {!gameStarted ? (
                <GameMenu onPlay={handlePlay} setAmbiance={setAmbiance} ambiance={ambiance} />
            ) : (
                <City gameStarted={gameStarted} ambiance={ambiance} />
            )}
        </>
    )
}
export default Explore
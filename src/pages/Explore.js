import { useState } from "react";
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
                <p>test</p>
            )}
        </>
    )
}
export default Explore
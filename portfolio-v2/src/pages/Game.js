import { useState } from "react"
import GameMenu from "../components/GameMenu"
import City from "../components/City"

const Game = () => {
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
                <City gameStarted={gameStarted} setGameStarted={setGameStarted} ambiance={ambiance} />
            )}
        </>
    )
}
export default Game
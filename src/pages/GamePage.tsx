import {useParams} from 'react-router'

const GamePages = () => {
    const {gameId} = useParams();
    return (
        <main>
            <h1>Игры</h1>
            <p>{gameId}</p>
        </main>
    )
}

export default GamePages
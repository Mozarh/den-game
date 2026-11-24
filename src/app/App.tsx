import {Routes, Route} from 'react-router'
import HomePages from '../pages/HomePages'
import CollectionPage from '../pages/CollectionPage'
import DiscoverPage from '../pages/DiscoverPage'
import GamePages from '../pages/GamePage'
import Header from '../widgets/Header/Header'

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<HomePages />}/>
        <Route path='/collection' element={ <CollectionPage />}/>
        <Route path='/discover' element={<DiscoverPage />}/>
        <Route path='/games/:gameId' element={<GamePages />} />
      </Routes>
    </>
  )
}

export default App

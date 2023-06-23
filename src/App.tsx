import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main'
import Info from './pages/Info/Info'
function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/Info' element={<Info />} />
                </Routes>
            </BrowserRouter>
        </>
    )


}

export default App

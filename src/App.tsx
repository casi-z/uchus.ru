import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main'
import Methods from './pages/Methods/Methods';
import Articles from './pages/Articles/Articles';
import Programs from './pages/Programs/Programs';
import Exams from './pages/Exams/Exams';
import Awards from './pages/Awards/Awards';
import Link from './pages/Links/Links';
import Feedback from './pages/Feedback/Feedback';
import {GlobalContext} from "./context";
import Links from "./pages/Links/Links";
import Gallery from "@/pages/Gallery/Gallery";

function App() {

    return (
        <GlobalContext.Provider value={null}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/methods' element={<Methods />} />
                    <Route path='/articles' element={<Articles />} />
                    <Route path='/programs' element={<Programs />} />
                    <Route path='/exams' element={<Exams />} />
                    <Route path='/awards' element={<Awards />} />
                    <Route path='/links' element={<Links />} />
                    <Route path='/feedback' element={<Feedback />} />
                    <Route path='/gallery' element={<Gallery />} />
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    )
}

export default App

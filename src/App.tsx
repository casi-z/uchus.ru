import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main'
import Methods from './pages/Methods/Methods';
import Articles from './pages/Articles/Articles';
import Programs from './pages/Programs/Programs';
import Exams from './pages/Exams/Exams';
import Awards from './pages/Awards/Awards';
import Link from './pages/Link/Link';
import Feedback from './pages/Feedback/Feedback';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/methods' element={<Methods />} />
                <Route path='/articles' element={<Articles />} />
                <Route path='/programs' element={<Programs />} />
                <Route path='/exams' element={<Exams />} />
                <Route path='/awards' element={<Awards />} />
                <Route path='/link' element={<Link />} />
                <Route path='/feedback' element={<Feedback />} />
            </Routes>
        </BrowserRouter>
        
    )
}

export default App

import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Mathhome from './pages/mathhome';
import Englishhome from './pages/englishhome';
import englishImg from './pages/englishimg.png';
import mathImg from './pages/mathimg.png';
import FiveQuestions from './pages/englishlessons/5questions';
import MeMyself from './pages/englishlessons/memyself';
import MusicLearn from './pages/englishlessons/musiclearn';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>DINO STUDY</h1>
        <h3>Today I want to do...</h3>

        <div className="button-container">
          <div className="subject-option">
            <img src={mathImg} alt="Math" className="subject-img" />
            <button onClick={() => navigate('/mathhome')}>Math</button>
          </div>

          <div className="subject-option">
            <img src={englishImg} alt="English" className="subject-img" />
            <button onClick={() => navigate('/englishhome')}>English</button>
          </div>
        </div>
      </header>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mathhome" element={<Mathhome />} />
        <Route path="/englishhome" element={<Englishhome />} />
        <Route path="/5questions" element={<FiveQuestions />} />
        <Route path="/memyself" element={<MeMyself />} />
        <Route path="/musiclearn" element={<MusicLearn />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

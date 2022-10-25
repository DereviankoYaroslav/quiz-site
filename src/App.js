import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage';
import LessonsComponent from './components/LessonsComponent';
import PictureTestComponent from './components/PicturesTestComponent';


function App() {

  return (
    <div className="App">
      <div className='cards-in-lessons'>
      <nav className='nav'>
        <Link to='/' className='nav-item'>Homepage</Link>
        <Link to='/learning-cards' className='nav-item'>Learning Cards</Link>
        <Link to='/pictures-tests' className='nav-item'>Tests with Pictures</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/learning-cards' element={<LessonsComponent />} />
        <Route path='/pictures-tests' element={<PictureTestComponent />} />
      </Routes>
      </div>
      <nav className='footer'>
        <Link to='/' className='nav-item'>Homepage</Link>
        <Link to='/learning-cards' className='nav-item'>Learning Cards</Link>
        <Link to='/pictures-tests' className='nav-item'>Tests with Pictures</Link>
      </nav>
    </div>
  );
}

export default App;

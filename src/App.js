import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import Search from './Search';
import ViewPage from './ViewPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>

          <Route exact path='/' element={
            <>
            <div className='app__page'>
              <Sidebar />
              <RecommendedVideos />
            </div>
            </>
          } />

          <Route path='/search/:searchTerm' element={
            <div className='app__page'>
              <Sidebar />
              <Search />
            </div>
          } />

          <Route path='/watch/' element={
            <div className='app__page'>
              <Sidebar />
              <ViewPage />
            </div>
          } />

        </Routes>
      </Router>

      
    </div>
  );
}

export default App;

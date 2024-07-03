import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import ListingPage from './pages/ListingPage';
import MovieDetailPage from './pages/MovieDetailPage';

const App: React.FC = () => (
  <div className='wrapper'>
    <Router>
      <Routes>
        <Route path='/' element={<SearchPage />} />
        <Route path='/list' element={<ListingPage />} />
        <Route path='/movie/:id' element={<MovieDetailPage />} />
      </Routes>
    </Router>
  </div>
);

export default App;

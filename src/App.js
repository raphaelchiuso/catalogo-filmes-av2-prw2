import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CreateFilm from './components/CreateFilm';
import UpdateFilm from './components/UpdateFilm';
import ReadFilm from './components/ReadFilm';
import DeleteFilm from './components/DeleteFilm';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateFilm />} />
        <Route path='/update' element={<UpdateFilm />} />
        <Route path='/read/:id' element={<ReadFilm />} />
        <Route path='/delete' element={<DeleteFilm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

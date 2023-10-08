import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Store from './Components/Store';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/store' element={<Store />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;

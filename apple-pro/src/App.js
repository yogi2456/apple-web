import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Store from './Components/Store';
import Login from './Components/Login';
import Register from './Components/Register';
import Iphone15pro from './Components/Iphone15pro';
import Bagcart from './Components/Bagcart';
import Iphonebuy from './Components/Iphonebuy';
import Shophone from './Components/Shophone';
import Shophone1 from './Components/Shophone1';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/store' element={<Store />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/iphone15pro' element={<Iphone15pro />} />
        <Route path='/Bagcart' element={<Bagcart />} />
        <Route path='/iphonebuy' element={<Iphonebuy />} />
        <Route path='/shophone' element={<Shophone />} />
        <Route path='/shophone1' element={<Shophone1 />} />
      </Routes>

    </div>
  );
}

export default App;

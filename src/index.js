import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BootstrapNavbar from './components/Navbar';
import Stemplayer from './ProductPages/Stemplayer';
import GapCoat from './ProductPages/GapCoat';
import RedOctobers from './ProductPages/RedOctobers';
import DoveHoodie from './ProductPages/DoveHoodie';
import Donda from './ProductPages/Donda';
import Home from './components/Home'
import Yeezystore from './components/Yeezystore'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';



class MyRoutes extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <BootstrapNavbar />
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/store' element={<Yeezystore/>}/>
            <Route path='/stemplayer' element={<Stemplayer/>}/>
            <Route path='/gapcoat' element={<GapCoat/>}/>
            <Route path='/redoctobers' element={<RedOctobers/>}/>
            <Route path='/dovehoodie' element={<DoveHoodie/>}/>
            <Route path='/donda' element={<Donda/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
}







ReactDOM.render(
  <React.StrictMode>
    <MyRoutes/>
  </React.StrictMode>,
  document.getElementById('root')
);


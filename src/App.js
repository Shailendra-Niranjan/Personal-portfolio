import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Header from "./component/Header/Header";
import Sidebar from './component/Sidebar/Sidebar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Project from './component/Project/Project';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <div  className={`max-h-screen `}>
      <BrowserRouter>
            <Header/>
            <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

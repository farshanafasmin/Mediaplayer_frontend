import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landingpage from './pages/Landingpage';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Watchhistory from './pages/Watchhistory';



function App() {
  return (
    <>
    
    <Header/>
    
    <div className='container m-5'>

    <Routes>
      {/* it is used to navigate from one page to another */}

      <Route path='/' element={<Landingpage/>}/> 
      {/* it is used to mention the page which is to navigate */}

      <Route path='/home' element={<Home/>}/>

      <Route path='/watchhistory' element={<Watchhistory/>}/>


  

    </Routes>


      
    </div>





    <Footer/>
    
  </>

  );
}

export default App;

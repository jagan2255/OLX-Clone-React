import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Addproduct from './Components/Addproduct';
import{ 
  HashRouter,
  Route,
  Routes,} 
  from 'react-router-dom';
import Viewproduct from './Components/Viewproduct';


function App() {

  return (
    <HashRouter>
    <Routes>
      
      <Route exact path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/addproduct' element={<Addproduct/>}/>
      <Route path='/product/:id' element={<Viewproduct/>}/>

    </Routes>

  </HashRouter>
  );
}

export default App;

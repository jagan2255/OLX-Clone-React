import React from 'react';
import './Header.css';
import {Link, useNavigate} from 'react-router-dom';

function Header() {
  var name = localStorage.getItem("name")
  var token = localStorage.getItem("token")
  const history = useNavigate();

  const addproductsin=()=>{
    if(!token){
      alert("You Need to login to Add Products")
      history('/login')
    }else{
      history("/addproduct")
    }

  }


  const logout=()=>{
    // eslint-disable-next-line no-restricted-globals
    if(confirm ('Are you sure to logout')){
      localStorage.clear()
    history("/login")
    return true;
    }

  }
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand mx-4" href="/">
      <svg width="45px" height="45px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-4K4Y7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
      </a>

      <form className="lgmgng">
    <div className='d-flex'>
    <button className="btn btn-white" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
      <input className="form-control forms22 search22" type="search" placeholder="Search City, Area or location" aria-label="Search" />
      <button className="btn btn-white h22" type="submit"><i class="fa-solid fa-chevron-down"></i></button>

    </div>
    </form>

      <form className="lgmgng">
        <div className='d-flex form22'>
        <input className="form-control search22" type="search" placeholder="Find Cars, Mobiles Phones and more..." aria-label="Search"/>
      <button className="btn btn-dark" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
    
        </div>
      </form>

    
    <div className='me-3 engh'><h6><b>ENGLISH</b> <i class="fa-solid fa-chevron-down"></i></h6></div>
    
    <div ><h6><b>{localStorage.getItem("name")? <div className='d-flex'><div className='qwdfcv'>{name}</div><span  onClick={logout} className='mx-3 logout'>Logout</span></div>:<Link style={{"color":"black"}} to="/login">Login</Link>}</b></h6></div>

    <div className='me-4' >
        <button onClick={()=>{addproductsin()}} className='btnn22'>
        <i class="fa-solid fa-plus"></i> Sell
        </button>
    </div>



    </div>
  </nav>
  </div>
  )
}

export default Header
import React, { useEffect, useState } from 'react';
import './Contents.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiurl } from './Context/Context';



function Contents() {
  const history = useNavigate();
  const [data , setData]= useState([]);

  const redirecttp=(itm)=>{
    localStorage.setItem("productis" , itm)
    history(`/product/${itm}`)
  }

  useEffect(()=>{
    axios.get(`${apiurl}/getdetails`).then((data)=>{
      console.log(data.data)
      setData(data.data)
    })
  },[])

  return (
    <div>
        <div className='p-5 data'>
        <h4>Fresh recommendations</h4>
       
        <div className='pt-3'>
            <div className='row'>

    {data.map((itm,k)=>
                <div  className='col col-md-4 col-sm-6 col-lg-3 mb-5'>
                <div onClick={()=>{redirecttp(itm._id)}} class="card qazqaz" style={{"width": "18rem"}}>
                   <img src={itm.imageurl} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h4 class="card-title mb-3">₹ {itm.price}</h4>
                    <p class="card-text p2">{itm.model}</p>
                    <p class="card-text p2">{itm.productname}</p>

                    <div className='d-flex flex22 justify-content-between'>
                        <p className='p2'>{itm.place}</p>
                        <p className='p2'>{itm.date}</p>
                      </div>                 
                    </div>
                  </div>
                </div>
    )}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contents
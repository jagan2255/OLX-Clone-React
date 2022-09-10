import React, { useEffect, useState } from 'react';
import { apiurl } from './Context/Context';
import Footer from './Footer';
import Header from './Header';
import './Viewproduct.css'

const axios = require('axios').default;


function Viewproduct() {
    var id = localStorage.getItem("productis")
    const [product , setProduct] = useState('')

    useEffect(()=>{
      axios.get(`${apiurl}/product/${id}`).then((data)=>{
        console.log(data.data)
        setProduct(data.data)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])



  return (
    <div>
        <Header/>
        <div className='container mb-5'>
            
                <div className='row justify-content-between'>

                    <div className='col-12 col-md-5'>
                          <div className='text-center imggdd bg-light'>
                            <img width="400px" src={product.imageurl} alt="" />
                            <h2 className='mt-4'>₹ {product.price}</h2>
                            <div className='d-grid'>
                            <button className='btn btn-dark button22'>Make offer</button>
                            </div>
                            <div>

                            </div>
                          </div>
                    </div>

                    <div className='col-12 col-md-5 '>

                        <div className='bg-light contentwert p-4'>

                            <h3 className='mb-4 text-center'>{product.productname}</h3>

                            <div><b>Model: </b>{product.model} </div>

                            <div className='mb-3'><b>Place: </b>{product.place} </div>

                        </div>

                        <div className='bg-light contentwert p-4'>

                            <h3 className='mb-4 text-center'>Sold By</h3>
                            <div className='d-flex'>
                            <img width="50px" height="45px" className='rounded-circle me-3' src="https://i0.wp.com/elpoderdelasideas.com/wp-content/uploads/olx-avatar8.jpg?fit=800%2C533&ssl=1" alt="" />
                            <h3>{product.username}</h3>
                            </div>
                            <div><b>Email: </b> {product.email}</div>
                            <div><b>Contact: </b> {product.phno}</div>


                            <div className='d-grid mt-4'>
                                <button className='btn btn-dark button22'>Message Seller</button>
                            </div>

                        </div>

                    </div>

                </div>

         


        </div>
        <Footer/>

    </div>
  )
}

export default Viewproduct
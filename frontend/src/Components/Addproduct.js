import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Addproduct.css'
// import { apiurl } from './Context/Context';
import Footer from './Footer';
import Header from './Header'
import { authaxios } from './Tokeninterceptor/axiosintercept';
// const axios = require('axios').default;

function addproduct() {
  var userid = localStorage.getItem("token")
  var name22 = localStorage.getItem("name")

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useNavigate()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [productname , setProductname] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [category , setCategory] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [price , setPrice] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [model , setModel] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [place , setPlace] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [imageurl , setImageurl] = useState('');


  const addproducts22=(e)=>{
    e.preventDefault()
    authaxios.post(`/addproduct`, {
        productname: productname,
        category: category,
        price: price,
        model: model,
        place: place,
        imageurl: imageurl,
        uid: userid,
        name22:name22

      })
      .then((res)=> {
        console.log(res)
      if(!res.data.status){
        alert(res.data.message)
        history("/login")

      }else{
        alert("Sucessfully Added");
        history("/")
      }
  
      })
      .catch(function (error) {
        alert(error);
      });
  }
  return (
    <div className='homebody'>
        <Header/>
        <div className='d-flex justify-content-center'>

          <div className='forms234'>
          <form onSubmit={addproducts22}>
      <div className="mb-5 text-center">
    <h4>Add Product</h4>
  </div>
  <div className="mb-3">
    <label  className="form-label">Product Name</label>
    <input required name="productname" value={productname} onChange={(e)=>setProductname(e.target.value)} type="string" class="form-control"/>
  </div>
  <div className="mb-3">
    <label className="form-label">Category</label>
    <input required name="category" value={category} onChange={(e)=>setCategory(e.target.value)} type="string" class="form-control" />
  </div>
  <div className="mb-3">
  <label className="form-label">Price</label>
    <input required name="price" value={price} onChange={(e)=>setPrice(e.target.value)} type="number" class="form-control" />
  </div>
  <div className="mb-3">
    <label className="form-label">Model</label>
    <input required name="model" value={model} onChange={(e)=>setModel(e.target.value)} type="string" class="form-control" />
  </div>
  <div className="mb-3">
    <label className="form-label">Place</label>
    <input required name="place" value={place} onChange={(e)=>setPlace(e.target.value)} type="string" class="form-control" />
  </div>
  <div className="mb-4">
    <label className="form-label">Image Url</label>
    <input required name="imageurl" value={imageurl} onChange={(e)=>setImageurl(e.target.value)} type="string" class="form-control" />
  </div>
  <div className="d-grid">
  <button type="submit" class="btn btn-primary">Add Product</button>

  </div>
</form>
          </div>
            
        </div>
        <Footer/>

    </div>
  )
}

export default addproduct
import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <div className='mt-1 nav22'>
        <div className='d-flex pt-1'>
            <div className='mx-4 qwerty me-5'><b>ALL CATEGORIES <i class="fa-solid fa-chevron-down"></i></b></div>
            <div className='mx-2 qwerty'><p>Car</p></div>
            <div className='mx-2 qwerty'><p>Motorcycle</p></div>
            <div className='mx-2 qwerty'><p>Mobile Phones</p></div>
            <div className='mx-2 qwerty'><p>For Sale: Houses & Apartments</p></div>
            <div className='mx-2 qwerty'><p>Scooters</p></div>
            <div className='mx-2 qwerty'><p>Commercial & Other Vehicles</p></div>
            <div className='mx-2 qwerty'><p>For Rent: Houses & Apartments</p></div>
        </div>
    </div>
  )
}

export default Navbar
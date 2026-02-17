import React from 'react'
import { Link } from 'react-router-dom'
function Basvuru() {
  return (
    <div>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-4 text-center p-5">
        <Link className='btn-custom rounded' to='https://docs.google.com/forms/d/e/1FAIpQLSehvXC8xOECG8IS9qcblUHdToKmmidHamA3VxO7Odwzal1Qxg/viewform?usp=sf_link' target='_blank'>Basvuru</Link>
        </div>
      </div>
        
    </div>
  )
}

export default Basvuru
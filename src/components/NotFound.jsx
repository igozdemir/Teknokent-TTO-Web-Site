import React from 'react'
import notFound from '../images/notfound.png'
function NotFound() {
  return (
    <div>
      <div className="bg-light 404 row align-items-center  m-0 p-0 justify-content-center vh-100">
            <div className="col-5 text-center ">
            <h1 className='main-color poppins-bold my-5'>Sayfa Bulunamadi</h1>
              <img src={notFound} alt="404" className='img-fluid' />
            </div>
        </div>
    </div>
  )
}

export default NotFound
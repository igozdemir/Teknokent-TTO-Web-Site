import React from 'react';
import video from '../images/back.mp4'
function Anasayfa() {
  return (
    <div>
      <header>
        <div className="overlay"></div>

        <video src={video} playsInline autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Karabük Üniversitesi Teknoloji Geliştirme Bölgesi
        </video>

        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3 poppins-bold">Ar-Ge Projesi Geliştirme ve Yönetimi Eğitimi</h1>
              <p className="lead mb-0">Karabük Üniversitesi Teknoloji Geliştirme Bölgesi</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Anasayfa;

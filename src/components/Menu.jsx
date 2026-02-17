import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logosvg.png'
function Menu() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark main-bg">
            <div class="container">
                <Link to="/" class="navbar-brand"><img src={logo} alt="Teknokent Logo" width="200px"/></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto p-3">
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="anasayfa">Anasayfa</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/hakkimizda">HAKKIMIZDA</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/amac-ve-kapsam">AMAÇ VE KAPSAM</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/egitim-programi">EĞİTİM PROGRAMI</Link>
                    </li>
    
                    <li class="nav-item dropdown">
                      <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">PROJE EKİBİ</Link>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link class="dropdown-item" to="/duzenleme-kurulu">Düzenleme Kurulu</Link></li>
                        <li><Link class="dropdown-item" to="/egitmenler">Eğitmenler</Link></li>
                        <li><Link class="dropdown-item" to="/bilim-kurulu">Bilim Kurulu</Link></li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown ">
                      <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">BAŞVURU</Link>
                      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link class="dropdown-item" to="https://docs.google.com/forms/d/e/1FAIpQLSehvXC8xOECG8IS9qcblUHdToKmmidHamA3VxO7Odwzal1Qxg/viewform?usp=sf_link" target='_blank'>Başvuru</Link></li>
                        <li><Link class="dropdown-item" to="/katilimci-degerlendirme">Katılımcı Değerlendirme Kriterleri</Link></li>
                        <li><Link class="dropdown-item" to="/konaklama">Etkinliğin ve Konaklamanın Yapılacağı Yer Bilgisi</Link></li>
                      </ul>
                    </li>

                    <li class="nav-item">
                      <Link class="nav-link" to="iletisim">İLETİŞİM</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Menu

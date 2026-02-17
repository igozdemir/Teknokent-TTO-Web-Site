import React, { useEffect } from 'react'
import azizeKaragul from '../images/azizeKaragul.jpg';
import fatmaTasdelen from '../images/fatmaTasdelen.jpg';
import hasanDemir from '../images/hasanDemir.jpg';
import muharremhilmi from '../images/muharrem.jpg'
import mustafahalid from '../images/mustafa_halid.jpg'
import cihat from '../images/cihat-seker.jpg'
import mustafabuğday from '../images/msutafabuğday.webp'
import ibrahimZorlu from '../images/ibrahim-zorlu.jpg';
import sametHocam from '../images/samet-nohutcu.jpg';
import Aos from 'aos';
function DuzenlemeKurulu() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    }
    );
  })
  return (
    <div>
      <section className="bg-light py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Düzenleme Kurulu</h2>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row gx-4 gy-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={mustafahalid} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Prof. Dr. MUSTAFA HALİD KARAARSLAN</h5>
                  <p className="card-text text-secondary mb-0">Karabük Üniversitesi</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={muharremhilmi} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Doç. Dr. MUHARREM HİLMİ AKSOY</h5>
                  <p className="card-text text-secondary mb-0">Konya Teknik Üniversitesi</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={cihat} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Dr. Öğr. Üyesi CİHAT ŞEKER</h5>
                  <p className="card-text text-secondary mb-0">Karabük Üniversitesi</p>
                </div>
              </div>
            </div>
             <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={sametHocam} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Genel Müdür SAMET NOHUTÇU</h5>
                  <p className="card-text text-secondary mb-0">Karabük Üniversitesi</p>
                </div>
              </div>
            </div>
             <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={ibrahimZorlu} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Yüksek Mühendis İBRAHİM ZORLU</h5>
                  <p className="card-text text-secondary mb-0">Karabük Üniversitesi</p>
                </div>
              </div>
            </div>
             <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={mustafabuğday} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Doç. Dr. MUSTAFA BUĞDAY</h5>
                  <p className="card-text text-secondary mb-0">Karabük Üniversitesi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Yardımcı Personel</h2>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row gx-4 gy-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={azizeKaragul} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Azize KARAGÜL</h5>
                  <p className="card-text text-secondary mb-0">Destek Personeli</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={fatmaTasdelen} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Fatma TAŞDELEN</h5>
                  <p className="card-text text-secondary mb-0">Destek Personeli</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={hasanDemir} alt="" />
                <div className="card-body d-flex-col justify-content-between text-center">
                  <h5 className="card-title mb-1">Hasan DEMİR</h5>
                  <p className="card-text text-secondary mb-0">Destek Personeli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DuzenlemeKurulu
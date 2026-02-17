import React, { useEffect } from 'react';
import sametHocam from '../images/samet-nohutcu.jpg';
import cihatSeker from '../images/cihat-seker.jpg';
import ibrahimZorlu from '../images/ibrahim-zorlu.jpg';
import muharrem from '../images/muharrem.jpg';
import mustafahalid from '../images/mustafa_halid.jpg'
import hakancengiz from '../images/Hakan_cengiz.jpg'
import mehmetzahid from '../images/mehmetzahid.jpg'
import hasanuygurturk from '../images/hasan_uygurtürk.webp'
import tuğrulbayraktar from '../images/tuğrul bayraktar.webp'
import mahmutesat from '../images/mahmutesat.jpeg'
import mustafabuğday from '../images/msutafabuğday.webp'
import cansel from '../images/cansel.jpg'
import simge from '../images/simge.jpg'
import Aos from 'aos';

function Egitmenler() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  })
  return (
    <div>
      <section className="bg-light py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Eğitmenlerimiz</h2>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        {/* TÜM KARTLAR TEK ROW İÇİNDE */}

        <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={muharrem} alt="" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Doç. Dr. MUHARREM HİLMİ AKSOY</h5>
                  <p className="card-text text-secondary mb-0"></p>
                </div>
              </div>
            </div>

        <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={cihatSeker} alt="" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Dr. Öğr. Üyesi CİHAT ŞEKER</h5>
                  <p className="card-text text-secondary mb-0"></p>
                </div>
              </div>
            </div>

        <div className="container">
          <div className="row gx-4 gy-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={mustafahalid} alt="" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Prof. Dr. MUSTAFA HALİD KARAARSLAN</h5>
                </div>
              </div>
            </div>

        <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={mehmetzahid} alt="" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Doç. Dr. MEHMET ZAHİD ECEVİT</h5>
                  <p className="card-text text-secondary mb-0"></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={hakancengiz} alt="" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Prof. Dr. HAKAN CENGİZ</h5>
                  <p className="card-text text-secondary mb-0"></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={tuğrulbayraktar} alt="" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Dr. Öğr. TUĞRUL BAYRAKTAR</h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={hasanuygurturk} alt="" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Prof. Dr. HASAN UYGURTÜRK</h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={mahmutesat} alt="" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">MAHMUT ESAT YILMAZ</h5>
                  <p className="card-text text-secondary mb-0"></p>
                </div>
              </div>
            </div>            

            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={sametHocam} alt="" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Genel Müdür SAMET NOHUTÇU</h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={ibrahimZorlu} alt="" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">YÜKSEK MÜHENDİS İBRAHİM ZORLU</h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={mustafabuğday} alt="" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Doç. Dr. MUSTAFA BUĞDAY</h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={cansel} alt="" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Uzman CANSEL ARKALIÇ SHAKİR</h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
              <div className="card h-100 border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <img className="card-img-top img-fluid" loading="lazy" src={simge} alt="" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Uzman SİMGE KÜTÜKÇÜLER</h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>

  );
}

export default Egitmenler;

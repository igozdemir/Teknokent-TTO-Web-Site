import Aos from 'aos';
import React, { useEffect } from 'react';

function Iletisim() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
    })
  })
  return (
      <div>
        <div className="hero-iletisim d-flex align-items-center justify-content-center">
          <div className="text-light p-5">
            <h1 className='poppins-bold'>İLETİŞİM</h1>
          </div>
        </div>
        <div className="container">
          <div className="row gy-4 gy-md-5 gy-lg-0 align-items-md-center">
            <div className="col-12 col-lg-6 p-5">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <div className="mb-4 mb-md-5" data-aos="fade-up">
                    <div className="mb-3 text-primary fs-1"><i className="fas fa-map-marker-alt second-color"></i></div>
                    <div>
                      <h4 className="mb-2">Adres</h4>
                      <hr className="w-50 mb-3 border-dark-subtle" />
                      <address className="m-0 text-secondary">Karabük Üniversitesi Teknoloji Geliştirme Bölgesi Yönetici A.Ş. Kılavuzlar Mah. 413. SK. Karabük Üniversitesi Sosyal Tesis Blok No:8 Merkez/KARABÜK</address>
                    </div>
                  </div>
                  <div className="row mb-sm-4 mb-md-5">
                    <div className="col-12 col-sm-6" data-aos="fade-up">
                      <div className="mb-4 mb-sm-0">
                        <div className="mb-3 text-primary fs-1"><i className="fas fa-phone second-color"></i></div>
                        <div>
                          <h4 className="mb-2">Telefon</h4>
                          <hr className="w-75 mb-3 border-dark-subtle" />
                          <p className="mb-0">
                            <a className="link-secondary text-decoration-none" href="tel:+903705021878">0(370) 502 18 78</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6" data-aos="fade-up">
                      <div className="mb-4 mb-sm-0">
                        <div className="mb-3 text-primary fs-1"><i className="fas fa-envelope second-color"></i></div>
                        <div>
                          <h4 className="mb-2">Email</h4>
                          <hr className="w-75 mb-3 border-dark-subtle" />
                          <p className="mb-0">
                            <a className="link-secondary text-decoration-none"
                              href="mailto:iletisim@kbutgb.com.tr">iletisim@kbutgb.com.tr</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-up">
                    <div className="mb-3 text-primary fs-1"><i className="fas fa-clock second-color"></i></div>
                    <div>
                      <h4 className="mb-2">Açılış Saatleri</h4>
                      <hr className="w-50 mb-3 border-dark-subtle" />
                      <div className="d-flex mb-1">
                        <p className="text-secondary fw-bold mb-0 me-5">PZT - CUM</p>
                        <p className="text-secondary mb-0">9:00 - 18:00</p>
                      </div>
                      <div className="d-flex">
                        <p className="text-secondary fw-bold mb-0 me-5">HAFTASONU</p>
                        <p className="text-secondary mb-0">ÇALIŞMIYOR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6" data-aos="fade-up">
              <div className="border border-5 overflow-hidden">
                <iframe
                title='Teknokent'
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48024.35792739966!2d32.60972691335268!3d41.21038560000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40835318ced11581%3A0xc7968681472940!2sKarab%C3%BCk%20%C3%9Cniversitesi%20Teknopark!5e0!3m2!1sen!2str!4v1718624988830!5m2!1sen!2str"
                  width="700" height="550" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}

export default Iletisim;

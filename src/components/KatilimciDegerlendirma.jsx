import Aos from 'aos'
import React, { useEffect } from 'react'

function KatilimciDegerlendirma() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
    })
  })
  return (
    <div>
      <div className="hero d-flex align-items-center justify-content-center text-center">
        <div className="text-light p-5"><h1 className='poppins-bold'>Katılımcı Değerlendirme Kriterleri </h1></div>
      </div>
      <div className="container p-5 text-justified" >
        <div className="content" data-aos="fade-up">
          <h1>Katılımcı Değerlendirme Kriterleri </h1>
          <p>Katılımcılar Karabük Üniversitesi ve yakın çevre illerde yer alan üniversitelerde eğitim gören lisans ve yüksek lisans öğrencilerinden seçilecektir. Başvuranlar arasından 30 kişinin asil olarak kabulü gerçekleştirilecek olup 10 kişide yedek olarak seçilecektir. Öğrencilerin seçilmesi amacıyla duyuruya çıkılacaktır. Belirli kriterler göz önünde bulundurularak bir başvuru formu oluşturulacak ve formdaki kriterlerin puanlarına göre bir puan sıralama tablosu oluşturulacaktır. Puan sıralama tablosundaki ilk 40 kişi arasında yer alanlardan 30’u asil 10’u ise yedek olarak belirlenecektir. Puan sıralama tablosu aşağıda yer alan başvuru formu kriterlerine göre oluşturulacaktır;</p>

        </div>
        <div className="accordion" id="accordionExample" data-aos="fade-up">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button poppins-bold main-color" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
                Güncel Transkript Notu, 4’lük sisteme göre
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ul>
                  <li>2.00-2.50 arası 10 puan,</li>
                  <li>2.50-3.00 arası 15 puan,</li>
                  <li>3.00-3.50 arası 20 puan,</li>
                  <li>3.50-4.00 arası 25 puan</li>
                </ul>
                <span><b className='text-danger'>olarak değerlendirilecektir.</b></span>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed poppins-bold main-color" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Güncel Eğitim Durumu
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ul>
                  <li>Lisans 1. sınıf için 15 puan,</li>
                  <li>Lisans 2. ve 3. sınıf için 20 puan,</li>
                  <li>Yüksek Lisans için 20 puan</li>
                </ul>
                <span><b className='text-danger'>olarak değerlendirilecektir.</b></span>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed poppins-bold main-color" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Daha Önce TUBİTAK projesine katılım sağlamış
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Daha önce TÜBİTAK programlarından herhangi birine başvuru gerçekleştirdiği halde başvurusu kabul edilmemiş olan kişilere 20 puan ve daha önce herhangi bir TÜBİTAK projesinde bursiyer olarak görev alan kişilere de 20 puan eklenecektir.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed poppins-bold main-color" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Proje Önerisi
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Başvuran adaylardan bir proje önerisi sunmaları istenecektir. Sunulan proje önerisinin özgünlüğüne göre adaylara 5-20 arasında bir puan değerlendirmesi yapılacaktır. Sonuç başvuru adayının puanına eklenecektir.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button collapsed poppins-bold main-color" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Başvuru Formuna yüklenen Özgeçmişin
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Değerlendirme ekibi tarafından incelenmesi sonucunda 5-15 arasında bir puan değerlendirmesi yapılacaktır. Yapılan değerlendirme neticesinde sonuç başvuru sahibinin puanına eklenecektir.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KatilimciDegerlendirma
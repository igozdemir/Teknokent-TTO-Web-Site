// components/Hakkimizda.tsx

import React, { useEffect } from 'react';

import teknokent from '../images/back.jpg';
import { BuildingOffice, Buildings } from '@phosphor-icons/react';
import Aos from 'aos';

function Hakkimizda() {
    useEffect(()=>{
        Aos.init({
            duration: 1000,
        })
    })
    return (
        <div>
            <div className="hero d-flex align-items-center justify-content-center">
                <div className="text-light p-5">
                    <h1 className="poppins-bold">HAKKIMIZDA</h1>
                </div>
            </div>
            <section className="py-5 py-md-5 my-5">
                <div className="container">
                    <div className="row align-items-lg-start justify-content-around" data-aos="fade-up">
                        <div className="col-md-6 mb-5 mb-md-0 p-4">
                            <h2 className="mb-3">Hakkımızda</h2>
                            <p className='text-justified'>
                                Karabük Üniversitesi Teknoloji Geliştirme Bölgesi, Sanayi ve Teknoloji Bakanlığı tarafından 30.09.2017 tarihinde 30196 sayılı Resmî Gazete’de yayımlanarak Karabük Üniversitesi kampüsü içerisinde bulunan 15,023,20 m2 yüzölçümlü bir alanda kurulması ilan edilmiştir.
                            </p>
                            <p className='text-justified'>
                                Geri dönüşüm çalışmalarından Elektroniğe, yazılım geliştirmeden Makine ve Teçhizat imalatına, Enerji çalışmalarından demir imalatına gibi geniş bir faaliyet alanı bulunan Karabük Üniversitesi Teknoloji Geliştirme Bölgesi toplam 41 firmasıyla çalışmalarını sürdürmektedir. Bunlardan 21 tanesi AR-GE firması, 20 tanesi kuluçka firmasıdır.
                            </p>
                            <p className='text-justified'>
                                Karabük Üniversitesi Teknoloji Geliştirme Bölgesi, üniversite ve sanayi arasındaki iş birliği ve sinerji oluşumu ile katma değeri yüksek ürünlerde AR-GE çalışmalarının sürdürülmesi en öncelikli amacıdır. Üniversite bilgi birikimleriyle araştırma alt yapısının teknokent girişimcilerin faydalanmasını sağlayarak hem sanayi hem de akademik bakış açısı ile uluslararası ölçekte rekabetçi üstünlüğe sahip projeler üretmeyi hedeflemektedir.
                            </p>
                            <div className="row gy-4 gy-md-0 gx-xxl-5X my-5" >
                                <div className="col-md-6" data-aos="fade-up">
                                    <div className="d-flex">
                                        <div className="me-4 text-primary">
                                            <Buildings size={42} />
                                        </div>
                                        <div>
                                            <h2 className="h4 mb-3">21</h2>
                                            <p className="text-secondary mb-0">AR-GE firması</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6" data-aos="fade-up">
                                    <div className="d-flex">
                                        <div className="me-4 text-primary">
                                            <BuildingOffice size={42} />
                                        </div>
                                        <div>
                                            <h2 className="h4 mb-3">20</h2>
                                            <p className="text-secondary mb-0">kuluçka firması</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 py-5 my-5">
                            <img className="img-fluid rounded" loading="lazy" src={teknokent} alt="About 1" />
                        </div>
                    </div>
                    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center px-4" data-aos="fade-up">
                        <div className="col-md-6 col-lg-12 col-xl-12">
                            <p className='text-justified'>
                                TÜBİTAK’ın 2237-A Bilimsel Etkinlikleri Destekleme Programı çerçevesinde düzenlenen “Ar-Ge Projesi Geliştirme ve Yönetimi Eğitimi” etkinliği, katılımcılara proje yönetimi ve organizasyonuyla ilgili derinlemesine bilgiler sunmayı amaçlamaktadır. Eğitim sürecinde, çeşitli boyutlarıyla proje yönetiminin ele alındığı dersler düzenlenmiş ve konunun uzmanı akademisyenlerin deneyimleri paylaşılmıştır. Katılımcılara, etkinlik boyunca proje yazma konusunda gerekli bilgi, tutum ve davranış değişiklikleriyle donatılarak, nitelikli bir proje kültürü kazandırılacaktır. Programın sonunda hedeflenen, farklı disiplinlerde ve başlıklar altında proje yürütme kabiliyetine sahip araştırmacıların yetiştirilmesidir.
                            </p>
                            <p className='text-justified' >
                                Etkinlik TÜBİTAK 2237-A Bilimsel Eğitim Etkinliklerini Destekleme Programı tarafından desteklenmesi durumunda 26-27 EKİM 2024 tarihleri arasında gerçekleştirilecektir. Etkinliğe katılacak olan tüm adaylara Katılım Sertifikası verilecektir.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hakkimizda;

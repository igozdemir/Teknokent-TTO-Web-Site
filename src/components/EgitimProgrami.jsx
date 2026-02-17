import Aos from 'aos';
import React, { useEffect } from 'react'

function EgitimProgrami() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    })
    return (
        <div>
            <div className="hero d-flex align-items-center justify-content-center">
                <div className="text-light p-5"><h1 className='poppins-bold'>EĞİTİM PROGRAMI</h1></div>
            </div>
            <div class="container py-9 py-lg-11 position-relative z-index-1 my-5 py-5" >
                <div class="row text-justified">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h5 class="mb-4 main-color poppins-bold aos-init aos-animate" data-aos="fade-up">Eğitim Programı</h5>
                        <div class="nav nav-pills flex-column aos-init aos-animate" id="myTab" role="tablist" data-aos="fade-up">
                            <button class="nav-link px-4 text-start mb-3 active" id="d1-tab" data-bs-toggle="tab" data-bs-target="#day1" type="button" role="tab" aria-controls="day1" aria-selected="true">
                                <span class="d-block fs-5 fw-bold">1. GÜN</span>
                                <span class="small">CUMA 15 MAYIS 2026</span>
                            </button>

                            <button class="nav-link px-4 text-start" id="d2-tab" data-bs-toggle="tab" data-bs-target="#day2" type="button" role="tab" aria-controls="day2" aria-selected="false" tabindex="-1">
                                <span class="d-block fs-5 fw-bold">2. GÜN</span>
                                <span class="small">CUMARTESİ 16 MAYIS 2026</span>
                            </button>

                            <button class="nav-link px-4 text-start" id="d3-tab" data-bs-toggle="tab" data-bs-target="#day3" type="button" role="tab" aria-controls="day3" aria-selected="false" tabindex="-1">
                                <span class="d-block fs-5 fw-bold">3. GÜN</span>
                                <span class="small">PAZAR 17 MAYIS 2026</span>
                            </button>

                        </div>
                    </div>

                    <div class="col-lg-8 col-xl-7">
                        <div data-aos="fade-up" class="tab-content aos-init aos-animate" id="myTabContent">
                            <div class="tab-pane fade active show" id="day1" role="tabpanel" aria-labelledby="d1-tab">
                                <ul class="pt-4 list-unstyled mb-0">
                                    <li class="d-flex flex-column flex-md-row py-4" data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">09:00 - 10:00 <br /> Ders Saati: 1</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> Teknoloji Tabanlı Girişimcilik Ekosistemi ve TRL Analizi</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> MUHARREM HİLMİ AKSOY
                                            </p>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>KONU:</span> Girişimcilik Temel Kavramları ve Teknoloji Hazırlık Seviyeleri
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Teknoloji tabanlı girişimciliğin dinamikleri, startup ve KOBİ farkları ile Ar-Ge projelerinde TRL (Teknoloji Hazırlık Seviyesi) belirleme süreçleri işlenecektir.</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4" data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">10:00 - 11:00 <br /> Ders Saati: 1</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> Problem Doğrulama ve Müşteri Keşfi Yöntemleri</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> MUHARREM HİLMİ AKSOY
                                            </p>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>KONU:</span> Tasarım Odaklı Düşünme ve Müşteri Mülakatları
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Pazar analizi (TAM, SAM, SOM) teknikleri, "Mom Test" (Anni Testi) ile doğru soru sorma metodolojisi ve müşteri persona (kimlik) kartlarının oluşturulması anlatılacaktır. (Ders sonu 10 soruluk değerlendirme testi)</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">11:00 - 12:00 <br /> Ders Saati: 1</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> MVP Stratejileri - I: Önceliklendirme ve Kapsam</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> CİHAT ŞEKER
                                            </p>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>KONU:</span> Minimum Uygulanabilir Ürün Felsefesini Anlamak
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Mükemmel ürün tuzağından kaçınmak için MVP kavramı, özellik önceliklendirme matrisleri (MoSCoW Yöntemi) ve ürün yol haritası (roadmap) oluşturma teknikleri ele alınacaktır.</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">12:00 - 13:00</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5 className='alert alert-success'>Öğle Arası</h5>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">13:00 - 14:00 <br /> Ders Saati: 1</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> MVP Stratejileri - II: Hızlı Prototipleme Araçları</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> CİHAT ŞEKER
                                            </p>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>KONU:</span> No-Code Araçlar ve Prototip Test Süreçleri
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Yazılım bilgisi gerektirmeyen (No-Code/Low-Code) araçlarla hızlı prototip üretme, Landing Page (Açılış Sayfası) hazırlama ve kullanıcı geri bildirimi (Feedback Loop) toplama süreçleri uygulamalı gösterilecektir. (Ders sonu 10 soruluk değerlendirme testi)</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">14:00 - 15:00 <br /> Ders Saati: 1</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> Tekno-Girişim Hukuku - I: Fikri ve Sınai Mülkiyet Hakları</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> MAHMUT ESAT YILMAZ
                                            </p>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>KONU:</span> Patent, Marka ve Faydalı Model Süreçleri
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Ar-Ge çıktılarının korunması, patent araştırma teknikleri, fikri mülkiyet stratejileri ve teknoloji transfer ofisleri (TTO) ile çalışma prensipleri işlenecektir.</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">15:00 - 16:00 <br /> Ders Saati: 1</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> Tekno-Girişim Hukuku - II: Şirketleşme ve Sözleşmeler</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> MAHMUT ESAT YILMAZ
                                            </p>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>KONU:</span> Şirket Türleri, Ortaklık Yapısı ve Yatırım Sözleşmeleri
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Teknokentlerde şirket kuruluş süreçleri, vergi avantajları, kurucular sözleşmesi (Shareholders Agreement) ve gizlilik sözleşmelerinin (NDA) kritik maddeleri analiz edilecektir. (Ders sonu 10 soruluk değerlendirme testi)</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">16:00 - 17:00 <br /> Ders Saati: 1</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> İş Modeli Tasarımı - I: Değer Önerisi Tasarımı</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Mustafa Halid Karaarslan
                                            </p>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>KONU:</span> İş Modeli Kanvası ve Değer-Müşteri Uyumu
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> İş Modeli Kanvası'nın sağ tarafı (Müşteri Segmentleri, Değer Önerisi, Kanallar, İlişkiler) ve Product-Market Fit (Ürün-Pazar Uyumu) kavramları teorik olarak anlatılacaktır.</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">17:00 - 18:00 <br /> Ders Saati: 1</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> İş Modeli Tasarımı - II: Gelir ve Maliyet Yapıları</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Mustafa Halid Karaarslan
                                            </p>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>KONU:</span> Finansal Sürdürülebilirlik ve Kaynak Yönetimi
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> İş Modeli Kanvası'nın sol tarafı (Temel Ortaklar, Etkinlikler, Kaynaklar) ile gelir modelleri ve maliyet yapısının kurgulanması örnek vakalar üzerinden işlenecektir. (Ders sonu 10 soruluk değerlendirme testi)</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="day2" role="tabpanel" aria-labelledby="d2-tab" data-aos="fade-up">
                                <ul class="pt-4 list-unstyled mb-0">
                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">09:00 - 10:00 <br /> Ders Saati: 1</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5> <span className='poppins-bold second-color'>DERS ADI:</span> Uygulamalı İş Modeli Atölyesi - I: Taslak Oluşturma</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Mustafa Halid Karaarslan</p>
                                            <p>
                                                <span className='poppins-bold second-color'>KONU:</span> Kanvas Doldurma Çalışması
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Katılımcılar gruplar halinde kendi projelerinin ilk taslak İş Modeli Kanvaslarını (Lean Canvas) mentorlar eşliğinde doldurmaya başlayacaktır.</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">10:00 - 11:00 <br /> Ders Saati: 1</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> Uygulamalı İş Modeli Atölyesi - II: Boşluk Analizi</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Mustafa Halid Karaarslan</p>
                                            <p>
                                                <span className='poppins-bold second-color'>KONU:</span> Modeldeki Risklerin Tespiti (Gap Analysis)
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Oluşturulan modellerdeki mantıksal tutarsızlıkların tespiti, rakip analizi ile modelin güçlendirilmesi ve pivot (eksen kayması) ihtiyacının değerlendirilmesi yapılacaktır.</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">11:00 - 12:00 <br /> Ders Saati: 1</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> Uygulamalı İş Modeli Atölyesi - III: Akran Değerlendirmesi</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Mustafa Halid Karaarslan</p>
                                            <p>
                                                <span className='poppins-bold second-color'>KONU:</span> Çapraz Sorgu ve Finalizasyon (Peer-Review)
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Grupların iş modellerini birbirlerine sundukları, katılımcıların yatırımcı gözüyle arkadaşlarının modellerini eleştirdikleri interaktif değerlendirme seansıdır. (Ders sonu 10 soruluk değerlendirme testi)</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">12:00 - 13:00</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5 className='alert alert-success'>Öğle Arası</h5>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">13:00 - 14:00 <br /> Ders Saati: 1</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> Ticarileşme Stratejileri - I: Satış Hunisi ve B2B Pazarlama</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Mehmet Zahid ECEVİT</p>
                                            <p>
                                                <span className='poppins-bold second-color'>KONU:</span> Satış Hunisi (Sales Funnel) Kurulumu
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Potansiyel müşteriye ulaşma kanalları, lead oluşturma, soğuk e-posta/arama teknikleri ve satış hunisinin aşamaları anlatılacaktır.</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">14:00 - 15:00 <br /> Ders Saati: 1</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> Ticarileşme Stratejileri - II: Satış Kapama ve CRM</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Mehmet Zahid ECEVİT</p>
                                            <p>
                                                <span className='poppins-bold second-color'>KONU:</span> İkna Teknikleri ve Müşteri İlişkileri Yönetimi
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Müşteri itirazlarını karşılama, satışı kapatma (Closing) taktikleri ve müşteri sadakati oluşturmak için CRM sistemlerinin kullanımı simülasyonlarla işlenecektir. (Ders sonu 10 soruluk değerlendirme testi)</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">15:00 - 16:00 <br /> Ders Saati: 1</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> Finansal Yönetim - I: Birim Ekonomisi</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Hasan Uygurtürk</p>
                                            <p>
                                                <span className='poppins-bold second-color'>KONU:</span> Girişim Matematiği ve Karlılık Analizi
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Müşteri Edinme Maliyeti (CAC), Yaşam Boyu Değer (LTV), Başabaş Noktası (Break-even) ve marj hesaplamaları gibi temel finansal metrikler öğretilecektir.</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">16:00 - 17:00 <br /> Ders Saati: 1</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> Finansal Yönetim - II: Yatırımcı İlişkileri</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Hasan Uygurtürk</p>
                                            <p>
                                                <span className='poppins-bold second-color'>KONU:</span> Yatırım Turu Süreçleri ve Şirket Değerleme
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Melek yatırımcı ve VC farkları, yatırım süreçleri (Term Sheet), hisse paylaşımı (Cap Table) ve değerleme mantığı ele alınacaktır. (Ders sonu 10 soruluk değerlendirme testi)</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">17:00 - 18:00 <br /> Ders Saati: 1</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> Sunum Teknikleri - I: Hikayeleştirme Sanatı</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Hakan Cengiz</p>
                                            <p>
                                                <span className='poppins-bold second-color'>KONU:</span> Storytelling ve İçerik Akışı
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Yatırımcı sunumunun (Pitch Deck) standart akışı, verilerin hikayeleştirilmesi ve dinleyiciyi ikna etmenin psikolojik temelleri anlatılacaktır.</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">18:00 - 19:00 <br /> Ders Saati: 17</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> Sunum Teknikleri - II: Görsel Tasarım ve Sahne</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Hakan Cengiz</p>
                                            <p>
                                                <span className='poppins-bold second-color'>KONU:</span> Slayt Tasarımı ve Beden Dili
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Etkili slayt tasarımı prensipleri, sahne hakimiyeti, ses tonu kullanımı, heyecan kontrolü ve soru-cevap (Q&A) yönetimi teknikleri işlenecektir. (Ders sonu 10 soruluk değerlendirme testi)</p>
                                        </div>
                                    </li>
                                </ul>


                            </div>
                            <div class="tab-pane fade" id="day3" role="tabpanel" aria-labelledby="d3-tab" data-aos="fade-up">
                                <ul class="pt-4 list-unstyled mb-0">
                                    <li class="d-flex flex-column flex-md-row py-4" data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">09:00 - 10:00 <br /> Ders Saati: 1</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> Veri Odaklı Yönetim - I: KPI Belirleme</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Tuğrul Bayraktar
                                            </p>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>KONU:</span> Performans Göstergeleri ve Kuzey Yıldızı Metriği
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Girişimin başarısını ölçmek için doğru KPI'ların (Anahtar Performans Göstergesi) seçimi ve "Kuzey Yıldızı Metriği" (North Star Metric) belirleme çalışması yapılacaktır.</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4" data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">10:00 - 11:00 <br /> Ders Saati: 2</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> Veri Odaklı Yönetim - II: Büyüme (Growth) Analitiği</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Tuğrul Bayraktar
                                            </p>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>KONU:</span> AARRR Hunisi ve Kohort Analizi
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Korsan Metrikleri (Acquisition, Activation, Retention, Referral, Revenue) üzerinden büyüme stratejileri ve analitik araçların (Google Analytics vb.) kullanımı gösterilecektir. (Ders sonu 10 soruluk değerlendirme testi)</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">11:00 - 12:00 <br /> Ders Saati: 3</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> Sunum Simülasyonu - I: Prova ve Mentorluk</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Hakan Cengiz
                                            </p>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>KONU:</span> Sunum Hazırlığı ve Son Dokunuşlar
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> Katılımcıların sahne öncesi son provalarını yaptıkları, mentorlardan slaytları ve konuşma metinleri için birebir düzeltme aldıkları hazırlık oturumudur.</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">12:00 - 13:00</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5 className='alert alert-success'>Öğle Arası</h5>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">13:00 - 14:00 <br /> Ders Saati: 4</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> Sunum Simülasyonu - II: Demo Day (Grup A)</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Hakan Cengiz
                                            </p>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>KONU:</span> Sahne Performansı ve Yatırımcı Jürisi (İlk Grup)
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> İlk grup katılımcıların projelerini jüri karşısında (3 dk sunum + 2 dk soru/cevap) sundukları ve puanlandıkları simülasyon oturumudur.</p>
                                        </div>
                                    </li>

                                    <li class="d-flex flex-column flex-md-row py-4 " data-aos="fade-up">
                                        <span class="flex-shrink-0 width-13x me-md-4 d-block mb-3 mb-md-0 small text-muted">14:00 - 15:00 <br /> Ders Saati: 5</span>
                                        <div class="flex-grow-1 ps-4 border-start border-3">
                                            <h5><span className='poppins-bold second-color'>DERS ADI:</span> Sunum Simülasyonu - III: Demo Day (Grup B) ve Kapanış</h5>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>DERS VERECEK ÖĞRETİM ÜYESİ:</span> Hakan Cengiz
                                            </p>
                                            <p class="mb-0">
                                                <span className='poppins-bold second-color'>KONU:</span> Sahne Performansı, Geri Bildirim ve Sertifika Töreni
                                            </p>
                                            <p><span className='poppins-bold second-color'>DETAYLI DERS İÇERİĞİ:</span> İkinci grup sunumlarının tamamlanması, genel değerlendirme, en başarılı projelerin ilanı ve katılım belgelerinin verilmesiyle program sonlandırılacaktır.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EgitimProgrami
import React, { useEffect } from 'react';
import amac from '../images/aim.png';
import kapsam from '../images/kapsam.png';
import { Link } from 'react-router-dom';
import Aos from 'aos';

function AmacVeKapsam() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  })
  return (
    <div>
      <div className="hero d-flex align-items-center justify-content-center">
        <div className="text-light p-5"><h1 className='poppins-bold'>AMAÇ VE KAPSAM</h1></div>
      </div>
      <div className="container">
        <div className="row d-flex flex-column-reverse flex-md-row align-items-center justify-content-around m-5 bg-light" data-aos="fade-up">
          <div className="col-lg-4 col-md-6">
            <img src={amac} className='img-fluid' alt="" />
          </div>
          <div className="col-lg-6 col-md-6 p-3">
            <h1 className='main-color my-3 poppins-bold'>Amaç</h1>
            <p className='text-justified'>Ülkemizin 12. Kalkınma Planı ve Milli Teknoloji Hamlesi hedefleri doğrultusunda; üniversitelerimizde üretilen yüksek nitelikli bilimsel bilginin, sadece akademik yayınla sınırlı kalmayıp ekonomik katma değere ve toplumsal faydaya dönüşmesi hayati önem taşımaktadır.
              Bu kapsamda düzenlenen etkinliğimizin temel amacı; lisansüstü öğrenciler ve genç araştırmacıların Ar-Ge tabanlı projelerini, laboratuvardan pazara (Lab-to-Market) taşıyabilecekleri bütüncül bir ticarileşme vizyonu kazanmalarını sağlamaktır.
              Etkinlik, katılımcılara sadece şirket kurmayı değil, küresel ölçekte rekabet edebilecek sürdürülebilir teknoloji girişimleri inşa etmeyi hedeflemektedir. Bu çerçevede belirlenen çok boyutlu amaçlarımız şunlardır:
              1.	Akademik Bilginin Ekonomik Değere Dönüşümü: Araştırmacıların "teknik odaklı" bakış açısını, "pazar ve müşteri odaklı" bir yaklaşımla harmanlayarak; bilimsel çıktıların ticarileşme potansiyelini artırmak ve "Ölüm Vadisi" olarak adlandırılan erken aşama risklerini minimize etmek.
              2.	Finansal Kaynak Çeşitliliği Yaratmak: Girişimci adaylarının finansman stratejilerini sadece TÜBİTAK 1512 (BİGG) ile sınırlamayıp; Melek Yatırım Ağları, Girişim Sermayesi (VC) Fonları, KOSGEB İleri Girişimcilik Desteklerine erişim yetkinliklerini geliştirmek.
              3.	Bölgesel Girişimcilik Ekosistemini Güçlendirmek: Farklı üniversite ve disiplinlerden gelen katılımcılar arasında disiplinlerarası çalışma kültürü oluşturarak, bölgemizde nitelikli, yüksek katma değerli teknoloji üreten bir girişimci havuzu oluşturmak.
              4.	Kurum İçi Girişimcilik Yetkinliği: Kendi girişimini kurmasa dahi, katılımcıların ileride görev alacakları Ar-Ge merkezleri ve teknopark firmalarında inisiyatif alabilen, inovasyon süreçlerini yönetebilen "Girişimci Araştırmacılar" olarak yetişmelerini sağlamak.
              5.	Yatırımcı Hazırlığı: Katılımcıların projelerini sadece teknik jürilere değil, profesyonel yatırımcılara da sunabilecekleri; finansal projeksiyonları, pazar analizleri ve büyüme stratejileri (Scale-up) netleşmiş, yatırıma hazır iş modelleri geliştirmelerini sağlamak.
            </p>
            <Link className='btn btn-custom-outline' to="https://docs.google.com/forms/d/e/1FAIpQLSehvXC8xOECG8IS9qcblUHdToKmmidHamA3VxO7Odwzal1Qxg/viewform" target='_blank' >Başvuru</Link>
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-around m-5 bg-light" data-aos="fade-up">
          <div className="col-lg-6 col-md-6 p-3">
            <h1 className='main-color my-3 poppins-bold'>Kapsam</h1>
            <p className='text-justified'>Bu etkinlik; salt bir bilgi aktarım programı olmanın ötesinde, katılımcıların kariyerleri boyunca ihtiyaç duyacakları "nitelikli sosyal sermayeyi" (Social Capital) oluşturmayı hedefleyen, etkileşim odaklı bir "Girişimcilik Hızlandırma Kampı" olarak tasarlanmıştır.
              Etkinlik kapsamı, "Öğren-Uygula-Ağ Kur" (Learn-Apply-Network) döngüsü üzerine kurgulanmış olup, katılımcılar arasında uzun vadeli iş birlikleri başlatacak şu üç ana ekseni kapsamaktadır:
              1. Disiplinlerarası İş Birliği ve Takım Oluşturma (Networking): Etkinliğin en temel kapsamı, farklı üniversite ve disiplinlerden (Mühendislik, Sosyal Bilimler, Sağlık vb.) gelen araştırmacıları bir araya getirerek "Kolektif Zeka" (Collective Intelligence) ortamı yaratmaktır.
              •	Karma Takım Çalışmaları: Katılımcılar, eğitim boyunca sabit kalacak karma gruplara ayrılarak, birbirlerinin uzmanlıklarından faydalanacakları simülasyonlar gerçekleştirecektir.
              •	Mentor Döngüsü: "Speed Mentoring" oturumları ile her katılımcının, farklı uzmanlıklara sahip eğitmenlerle birebir temas kurması ve etkinlik sonrası devam edecek bir danışmanlık köprüsü kurması sağlanacaktır.
              2. Uygulamalı Girişimcilik Metodolojileri (Co-Creation): Müfredat, katılımcıların pasif dinleyici olduğu değil, birbirlerinin projelerine katkı sunduğu (Peer-Review) interaktif modüllerden oluşmaktadır:
              •	Pazar ve Doğrulama: Katılımcıların birbirlerine "potansiyel müşteri" gözüyle geri bildirim verdiği Müşteri Doğrulama seansları.
              •	İş Modeli ve Finans: Grupların, gerçek piyasa verileriyle birbirlerinin iş modellerini "challenge" ettiği (sorguladığı) atölyeler.
              •	Teknoloji ve Ürün (MVP): Yazılımcı ve tasarımcı olmayan araştırmacıların, No-Code araçlarla birbirlerine prototip desteği verdiği imece usulü çalışmalar.
              Yürütücü ve Eğitici Kadronun Yetkinliği
              Etkinliğin yürütücü ve eğitici kadrosu; teorik derinlik ile pratik saha tecrübesini birleştiren, "Akademik Girişimcilik" vizyonuna sahip, hibrit ve yetkin bir yapıdan oluşmaktadır.
              Yürütücü Yetkinliği: Proje yürütücüsü, girişimcilik alanında gerçekleştirdiği kapsamlı akademik çalışmalarıyla literatüre ve ekosisteme önemli katkılar sunmaktadır. Yürütücünün uzmanlık alanları arasında;
              •	Girişimcilikte vaka analizleri (case studies) yoluyla başarı/başarısızlık faktörlerinin incelenmesi,
              •	Start-up'ların uluslararasılaşma süreçleri ve küresel pazara giriş stratejileri,
              •	Girişimcilik finansmanında kritik rol oynayan iş melekleri (business angels) ile ilişkiler ve yatırım dinamikleri,
              •	Yenilikçi iş modellerinin tasarımı ve analizi yer almaktadır. Bu birikim, eğitimin sadece teorik kalmayıp, yürütücünün bizzat yönettiği araştırmalardan ve saha verilerinden elde edilen güncel içgörülerle şekillenmesini sağlayacaktır.
              Akademisyen Eğitmenler (Teknopark & Sektör Entegrasyonu): Eğitmen kadrosunda yer alan akademisyenler, sadece sınıf içi öğretim faaliyetleriyle sınırlı kalmayıp, Üniversite-Sanayi İş Birliği süreçlerinde aktif rol alan isimlerdir. Kadromuzdaki akademisyenlerin pek çoğu; Teknokent bünyesinde kendi Ar-Ge firmalarını kurmuş, TÜBİTAK/KOSGEB projeleri yürütmüş ve akademik bilgiyi ticari ürüne dönüştürmüş "Girişimci Akademisyen"lerdir. Bu sayede katılımcılara, bir akademisyenin şirketleşme sürecinde karşılaşacağı zorlukları ve çözüm yollarını (know-how) birinci ağızdan aktarabilecek yetkinliğe sahiptirler.
              Sektör Profesyonelleri ve Girişimciler: Eğitimin uygulama modüllerinde görev alacak girişimci ve mentörler ise; girişimcilik ekosisteminde kilit rollere sahip, farklı sektörlerde (Yazılım, Üretim, Sağlık vb.) dikey uzmanlıkları bulunan deneyimli profesyonellerdir. Bu eğitmenler, katılımcılara salt bilgi aktarımının ötesinde, kendi başarı ve başarısızlık hikayeleri üzerinden rehberlik edecek, gerçek hayat senaryolarını sınıfa taşıyacak ve katılımcıların ekosistemle güçlü bir network kurmalarına liderlik edecektir.
              Özetle kadromuz; "araştıran" (yürütücü), "şirketleşen" (akademisyenler) ve "sahada olan" (girişimciler) üçlü saç ayağı üzerine kurulmuş olup, hedeflenen çıktıları üretmek için gerekli tüm yetkinliklere sahiptir
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <img src={kapsam} className='img-fluid' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmacVeKapsam;

import React, { useState, useEffect } from 'react';
import './App.css'; // Stil dosyamızı import ediyoruz

// --- Gizlilik Politikası Sayfa Bileşeni ---
const PrivacyPolicyPage = () => {
  // Gizlilik Politikası içeriği (Bu kısmı kendi politikanızla değiştirin)
  const privacyPolicyText = `
    Last Updated: [Tarih Buraya Gelecek]

    This Privacy Policy describes how [Uygulama Adınız] ("us", "we", or "our") collects, uses, and discloses your information when you use our mobile application (the "Service").

    **Information We Collect**

    We may ask you to provide us with certain personally identifiable information ("Personal Data") when you use our Service. Personally identifiable information may include, but is not limited to:

    * **Mood Entries:** Daily mood statuses, notes, and related tags you enter into the application. This data is stored locally on your device and is not sent to our servers [Eğer sunucuya gönderiliyorsa bu kısmı güncelleyin].
    * **Usage Data:** We may collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your device's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data. [Eğer kullanım verisi toplamıyorsanız veya farklı veriler topluyorsanız bu kısmı güncelleyin]

    **Use of Data**

    [Uygulama Adınız] uses the collected data for various purposes:

    * To provide and maintain our Service
    * To notify you about changes to our Service
    * To allow you to participate in interactive features of our Service when you choose to do so
    * To provide customer support
    * To gather analysis or valuable information so that we can improve our Service
    * To monitor the usage of our Service
    * To detect, prevent and address technical issues

    **Storage of Data**

    Your mood entries are stored only locally on your device. [Eğer veriler bulutta veya sunucuda saklanıyorsa bu kısmı detaylandırın, örneğin anonimleştirme veya şifreleme yöntemleri hakkında bilgi verin]. Other data, like Usage Data, will be retained only for as long as is necessary for the purposes set out in this Privacy Policy.

    **Disclosure of Data**

    We do not sell, trade, or otherwise transfer to outside parties your Personal Data except in the following cases:

    * Legal Requirements: If we are required to disclose your data to comply with a legal obligation.
    * Service Providers: We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), provide the Service on our behalf, perform Service-related services, or assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. [Kullandığınız servis sağlayıcıları (analitik, çökme raporlama vb.) listeleyin]

    **Security of Data**

    The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.

    **Children's Privacy**

    Our Service does not address anyone under the age of 13 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.

    **Changes to This Privacy Policy**

    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

    We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "Last Updated" date at the top of this Privacy Policy.

    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

    **Contact Us**

    If you have any questions about this Privacy Policy, please contact us:

    * By email: [E-posta Adresiniz]
    * By visiting our website: [Web Sitenizin Adresi (varsa)]
  `;

  return (
    <div className="policy-card">
      <h1 className="policy-title">Gizlilik Politikası</h1>
      <div className="policy-text">{privacyPolicyText}</div>
      <div className="policy-footer">
        [Uygulama Adınız] kullandığınız için teşekkür ederiz.
      </div>
    </div>
  );
};

// --- Hizmet Şartları Sayfa Bileşeni ---
const TermsOfServicePage = () => {
  // Hizmet Şartları içeriği (Bu kısmı kendi şartlarınızla doldurun)
  const termsOfServiceText = `
    Son Güncelleme: [Tarih Buraya Gelecek]

    [Uygulama Adınız]'a hoş geldiniz! Bu hüküm ve koşullar, [Uygulama Adınız]'ın Mobil Uygulamasının kullanımına ilişkin kural ve düzenlemeleri ana hatlarıyla belirtmektedir.

    Bu uygulamaya erişerek, bu hüküm ve koşulları kabul ettiğinizi varsayıyoruz. Bu sayfada belirtilen tüm hüküm ve koşulları kabul etmiyorsanız [Uygulama Adınız]'ı kullanmaya devam etmeyin.

    **1. Lisans**
    Aksi belirtilmedikçe, [Uygulama Adınız] ve/veya lisans verenleri, [Uygulama Adınız]'daki tüm materyallerin fikri mülkiyet haklarına sahiptir. Tüm fikri mülkiyet hakları saklıdır. Bu hüküm ve koşullarda belirtilen kısıtlamalara tabi olarak kendi kişisel kullanımınız için [Uygulama Adınız]'dan buna erişebilirsiniz.

    Yapmamalısınız:
    * [Uygulama Adınız]'dan materyal yeniden yayınlamak
    * [Uygulama Adınız]'dan materyal satmak, kiralamak veya alt lisansını vermek
    * [Uygulama Adınız]'dan materyal çoğaltmak, kopyalamak veya taklit etmek
    * [Uygulama Adınız]'dan içerik yeniden dağıtmak

    Bu Sözleşme, bu belgenin tarihinde başlayacaktır.

    **2. Kullanıcı Yorumları**
    Uygulamanın bazı bölümleri, kullanıcıların belirli alanlarda görüş ve bilgi göndermeleri ve alışverişinde bulunmaları için bir fırsat sunar. [Uygulama Adınız], Yorumları Web Sitesinde yayınlanmadan önce filtrelemez, düzenlemez, yayınlamaz veya incelemez. Yorumlar, [Uygulama Adınız]'ın, temsilcilerinin ve/veya bağlı kuruluşlarının görüş ve düşüncelerini yansıtmaz. Yorumlar, görüş ve düşüncelerini yayınlayan kişinin görüş ve düşüncelerini yansıtır. Yürürlükteki yasaların izin verdiği ölçüde, [Uygulama Adınız], Yorumlardan veya Yorumların herhangi bir şekilde kullanılmasından ve/veya yayınlanmasından ve/veya bu web sitesinde görünmesinden kaynaklanan herhangi bir sorumluluk, zarar veya masraftan sorumlu olmayacaktır.

    [Uygulama Adınız], tüm Yorumları izleme ve uygunsuz, saldırgan veya bu Hüküm ve Koşulların ihlaline neden olabilecek herhangi bir Yorumu kaldırma hakkını saklı tutar.

    Şunları garanti ve beyan edersiniz:
    * Yorumları Web Sitemizde yayınlama hakkına sahipsiniz ve bunu yapmak için gerekli tüm lisanslara ve onaylara sahipsiniz;
    * Yorumlar, herhangi bir üçüncü tarafın telif hakkı, patenti veya ticari markası dahil ancak bunlarla sınırlı olmamak üzere hiçbir fikri mülkiyet hakkını ihlal etmez;
    * Yorumlar, karalayıcı, iftira niteliğinde, saldırgan, uygunsuz veya başka bir şekilde yasa dışı olan ve gizliliğin ihlali olan hiçbir materyal içermez.
    * Yorumlar, ticari veya özel faaliyetleri veya yasa dışı faaliyetleri teşvik etmek veya tanıtmak için kullanılmayacaktır.

    Bu vesileyle [Uygulama Adınız]'a, Yorumlarınızı herhangi bir ve tüm formlarda, formatlarda veya medyada kullanmak, çoğaltmak, düzenlemek ve başkalarının kullanmasına, çoğaltmasına ve düzenlemesine izin vermek için münhasır olmayan bir lisans verirsiniz.

    **3. İçeriğimize Köprü Oluşturma**
    // ... (Sorumluluğun Reddi, Sorumluluğun Sınırlandırılması, Geçerli Hukuk, Şartlardaki Değişiklikler vb. gibi daha fazla bölüm ekleyin) ...

    **Bize Ulaşın**
    Bu Şartlar hakkında herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:
    * E-posta ile: [E-posta Adresiniz]
  `;

  return (
    <div className="policy-card">
      <h1 className="policy-title">Hizmet Şartları</h1>
      <div className="policy-text">{termsOfServiceText}</div>
      <div className="policy-footer">
        [Uygulama Adınız] kullandığınız için teşekkür ederiz.
      </div>
    </div>
  );
};


// --- Ana Uygulama Bileşeni (Yönlendirme için) ---
function App() {
  // window.location.pathname'e göre mevcut sayfayı ayarlıyoruz.
  // Bu, sayfa ilk yüklendiğinde doğru bileşenin gösterilmesini sağlar.
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  // Tarayıcının geri/ileri butonlarına basıldığında URL'yi dinlemek için useEffect.
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    // Component kaldırıldığında event listener'ı temizle.
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []); // Sadece component yüklendiğinde çalışır.

  // Navigasyon linkleri tarafından kullanılan sayfa değiştirme fonksiyonu.
  // window.history.pushState kullanarak URL'yi günceller ve state'i tetikler.
  const navigate = (path) => {
    window.history.pushState({}, '', path); // Tarayıcı geçmişine yeni bir giriş ekler.
    setCurrentPage(path); // State'i güncelleyerek yeniden render tetikler.
  };

  let pageContent;
  switch (currentPage) {
    case '/privacy-policy':
      pageContent = <PrivacyPolicyPage />;
      break;
    case '/terms-of-service':
      pageContent = <TermsOfServicePage />;
      break;
    default:
      // Eğer URL ne /privacy-policy ne de /terms-of-service ise,
      // varsayılan olarak Gizlilik Politikası'nı göster veya bir "Sayfa Bulunamadı" mesajı göster.
      // Kullanıcı dostu olması için ana sayfaya veya bilinen bir sayfaya yönlendirme daha iyi olabilir.
      // Şimdilik, eğer kök dizin istenirse Gizlilik Politikası'nı gösterelim.
      if (currentPage === '/') {
        // Kök dizin için Gizlilik Politikası'nı göster
         window.history.replaceState({}, '', '/privacy-policy'); // URL'yi de düzeltelim
         pageContent = <PrivacyPolicyPage />;
      } else {
        pageContent = (
          <div className="policy-card">
            <h1 className="policy-title">Sayfa Bulunamadı</h1>
            <div className="policy-text">
              Aradığınız sayfa mevcut değil. Lütfen aşağıdaki bağlantıları kullanın:
              <p style={{ marginTop: '20px' }}>
                <button onClick={() => navigate('/privacy-policy')} className="nav-button-inline">Gizlilik Politikası</button>
                <button onClick={() => navigate('/terms-of-service')} className="nav-button-inline">Hizmet Şartları</button>
              </p>
            </div>
          </div>
        );
      }
      break;
  }

  return (
    <div className="privacy-container">
      {/* Üstte sabit navigasyon menüsü */}
      <nav className="navigation-menu">
        <button
          onClick={() => navigate('/privacy-policy')}
          // Mevcut sayfaya göre 'active' sınıfını ekle/kaldır
          className={`nav-button ${currentPage === '/privacy-policy' || currentPage === '/' ? 'active' : ''}`}
        >
          Gizlilik Politikası
        </button>
        <button
          onClick={() => navigate('/terms-of-service')}
          className={`nav-button ${currentPage === '/terms-of-service' ? 'active' : ''}`}
        >
          Hizmet Şartları
        </button>
      </nav>
      {/* Seçilen sayfa içeriğini göster */}
      {pageContent}
    </div>
  );
}

export default App;

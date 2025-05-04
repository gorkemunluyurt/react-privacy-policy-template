import React from 'react';
import './App.css'; // CSS dosyasını import ediyoruz

// Ana uygulama bileşeni
function App() {
  // Gizlilik Politikası içeriği (Bu kısmı kendi politikanızla değiştirin)
  const privacyPolicyText = `
    Last Updated: [Date Here]

    This Privacy Policy describes how [Your App Name] ("us", "we", or "our") collects, uses, and discloses your information when you use our mobile application (the "Service").

    **Information We Collect**

    We may ask you to provide us with certain personally identifiable information ("Personal Data") when you use our Service. Personally identifiable information may include, but is not limited to:

    * **Mood Entries:** Daily mood statuses, notes, and related tags you enter into the application. This data is stored locally on your device and is not sent to our servers [Update this part if data is sent to a server].
    * **Usage Data:** We may collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your device's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data. [Update this part if you don't collect usage data or collect different data]

    **Use of Data**

    [Your App Name] uses the collected data for various purposes:

    * To provide and maintain our Service
    * To notify you about changes to our Service
    * To allow you to participate in interactive features of our Service when you choose to do so
    * To provide customer support
    * To gather analysis or valuable information so that we can improve our Service
    * To monitor the usage of our Service
    * To detect, prevent and address technical issues

    **Storage of Data**

    Your mood entries are stored only locally on your device. [If data is stored in the cloud or on a server, detail this here, e.g., mention anonymization or encryption methods]. Other data, like Usage Data, will be retained only for as long as is necessary for the purposes set out in this Privacy Policy.

    **Disclosure of Data**

    We do not sell, trade, or otherwise transfer to outside parties your Personal Data except in the following cases:

    * Legal Requirements: If we are required to disclose your data to comply with a legal obligation.
    * Service Providers: We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), provide the Service on our behalf, perform Service-related services, or assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. [List the service providers you use (analytics, crash reporting, etc.)]

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

    * By email: [Your Email Address]
    * By visiting our website: [Your Website Address (if any)]
  `;

  return (
    // Ana konteyner için CSS sınıfı
    <div className="privacy-container">
      {/* İçerik kartı için CSS sınıfı */}
      <div className="policy-card">
        {/* Başlık için CSS sınıfı */}
        <h1 className="policy-title">
          Privacy Policy
        </h1>
        {/* Gizlilik politikası metni için CSS sınıfı */}
        <div className="policy-text">
          {privacyPolicyText}
        </div>
        {/* Alt bilgi için CSS sınıfı */}
        <div className="policy-footer">
          Thank you for using [Your App Name].
        </div>
      </div>
    </div>
  );
}

// App bileşenini dışa aktar
export default App;

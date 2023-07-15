import Script from 'next/script';

const GoogleTagManager = () => (
  <>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-Y5NK26YL75"
      strategy="afterInteractive"
    />
    <Script strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-Y5NK26YL75');
      `}
    </Script>
  </>
);

export default GoogleTagManager;

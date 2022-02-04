import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      <link rel="icon" type="image/png" href="/16.png" />
      <link rel="icon" type="image/png" href="/32.png" />
      <link rel="icon" type="image/png" href="/48.png" />
      <link rel="icon" type="image/png" href="/96.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.png" />
      <meta charSet="utf-8" />
      <link rel="canonical" href="https://piedbot-mili.com" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <meta name="robots" content="index, follow" />
      <meta
        name="keywords"
        content="méthode mili pour les pied bot, mili method for clubfoot, pied bot, pied, bot, mili, méthode, methode, piedbot, piedbot methode mili, mili method, fraj mili, MILI, methode dynamique, innovation, kinéthérapy, physiothérapy, nouveau né, bébé, clubfoot, foot, club,sousse,tunisie,piedbot tunisie,clubfoot world,international,international clubfoot,bio,doctor,docteur,professor, professeur,website mili,  mili, method, method, fredj,fradj,clubfoot, clubfoot mili method, mili method, fraj mili, MILI, dynamic method, innovation, kinetherapy, physiotherapy, newborn, baby,سوسة ، تونس ، المنستير ، الساحل، فرحات حشاد ، ميلي ، طريقة ، حنف القدم ، طريقة ميلي القدم الحنفاء، القدم الحنفاء ، طريقة ميلي ، فرج ميلي ، ميلي ، الأسلوب الديناميكي ، الابتكار ، العلاج الطبيعي ، حديثي الولادة ، طفل"
      />
      <meta property="og:image" content="/favicon.png" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-203933994-4"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-203933994-4');`,
        }}
      ></script>
    </Head>
  );
}

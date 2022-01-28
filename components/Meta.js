import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <title>
        PiedBot, Clubfoot - Méthode Mili Fraj Mili, طريقة ميلي القدم الحنفاء
      </title>
      <meta
        name="description"
        content="Mili Method for treating babies clubfoot defect innovative approach from Dr Mili Fraj physiotherapist, Méthode Mili pour le traitement du pied bot des bébés approche innovante du Dr Mili Fraj physiothérapeute, طريقة ميلي لعلاج عيوب القدم الحنفاء للأطفال طريقة مبتكرة من أخصائي العلاج الطبيعي للدكتور ميلي فرج"
      />
      <meta
        name="keywords"
        content="pied bot, pied, bot, mili, méthode, methode, piedbot, piedbot methode mili, mili method, fraj mili, MILI, methode dynamique, innovation, kinéthérapy, physiothérapy, nouveau né, bébé, clubfoot, foot, club, mili, method, method, clubfoot, clubfoot mili method, mili method, fraj mili, MILI, dynamic method, innovation, kinetherapy, physiotherapy, newborn, baby, حنف القدم ، القدم ، ميلي ، طريقة ، حنف القدم ، طريقة ميلي القدم الحنفاء، القدم الحنفاء ، طريقة ميلي ، فرج ميلي ، ميلي ، الأسلوب الديناميكي ، الابتكار ، العلاج الطبيعي ، حديثي الولادة ، طفل"
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

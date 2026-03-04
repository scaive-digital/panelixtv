import Image from "next/image";
import Link from "next/link";
import { PhoneCall, ShieldCheck, Wrench, Clock, MonitorPlay, Zap, Droplets, Grid } from "lucide-react";

const reviews = [
  {
    author: "erdi yaygun",
    text: "Herşey çok iyiydi. İlk iletişime geçtiğim andan ürün yapılıp tekrar elime gelene kadar en ufak bir sorun yaşamadım. Televizyonum tamirdeyken yerine iyi bir tv bıraktı sağolsun. İletişimde şeffaf, işinde iyi artık herkese gönül rahatlığıyla önereceğim bir yer.",
    link: "https://share.google/aalYzl5XiivwzeD00"
  },
  {
    author: "Onur Dindaroğlu",
    text: "Çok ilgili ve güler yüzlü insanlar. Tam zamanında geliyorlar ve işlerini tam anlamıyla biliyorlar. Kesinlikle herkese tavsiye ederim.",
    link: "https://share.google/NSVOK4MePnis6xr7U"
  },
  {
    author: "özay bektaş",
    text: "Mustafa çalışkanöztütk beye gerekten çok Teşekürler tvdeki arızamı en kısa sürede onarıp Teslim etti bundan sonra güvenle çalışacağım bir servis buldum ellerine sağlık tekrardan 🙏",
    link: "https://share.google/sV11wf0FCHizDwope"
  },
  {
    author: "Ceyhun ertural",
    text: "İlgi ve alakaları için teşekkür ederim. Kısa sürede arızayı çözüp tamir ettiler ve mağduriyet yaşamayalım diye konsinye Tv de verdiler tamir süresi boyunca",
    link: "https://share.google/6URYXzMdm8u9e8XxN"
  },
  {
    author: "MrKaraburc",
    text: "cok profesyonel. bu devirde istanbulda işini ehliyle yapan birilerini bulmak cok zor. hem fahiş fiyat verip hem baştan savma is yapanlardan cok daha uyguna ve kaliteli bir hizmet aldim.",
    link: "https://share.google/VhCR0O9BP6eU1Keuh"
  },
  {
    author: "Kerem Baş",
    text: "Öncelikle güler yüzlü temiz dürüst ve ilgili olması önceliğinin para degil hizmet ve iletişime odaklanması doğru tercih yaptığımızın vermiş olduğu huzur ve güven hissi tekrardan emeklerine sağlık çok teşekkür ederiz.",
    link: "https://share.google/8cWE8oayQyjkrKMIr"
  },
  {
    author: "rıdvan öz",
    text: "Televizyonum hızlı bir şekilde yapılıp teslim edildi. En ufak bir problem yaşamadım. Mustafa’ya çok teşekkürler",
    link: "https://share.google/ixEIOlllRh97mzPxj"
  },
  {
    author: "Uğur Önal",
    text: "Samsung 65inch Qled tvmizin ledlerindeki arizayi kısa surede en uygun fiyata çöźdüler.Cok memnun kaldım hizmetlerinden kesinlikle tavsiyeder",
    link: "https://share.google/zdVmXRSNLlr0wc5vh"
  },
  {
    author: "Kemal Bostancioglu",
    text: "Son derece profesyonel bir işletme. Televizyon tamiri sürecinde evden teslim aldılar ve güzel bir Tv bıraktılar. Düzgün ve çalışkan bir ekip",
    link: "https://share.google/yMEnamA4NfvrnMbWk"
  },
  {
    author: "ebru ertural",
    text: "mustafa kardeşime çok teşekkür ederim ❤ daha önce çok yerden hizmet aldım ama böylesini ilk defa gördüm diyebilirim. ledlerim değişecekti televizyonu geldi aldı ve gelirken de madur olmayalım diye bizlere geçici televizyon getirdi eline",
    link: "https://share.google/yK8y6gV9opZqGsGwz"
  },
  {
    author: "Seda karagöz",
    text: "Aldığımız hizmeti layığıyla yerine getirdiği ve mağdur durumda bırakmamak adına geçici TV bırakması 10/10 Luk hizmet ,ciddi anlamda sonuna kadar güven veren bir hizmet daha önce karşılaşmadım ,kendilerine çok teşekkür ederiz☺️",
    link: "https://share.google/duVRY4hB3xW1gd6xS"
  },
  {
    author: "kutluhan önal",
    text: "Fiyat avantajı yanısıra, tamir sürecinde eve TV bırakması, evden TV alması uygun fiyatı ve sözüne uygun hareket etmesi işine olan saygısı nedeniyle tavsiye ediyorum",
    link: "https://share.google/3mwpqPJEaFhhTHq8P"
  },
  {
    author: "gökmen",
    text: "Kırılan Tv ekranını tamir edilmesi için birkaç hizmet noktası ile görüştüğümde burda yapılan olumlu yorumlar tercih sebebim oldu. Furkan elektrik nezdinde Mustafa ve kardeşine çok teşekkür ederim. Anında müdahale ederek üstün hizmet anlayışlarını ortaya koydular.",
    link: "https://share.google/7wn60acjecSYOeQvY"
  },
  {
    author: "Güray Erkan",
    text: "Öncelikle hiç tereddüt etmeden güvenebilirsiniz. servisten aldığız fiyatin üçte birine çok kaliteli hizmet aldık. 65 inc Televizyonu alıp teslim ederlerken kutulu ve köpüklü tv kutusunda getirip götürdüler, hicbir sekilde zarar görmedi.",
    link: "https://share.google/UsdvN6EBrb9QV9qQ8"
  },
  {
    author: "Meryem Albayrak",
    text: "Televizyonumuzda reflektör arızası vardı. Bizimle harika bir iletişim kurdu. Ne olduğunu ne yapılacağını anlattı. 2 gün içinde tvmizi tamir edip getirdi. Tvmiz tamirdeyken bize televizyon bıraktı zorluk çekmeyelim diye. Herkese gönülden tavsiye ederim. Bereketli kazançlarınız olsun.",
    link: "https://share.google/mTxPbsFuamFqkcYPi"
  },
  {
    author: "vedat deniz",
    text: "TV'mdeki LED arızası nedeniyle başvurduğum bu firmadan aldığım hizmetten son derece memnun kaldım. Arızalı TV’mi evimden alıp, yerine geçici olarak kullanmam için televizyon getirdiler. Bu kadar düşünceli ve çözüm odaklı bir hizmet",
    link: "https://share.google/UkyKr0FqZk2HJc5XP"
  }
];

export default function Home() {
  const whatsappUrl = "https://wa.me/905350577188?text=Merhaba,%20TV%20panel%20değişimi%20hakkında%20bilgi%20ve%20fiyat%20almak%20istiyorum.";

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 md:pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-sm font-semibold mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span>Türkiye'nin ve İstanbul'un Lider Panel Değişim Merkezi</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                <span className="text-brand-blue">İstanbul TV Ekran Tamiri</span> ve Profesyonel Yenileme Çözümleri.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Yüksek maliyetli yeni cihaz yatırımlarına gerek kalmadan; kırık, sıvı temaslı veya arızalı televizyon ekranlarınızı %100 orijinal yedek parçalar ve uzman laboratuvar işçiliği ile ilk günkü standartlarına kavuşturuyoruz.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 inline-block mb-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 rounded-full bg-brand-blue px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-500/30 hover:bg-brand-darkblue hover:scale-105 transition-all duration-300"
                >
                  <PhoneCall className="h-5 w-5 animate-pulse" />
                  WhatsApp'tan Anında Fiyat Al
                </a>
              </div>

              {/* Feature Highlights including Temporary TV */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 flex items-start gap-4">
                <div className="bg-amber-100 p-2 rounded-lg shrink-0 mt-1">
                  <MonitorPlay className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 text-lg">Konsantrasyonunuz Bozulmasın: İkame TV Hizmeti!</h4>
                  <p className="text-amber-800 text-sm mt-1">
                    Televizyonunuzu atölyemize alırken, onarım süreci boyunca mağdur olmamanız için size <strong>ücretsiz geçici bir televizyon (İkame TV)</strong> bırakıyoruz. Kendi televizyonunuz orijinal paneliyle onarılıp teslim edildiğinde, ikame cihazımızı geri teslim alıyoruz. Eğlenceniz asla yarım kalmaz!
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span>Saniyeler İçinde WhatsApp Üzerinden Fiyat Teklifi</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-500" />
                  <span>%100 Garantili Orijinal Onarım</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
              <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/new_generation_broken_tv.png"
                  alt="Yeni Nesil Kırık Ekranlı TV"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded inline-block mb-2 uppercase tracking-wide">Kırık Panel Tespiti</div>
                  <p className="font-medium opacity-90 text-sm md:text-base">Görseldeki gibi içten kırık (mürekkep akması) olan ekranlar, atölyemizde %100 orijinal yenisi ile değiştirilmektedir.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Marquee */}
      <section className="bg-slate-900 py-10 overflow-hidden border-y border-slate-800">
        <div className="flex w-[200%] md:w-full overflow-hidden group/marquee">
          <div className="flex animate-[marquee_120s_linear_infinite] group-hover/marquee:[animation-play-state:paused] whitespace-nowrap gap-6 px-3 items-stretch">
            {reviews.map((review, i) => (
              <div key={`m1-${i}`} className="flex flex-col gap-3 bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-700/80 transition-colors cursor-default group w-[320px] shrink-0 whitespace-normal">
                <div className="flex text-amber-400 text-lg">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-slate-200 font-medium text-sm leading-relaxed italic line-clamp-4">"{review.text}"</p>
                <div className="mt-auto pt-4 border-t border-slate-700/50 flex justify-between items-center">
                  <span className="text-slate-400 font-semibold text-xs uppercase tracking-wider transition-colors">{review.author}</span>
                  <span className="text-brand-blue/50 text-xs">Google Yorumu</span>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless looping */}
          <div className="flex animate-[marquee_120s_linear_infinite] group-hover/marquee:[animation-play-state:paused] whitespace-nowrap gap-6 px-3 items-stretch" aria-hidden="true">
            {reviews.map((review, i) => (
              <div key={`m2-${i}`} className="flex flex-col gap-3 bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-700/80 transition-colors cursor-default group w-[320px] shrink-0 whitespace-normal">
                <div className="flex text-amber-400 text-lg">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-slate-200 font-medium text-sm leading-relaxed italic line-clamp-4">"{review.text}"</p>
                <div className="mt-auto pt-4 border-t border-slate-700/50 flex justify-between items-center">
                  <span className="text-slate-400 font-semibold text-xs uppercase tracking-wider transition-colors">{review.author}</span>
                  <span className="text-brand-blue/50 text-xs">Google Yorumu</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-6 tracking-tight">TV Tamir ve Panel Değişimi Hizmetlerimiz</h2>
            <p className="text-lg text-slate-600">
              Televizyon ekranlarında karşılaşılan en yaygın donanımsal arızalara kesin ve garantili çözümler sunuyoruz. Ekranı değiştirmek, yeni TV almaktan çok daha ekonomiktir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/hizmetler/kirik-ekran-tamiri" className="block bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-brand-blue/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">Kırık & Çatlak Ekranlar</h3>
              <p className="text-slate-600 leading-relaxed">
                Fiziksel darbe sonucu kırılan, çatlayan veya içten mürekkep dağılması yaşayan televizyon panelleri onarılamaz. Tamamen orijinal, kutulu sıfır panel değişimi ile sorunu kalıcı olarak çözüyoruz.
              </p>
            </Link>

            {/* Card 2 */}
            <Link href="/hizmetler/tv-sivi-temasi-onarimi" className="block bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-brand-blue/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Droplets className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">Sıvı Teması & Oksitlenme</h3>
              <p className="text-slate-600 leading-relaxed">
                Ekran temizliği sırasında panelin alt kısmına kaçan sıvı veya nem, COF flex kablolarını çürütür ve kısa devreye yol açar. Gelişmiş onarım veya tamamen yeni panel ile profesyonel bir yenileme sağlıyoruz.
              </p>
            </Link>

            {/* Card 3 */}
            <Link href="/hizmetler/dikey-ve-yatay-cizgiler" className="block bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-brand-blue/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center mb-6">
                <Grid className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">Dikey & Yatay Çizgiler</h3>
              <p className="text-slate-600 leading-relaxed">
                Ekranda aniden beliren renkli dikey çizgiler, yatay bantlar veya görüntünün ikiye bölünmesi gibi matris arızaları için yüksek kesinlikte tespit yapıyor ve orijinal parça ile garantili değiştiriyoruz.
              </p>
            </Link>

            {/* Card 4 - New */}
            <Link href="/hizmetler/led-bar-degisimi" className="block relative overflow-hidden bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md hover:border-brand-blue/50 transition-all duration-300 group">
              <div className="absolute top-0 right-0 bg-brand-blue text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">En İyi Özelliğimiz</div>
              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MonitorPlay className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">LED Değişimi</h3>
              <p className="text-slate-600 leading-relaxed">
                Sadece panel değil, LED değişimi de atölyemizde özenle yapılmaktadır. LED reflektörü ile tamir edilmesi gereken cihazlar, bu profesyonel prosedüre uygun şekilde, <strong className="text-brand-blue">özel reflektör kullanılarak</strong> onarılmaktadır.
              </p>
            </Link>

            {/* Card 5 - New */}
            <Link href="/hizmetler/tv-panel-degisimi" className="block bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-brand-blue/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">Orijinal Panel Değişimi</h3>
              <p className="text-slate-600 leading-relaxed">
                Arızalı, ömrünü yitirmiş veya onarılamayacak kadar hasar görmüş televizyon ekranları için birebir orijinal ve garantili panel değişim hizmeti sunuyoruz.
              </p>
            </Link>

            {/* Card 6 - New */}
            <Link href="/hizmetler/anakart-tamiri" className="block bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-brand-blue/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-6">
                <Wrench className="w-7 h-7 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">Anakart & Besleme Tamiri</h3>
              <p className="text-slate-600 leading-relaxed">
                Televizyon hiç açılmıyor mu? Işık yanıp sönüyor mu? Güç kartı (besleme) ve anakart (mainboard) arızalarını laboratuvar ortamında mikroskobik düzeyde tamir ediyoruz.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Panelix Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <ShieldCheck className="w-10 h-10 text-brand-blue mb-4" />
                  <h4 className="text-lg font-bold text-slate-900 mb-2">%100 Orijinal</h4>
                  <p className="text-slate-600 text-sm">Fabrikasyon sıfır paneller ve A sınıfı parçalar kullanıyoruz.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl mt-8">
                  <Wrench className="w-10 h-10 text-brand-blue mb-4" />
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Uzman İşçilik</h4>
                  <p className="text-slate-600 text-sm">Sektörde yılların getirdiği tecrübe ile en hassas onarımları yapıyoruz.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <MonitorPlay className="w-10 h-10 text-brand-blue mb-4" />
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Her Markaya Uygun</h4>
                  <p className="text-slate-600 text-sm">Samsung, LG, Philips, Sony gibi tüm global markalara tam destek.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl mt-8">
                  <Clock className="w-10 h-10 text-brand-blue mb-4" />
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Hızlı Teslimat</h4>
                  <p className="text-slate-600 text-sm">Günlerce bekletmeden cihazınızı en kısa sürede teslim ediyoruz.</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">İstanbul TV Tamiri İçin Neden Panelix'i Tercih Etmelisiniz?</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Panelix olarak sadece bir tamir servisi değil, televizyonunuzun ömrünü uzatan profesyonel bir "Yenileme Merkezi"yiz. Piyasada sıkça rastlanan düşük kaliteli yan sanayi paneller veya kısa süreli geçici çözümler yerine, yalnızca sertifikalı ve <strong className="text-slate-900">100% orijinal paneller</strong> kullanıyoruz.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Amacımız; kırık ekran veya sıvı teması sebebiyle yeni bir televizyon almak zorunda kalan tüketicilere ekonomik, sürdürülebilir ve güvenilir bir alternatif sunmaktır. Alanında uzman teknisyenlerimiz, en son teknoloji cihazlarla laboratuvar ortamında temiz ve hassas bir işçilik sergileyerek televizyonunuzun görüntü kalitesini ilk günkü haline getirir. Panelix güvencesiyle onarılan cihazlarınızda asla renk solması, piksel kaybı veya tepki gecikmesi yaşamazsınız. Tam şeffaflık ilkemizle parça modelinden fiyatlandırmaya kadar tüm aşamalarda sizi bilgilendirir, sürpriz maliyetler çıkarmayız.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 rounded-full border-2 border-brand-blue text-brand-blue px-8 py-3 text-lg font-bold hover:bg-slate-50 transition-colors"
              >
                TV Modeliniz İçin Stok Sorun
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Supported Brands Section */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Desteklediğimiz Markalar</h2>
            <p className="text-slate-600">En popüler televizyon markaları için özel onarım merkezimiz mevcuttur. Detaylı bilgi için markanızı seçin.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {['Samsung', 'LG', 'Philips', 'Sony', 'Vestel', 'Beko', 'Arçelik', 'TCL', 'Toshiba', 'Grundig'].map((brand) => (
              <Link
                key={brand}
                href={`/markalar/${brand.toLowerCase()}`}
                className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-brand-blue hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-xl font-bold text-slate-600 group-hover:text-brand-blue">{brand}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

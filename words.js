/**
 * Kelime Blok - Türkçe Kelime Havuzu
 * 5, 6 ve 7 harfli yaygın Türkçe kelimeler ve anlamları/ipuçları
 */

const WORD_DATABASE = {
    5: [
        {
                "word": "KALEM",
                "clue": "Yazı yazmaya veya çizim yapmaya yarayan araç"
        },
        {
                "word": "KİTAP",
                "clue": "Basılı ya da el yazılı sayfaların ciltlenmiş hali"
        },
        {
                "word": "DENİZ",
                "clue": "Yer kabuğunun çukur bölümlerini kaplayan tuzlu su kütlesi"
        },
        {
                "word": "GÜNEŞ",
                "clue": "Gezegen sistemimizin merkezinde yer alan ışık ve ısı kaynağı"
        },
        {
                "word": "ÇİÇEK",
                "clue": "Bitkilerin üreme organlarını taşıyan renkli ve kokulu bölümü"
        },
        {
                "word": "BULUT",
                "clue": "Gökyüzünde asılı su damlacıkları veya buz kristalleri yığını"
        },
        {
                "word": "MASAL",
                "clue": "Genellikle olağanüstü olayları anlatan halk öyküsü"
        },
        {
                "word": "KAHVE",
                "clue": "Kavrulup çekilmiş çekirdeklerinden yapılan sıcak içecek"
        },
        {
                "word": "ŞEHİR",
                "clue": "Nüfusun büyük bölümünün ticaret ve sanayiyle uğraştığı yerleşim"
        },
        {
                "word": "NEHİR",
                "clue": "Genellikle denize veya göle dökülen büyük akarsu"
        },
        {
                "word": "BAHÇE",
                "clue": "Çiçek, ağaç veya sebze yetiştirilen çevrili toprak parçası"
        },
        {
                "word": "RADYO",
                "clue": "Ses dalgalarını elektrik dalgalarına çevirip ileten cihaz"
        },
        {
                "word": "TARİH",
                "clue": "Geçmişte yaşamış insan topluluklarının eylemlerini inceleyen bilim"
        },
        {
                "word": "MÜZİK",
                "clue": "Seslerin belirli bir ritim ve ahenkle düzenlenmesi sanatı"
        },
        {
                "word": "RESİM",
                "clue": "Varlıkların ve duyguların çizgiler ve renklerle yansıtılması"
        },
        {
                "word": "SABAH",
                "clue": "Günün başlangıcı, güneşin doğduğu ilk saatler"
        },
        {
                "word": "AKŞAM",
                "clue": "Güneşin batışından gecenin başlangıcına kadar geçen zaman"
        },
        {
                "word": "BEYAZ",
                "clue": "Kırmızı, yeşil ve mavi ışıkların karışımı olan renk, ak"
        },
        {
                "word": "SİYAH",
                "clue": "Işığı bütünüyle emen, en koyu renk, kara"
        },
        {
                "word": "YEŞİL",
                "clue": "Mavi ile sarının karışımından oluşan, doğanın hâkim rengi"
        },
        {
                "word": "CEVAP",
                "clue": "Bir soruya, isteğe veya söze karşılık verilen söz veya yazı"
        },
        {
                "word": "SORGU",
                "clue": "Bir suçun aydınlatılması için yapılan etraflı inceleme"
        },
        {
                "word": "HAYAT",
                "clue": "Doğumdan ölüme kadar geçen canlılık süresi, yaşam"
        },
        {
                "word": "SEVGİ",
                "clue": "İnsanı bir şeye veya bir kimseye bağlayan sıcak duygu"
        },
        {
                "word": "BARIŞ",
                "clue": "Savaşın ve çatışmanın olmadığı huzur ortamı"
        },
        {
                "word": "DALGA",
                "clue": "Deniz ve göllerde rüzgarın etkisiyle oluşan su kıvrımı"
        },
        {
                "word": "YAĞIŞ",
                "clue": "Atmosferdeki su buharının yağmur veya kar olarak düşmesi"
        },
        {
                "word": "FİKİR",
                "clue": "Düşünce yoluyla ulaşılan kavram, görüş"
        },
        {
                "word": "BİLGİ",
                "clue": "Öğrenme veya araştırma yoluyla elde edilen gerçek"
        },
        {
                "word": "KURAL",
                "clue": "Davranışlara yön veren ve uyulması gereken ilke"
        },
        {
                "word": "DÜZEN",
                "clue": "Belli bir yönteme göre kurulmuş uyumlu durum"
        },
        {
                "word": "GÖREV",
                "clue": "Bir kimsenin yapmakla yükümlü olduğu iş, vazife"
        },
        {
                "word": "KULÜP",
                "clue": "Kişilerin ortak ilgi alanlarında toplandığı dernek"
        },
        {
                "word": "DÜNYA",
                "clue": "Güneş Sistemi'nde üzerinde yaşadığımız gezegen"
        },
        {
                "word": "İNSAN",
                "clue": "Düşünme ve konuşma yeteneği olan canlı varlık"
        },
        {
                "word": "ÇOCUK",
                "clue": "Küçük yaştaki erkek veya kız insan"
        },
        {
                "word": "GÜÇLÜ",
                "clue": "Kuvveti ve etkisi yüksek olan"
        },
        {
                "word": "MUTLU",
                "clue": "İçinde sevinç ve huzur duyan, mesut"
        },
        {
                "word": "HIZLI",
                "clue": "Kısa zamanda çok yol alan veya iş yapan, süratli"
        },
        {
                "word": "YAVAŞ",
                "clue": "Hızı az olan, acele etmeyen"
        },
        {
                "word": "SICAK",
                "clue": "Isısı yüksek olan, soğuk karşıtı"
        },
        {
                "word": "SOĞUK",
                "clue": "Isısı düşük olan, sıcak karşıtı"
        },
        {
                "word": "TEMİZ",
                "clue": "Kirli veya lekeli olmayan, arı"
        },
        {
                "word": "KUTLU",
                "clue": "Uğurlu, bereketli, mübarek"
        },
        {
                "word": "CESUR",
                "clue": "Korkusuz, yürekli, atılgan"
        },
        {
                "word": "GÜZEL",
                "clue": "Göze veya zihne hoş gelen, estetik"
        },
        {
                "word": "BÜYÜK",
                "clue": "Boyutları benzerlerinden fazla olan"
        },
        {
                "word": "KÜÇÜK",
                "clue": "Boyutları veya hacmi az olan, ufak"
        },
        {
                "word": "ZAMAN",
                "clue": "Olayların birbirini izlediği sonsuz süre, vakit"
        },
        {
                "word": "DAKİK",
                "clue": "Her şeyi tam vaktinde yapan kimse"
        },
        {
                "word": "SAHİL",
                "clue": "Deniz, göl veya nehir kıyısı"
        },
        {
                "word": "LİMAN",
                "clue": "Gemilerin barınmasına elverişli korunaklı kıyı"
        },
        {
                "word": "ORMAN",
                "clue": "Ağaçlarla ve yeşilliklerle kaplı geniş alan"
        },
        {
                "word": "KÖPRÜ",
                "clue": "İki yakayı birbirine bağlayan mimari yapı"
        },
        {
                "word": "ÇARŞI",
                "clue": "Dükkanların yan yana dizildiği alışveriş alanı"
        },
        {
                "word": "PAZAR",
                "clue": "Halkın toplanıp alışveriş yaptığı açık alan"
        },
        {
                "word": "EKMEK",
                "clue": "Tahıl unundan fırında pişirilen temel besin"
        },
        {
                "word": "MEYVE",
                "clue": "Bitkilerin çekirdekli, yenebilen sulu kısmı"
        },
        {
                "word": "SEBZE",
                "clue": "Yemek pişirmede veya salatada kullanılan bitkiler"
        },
        {
                "word": "TABAK",
                "clue": "Yemek koymaya yarayan yayvan kap"
        },
        {
                "word": "ÇATAL",
                "clue": "Yiyecekleri batırarak yemeye yarayan saplı gereç"
        },
        {
                "word": "KAŞIK",
                "clue": "Sıvı veya taneli yiyecekleri yemeye yarayan araç"
        },
        {
                "word": "BIÇAK",
                "clue": "Kesmeye yarayan keskin ağızlı alet"
        },
        {
                "word": "KUMAŞ",
                "clue": "İpliklerin dokunmasıyla oluşturulan bez"
        },
        {
                "word": "İPLİK",
                "clue": "Liflerin bükülmesiyle yapılan ince dokuma teli"
        },
        {
                "word": "MAKAS",
                "clue": "İki kesici kolu olan kesme aracı"
        },
        {
                "word": "DUVAR",
                "clue": "Binaları çevreleyen veya bölen düşey yapı"
        },
        {
                "word": "TAVAN",
                "clue": "Bir odanın üst kısmını kapatan yüzey"
        },
        {
                "word": "TABAN",
                "clue": "Bir mekanın üzerine basılan alt döşemesi"
        },
        {
                "word": "LAMBA",
                "clue": "Işık vermeye yarayan aydınlatma aleti"
        },
        {
                "word": "FENER",
                "clue": "Taşınabilir ışık kaynağı veya deniz feneri"
        },
        {
                "word": "ÇANTA",
                "clue": "İçine eşya konulan saplı taşıma eşyası"
        },
        {
                "word": "KEMER",
                "clue": "Pantolonun düşmemesi için bele takılan şerit"
        },
        {
                "word": "ŞAPKA",
                "clue": "Başa giyilen çeşitli biçimlerdeki örtü"
        },
        {
                "word": "ÇORAP",
                "clue": "Ayağa giyilen örgü veya kumaş giysi"
        },
        {
                "word": "MİMAR",
                "clue": "Yapıların tasarımını ve projesini yapan uzman"
        },
        {
                "word": "YAZAR",
                "clue": "Edebi veya düşünsel eserler kaleme alan kişi"
        },
        {
                "word": "AKTÖR",
                "clue": "Sinema veya tiyatroda rol canlandıran oyuncu"
        },
        {
                "word": "PİLOT",
                "clue": "Hava taşıtlarını sevk ve idare eden kişi"
        },
        {
                "word": "HAKEM",
                "clue": "Karşılaşmaları kurallara uygun yöneten tarafsız kişi"
        },
        {
                "word": "POLİS",
                "clue": "Kamu güvenliğini sağlamakla görevli kolluk gücü"
        },
        {
                "word": "ASKER",
                "clue": "Yurdu savunmakla görevli ordunun bir neferi"
        },
        {
                "word": "ÇEKİÇ",
                "clue": "Çivi çakmaya veya madenleri dövmeye yarayan çelik alet"
        },
        {
                "word": "KAĞIT",
                "clue": "Üzerine yazı yazılan ince selüloz yaprak"
        },
        {
                "word": "KAVUN",
                "clue": "Sarı renkli, tatlı ve sulu bostan meyvesi"
        },
        {
                "word": "ARMUT",
                "clue": "Dip kısmı geniş, sap kısmı dar tatlı meyve"
        },
        {
                "word": "VİŞNE",
                "clue": "Kiraza benzeyen mayhoş kırmızı meyve"
        },
        {
                "word": "KİRAZ",
                "clue": "Kırmızı veya sarı renkli, etli çekirdekli meyve"
        },
        {
                "word": "ÇİLEK",
                "clue": "Yüzeyinde çekirdekleri olan kırmızı kokulu meyve"
        },
        {
                "word": "CEVİZ",
                "clue": "Sert kabuklu, içi beyne benzeyen yağlı yemiş"
        },
        {
                "word": "BADEM",
                "clue": "Sert kabuklu, içi değerli yağlı tohum"
        },
        {
                "word": "HUZUR",
                "clue": "Ruhsal dinginlik ve rahatlık hali"
        },
        {
                "word": "GURUR",
                "clue": "Övünç, kıvanç veya kendini beğenme duygusu"
        },
        {
                "word": "YÜREK",
                "clue": "Vücuda kan pompalayan organ, kalp veya cesaret"
        },
        {
                "word": "KANAT",
                "clue": "Kuşların ve uçakların uçmasını sağlayan organ veya yapı"
        },
        {
                "word": "MELEK",
                "clue": "İyiliğin ve masumiyetin sembolü sayılan nurani varlık"
        },
        {
                "word": "DİLEK",
                "clue": "Gerçekleşmesi istenen arzu, temenni"
        },
        {
                "word": "SOKAK",
                "clue": "Evlerin dizildiği, caddeden dar yerleşim yolu"
        },
        {
                "word": "BÖCEK",
                "clue": "Eklem bacaklılar şubesinden küçük hayvan"
        },
        {
                "word": "ÇÖREK",
                "clue": "Az yağlı, hafif tatlı veya tuzlu unlu hamur işi"
        },
        {
                "word": "BALIK",
                "clue": "Suda solungaçlarıyla solunum yapan omurgalı hayvan"
        },
        {
                "word": "TAVUK",
                "clue": "Sülüngillerden, eti ve yumurtası için beslenen kümes hayvanı"
        },
        {
                "word": "HOROZ",
                "clue": "Tavukgillerin erkek olanı, sabahları ötüşüyle bilinen kuş"
        },
        {
                "word": "ÖRDEK",
                "clue": "Yassı gagalı, perdeli ayaklı su kuşu"
        },
        {
                "word": "KÖPEK",
                "clue": "Sadakatiyle bilinen evcil etçil memeli hayvan"
        },
        {
                "word": "GEYİK",
                "clue": "Erkeğinin başında dallı boynuzları olan otçul memeli"
        },
        {
                "word": "KAZAN",
                "clue": "İçinde yemek veya su kaynatılan büyük metal kap"
        },
        {
                "word": "CEZVE",
                "clue": "Türk kahvesi pişirmeye yarayan saplı küçük kap"
        },
        {
                "word": "TEPSİ",
                "clue": "Yiyecek ve içecek taşımaya yarayan düz kenarlı kap"
        },
        {
                "word": "KAVUZ",
                "clue": "Tahıl tanelerini saran kabuk"
        },
        {
                "word": "KORUK",
                "clue": "Henüz olgunlaşmamış ekşi üzüm"
        }
],
    6: [
        {
                "word": "GÖZLÜK",
                "clue": "Görme kusurlarını düzeltmeye veya ışıktan korumaya yarayan araç"
        },
        {
                "word": "YAPRAK",
                "clue": "Bitkilerin fotosentez ve solunum yapan yeşil organı"
        },
        {
                "word": "KAPLAN",
                "clue": "Kedigillerden, çizgili postu olan yırtıcı büyük memeli"
        },
        {
                "word": "TAVŞAN",
                "clue": "Uzun kulaklı, hızlı koşan sevimli memeli hayvan"
        },
        {
                "word": "SİNCAP",
                "clue": "Ağaçlarda yaşayan, kuyruğu kabarık kemirgen hayvan"
        },
        {
                "word": "KARTAL",
                "clue": "Gündüz yırtıcı kuşlarından, keskin gözlü büyük kuş"
        },
        {
                "word": "BÜLBÜL",
                "clue": "Güzel ve ahenkli ötüşüyle tanınan ötücü kuş"
        },
        {
                "word": "GEMİCİ",
                "clue": "Gemide çalışan görevli veya denizci"
        },
        {
                "word": "DOKTOR",
                "clue": "Hastalıkları teşhis ve tedavi eden tıp uzmanı"
        },
        {
                "word": "AVUKAT",
                "clue": "Hukuk davalarında kişileri savunan yargı mensubu"
        },
        {
                "word": "BERBER",
                "clue": "Saç ve sakal kesimi yapan meslek erbabı"
        },
        {
                "word": "GARSON",
                "clue": "Lokanta ve kafelerde servis yapan servis elemanı"
        },
        {
                "word": "YALÇIN",
                "clue": "Sarp, dik ve çıkılması güç kayalık"
        },
        {
                "word": "ÇİFTÇİ",
                "clue": "Toprağı ekip biçerek tarımla uğraşan kimse"
        },
        {
                "word": "BİLGİN",
                "clue": "Geniş ve derin ilmi bilgiye sahip kişi, alim"
        },
        {
                "word": "YARDIM",
                "clue": "Birine güç bir anında verilen destek veya katkı"
        },
        {
                "word": "DESTEK",
                "clue": "Bir şeyin yıkılmasını veya zorlanmasını engelleyen dayanak"
        },
        {
                "word": "SEVİNÇ",
                "clue": "İstenen bir şeyin gerçekleşmesiyle duyulan büyük neşe"
        },
        {
                "word": "DÜRÜST",
                "clue": "Doğruluktan ve adaletten ayrılmayan güvenilir kişi"
        },
        {
                "word": "GAYRET",
                "clue": "Bir hedefe ulaşmak için harcanan çaba, azim"
        },
        {
                "word": "BAŞARI",
                "clue": "Bir işte hedeflenen sonuca ulaşma durumu"
        },
        {
                "word": "FUTBOL",
                "clue": "On birer kişilik iki takım arasında topla oynanan oyun"
        },
        {
                "word": "BASKET",
                "clue": "Topu potadan geçirerek sayı yapılan takım sporu"
        },
        {
                "word": "YÜZMEK",
                "clue": "Su yüzeyinde veya içinde hareket ederek ilerlemek"
        },
        {
                "word": "KOŞUCU",
                "clue": "Koşu sporunu yapan veya hızlı koşan kişi"
        },
        {
                "word": "BOKSÖR",
                "clue": "Eldivenlerle ringde dövüşen sporcu"
        },
        {
                "word": "PUSULA",
                "clue": "Manyetik iğnesiyle yön gösteren seyrüsefer aracı"
        },
        {
                "word": "HARİTA",
                "clue": "Yeryüzünün belli bir ölçekle düzleme çizilmiş resmi"
        },
        {
                "word": "HEYKEL",
                "clue": "Taş, tunç veya kilden yapılan üç boyutlu plastik sanat eseri"
        },
        {
                "word": "SİNEMA",
                "clue": "Hareketli görüntüleri perdeye yansıtma sanatı"
        },
        {
                "word": "MAKALE",
                "clue": "Belli bir konuda bilgi ve görüş veren gazete/dergi yazısı"
        },
        {
                "word": "GAZETE",
                "clue": "Günlük olaylar hakkında haber veren basılı yayın"
        },
        {
                "word": "KLAVYE",
                "clue": "Üzerinde harf ve sembol tuşları bulunan giriş birimi"
        },
        {
                "word": "KAMERA",
                "clue": "Görüntü ve fotoğraf kaydetmeye yarayan aygıt"
        },
        {
                "word": "MEŞALE",
                "clue": "Ucunda reçineli madde yanan aydınlatma çubuğu"
        },
        {
                "word": "KANDİL",
                "clue": "İçinde yağ ve fitil bulunan eski aydınlatma aracı"
        },
        {
                "word": "PARFÜM",
                "clue": "Güzel koku yaymak için sürülen veya sıkılan kokulu sıvı"
        },
        {
                "word": "KARTON",
                "clue": "Kalın ve sert kağıt türü"
        },
        {
                "word": "SANDIK",
                "clue": "İçine giysi ve eşya koymaya yarayan kapaklı tahta kutu"
        },
        {
                "word": "DEFTER",
                "clue": "Üzerine yazı yazılan veya çizim yapılan bağlı yapraklar"
        },
        {
                "word": "CETVEL",
                "clue": "Düz çizgi çizmeye ve uzunluk ölçmeye yarayan dereceli araç"
        },
        {
                "word": "PERGEL",
                "clue": "Daire çizmeye ve açı ölçmeye yarayan iki kollu aygıt"
        },
        {
                "word": "KAYNAK",
                "clue": "Bir suyun veya bilginin fışkırdığı, çıktığı ilk yer"
        },
        {
                "word": "ŞELALE",
                "clue": "Büyük bir akarsuyun yüksekten köpürerek döküldüğü yer"
        },
        {
                "word": "KANYON",
                "clue": "Bir akarsuyun kireçtaşı kayaları oymasıyla oluşan dik vadi"
        },
        {
                "word": "MAĞARA",
                "clue": "Yer altında veya dağ yamaçlarında bulunan doğal oyuk"
        },
        {
                "word": "VOLKAN",
                "clue": "Magmanın yer kabuğundan püskürdüğü yanardağ"
        },
        {
                "word": "KORUMA",
                "clue": "Tehlike, zarar veya saldırıya karşı önlem alma"
        },
        {
                "word": "AKRABA",
                "clue": "Aynı soydan veya kan bağından gelen kimseler"
        },
        {
                "word": "YILDIZ",
                "clue": "Gece gökyüzünde parıldayan gök cismi"
        },
        {
                "word": "TOPRAK",
                "clue": "Bitkilerin üzerinde kök saldığı yer örtüsü"
        },
        {
                "word": "BARDAK",
                "clue": "İçine su veya çay doldurulan cam eşya"
        },
        {
                "word": "ÇEKMEK",
                "clue": "Bir şeyi kendine veya geriye doğru sürüklemek"
        },
        {
                "word": "SÜRÜCÜ",
                "clue": "Taşıtı kullanan ve yönlendiren kimse"
        },
        {
                "word": "PİYANO",
                "clue": "Tuşlu ve telli büyük müzik aleti"
        },
        {
                "word": "MEYDAN",
                "clue": "Geniş, açık alan veya toplanma sahası"
        },
        {
                "word": "KAZANÇ",
                "clue": "Çalışma veya ticaret karşılığı elde edilen gelir"
        },
        {
                "word": "KARPUZ",
                "clue": "Dışı yeşil alacalı, içi kırmızı serinletici büyük yaz meyvesi"
        },
        {
                "word": "FINDIK",
                "clue": "Sert kabuklu, içi lezzetli ve besleyici Karadeniz yemişi"
        },
        {
                "word": "PETROL",
                "clue": "Yer altından çıkarılan hidrokarbon kaynaklı sıvı yakıt"
        },
        {
                "word": "BENZİN",
                "clue": "Otomobil motorlarında kullanılan akaryakıt türü"
        },
        {
                "word": "SANDAL",
                "clue": "Küçük deniz teknesi veya kokulu bir ağaç"
        },
        {
                "word": "BALKON",
                "clue": "Binaların dış duvarından taşan parmaklıklı açık alan"
        },
        {
                "word": "MUTFAK",
                "clue": "Yemeklerin hazırlandığı ve pişirildiği oda"
        },
        {
                "word": "ÇARŞAF",
                "clue": "Yatağın üstüne serilen geniş pamuklu bez"
        },
        {
                "word": "YORGAN",
                "clue": "Yatakta üzerine örtülen pamuk veya yün dolgulu örtü"
        },
        {
                "word": "MENDİL",
                "clue": "El, yüz veya burun silmeye yarayan küçük kumaş parçası"
        },
        {
                "word": "KRAVAT",
                "clue": "Gömlek yakasının altından geçirilip bağlanan boyun bağı"
        },
        {
                "word": "LASTİK",
                "clue": "Esnek ve su geçirmez kauçuk malzeme"
        },
        {
                "word": "MANTAR",
                "clue": "Nemli yerlerde veya ağaç gövdelerinde yetişen sporlu canlı"
        },
        {
                "word": "PIRASA",
                "clue": "Soğangillerden, yeşil yapraklı uzun saplı kış sebzesi"
        },
        {
                "word": "GÖMLEK",
                "clue": "Vücudun üst kısmına giyilen düğmeli giysi"
        },
        {
                "word": "TERLİK",
                "clue": "Genellikle ev içinde giyilen hafif ve arkasız ayakkabı"
        },
        {
                "word": "MİNDER",
                "clue": "Yere veya koltuğa konulan yumuşak oturma yastığı"
        },
        {
                "word": "KANEPE",
                "clue": "Birkaç kişinin oturabileceği geniş döşemeli oturak"
        },
        {
                "word": "TABURE",
                "clue": "Arkalıksız ve kolçaksız küçük oturak"
        },
        {
                "word": "VİCDAN",
                "clue": "Kişiyi doğru ile yanlışı ayırt etmeye yönelten iç ses"
        },
        {
                "word": "DOSTÇA",
                "clue": "İçten, samimi ve arkadaşça yaklaşımla"
        },
        {
                "word": "CÖMERT",
                "clue": "Esirgemeden, bolca veren ve yardım eden kimse"
        },
        {
                "word": "KORKAK",
                "clue": "Tehlikelerden çabucak ürken, cesaretsiz"
        },
        {
                "word": "ÇELEBİ",
                "clue": "Görgülü, terbiyeli, olgun ve nazik kimse"
        },
        {
                "word": "YAZLIK",
                "clue": "Yaz mevsiminde oturulan veya tatil yapılan yer"
        },
        {
                "word": "KIŞLIK",
                "clue": "Kış mevsiminde kullanılmak üzere hazırlanan mekan"
        },
        {
                "word": "GÜNLÜK",
                "clue": "Günü gününe tutulan hatıra notları defteri"
        },
        {
                "word": "YILLIK",
                "clue": "Bir yıla ait faaliyetleri gösteren yayın veya rapor"
        },
        {
                "word": "MERSİN",
                "clue": "Akdeniz sahilinde yer alan liman kenti"
        },
        {
                "word": "EDİRNE",
                "clue": "Selimiye Camii ile ünlü tarihi sınır kenti"
        },
        {
                "word": "MANİSA",
                "clue": "Mesir macunu ve üzümüyle bilinen Ege kenti"
        },
        {
                "word": "YALOVA",
                "clue": "Termal kaplıcalarıyla ünlü Marmara ili"
        },
        {
                "word": "ARTVİN",
                "clue": "Doğu Karadeniz'de yemyeşil doğasıyla ünlü ilimiz"
        },
        {
                "word": "BİNGÖL",
                "clue": "Yüzen adalarıyla bilinen Doğu Anadolu ili"
        },
        {
                "word": "BİTLİS",
                "clue": "Tarihi kalesi ve büryan kebabıyla ünlü şehir"
        },
        {
                "word": "MARDİN",
                "clue": "Tarihi taş konakları ve zengin kültürüyle ünlü kent"
        },
        {
                "word": "BARTIN",
                "clue": "Amasra ilçesiyle Karadeniz kıyısındaki ilimiz"
        },
        {
                "word": "ÇELTİK",
                "clue": "Kabuğu ayıklanmamış pirinç tanesi"
        },
        {
                "word": "SÜZGEÇ",
                "clue": "Sıvıları katı maddelerden ayırmaya yarayan delikli araç"
        },
        {
                "word": "SÜNGER",
                "clue": "Suyu emme özelliği yüksek gözenekli temizlik gereci"
        },
        {
                "word": "ÇAYDAN",
                "clue": "Çay demlemekte kullanılan iki katlı ibrik"
        },
        {
                "word": "KAZMAÇ",
                "clue": "Toprağı kazmaya yarayan sivri uçlu demir alet"
        }
],
    7: [
        {
                "word": "PENCERE",
                "clue": "Binalarda ışık ve hava girmesini sağlayan camlı açıklık"
        },
        {
                "word": "KARYOLA",
                "clue": "Üzerine yatak serilen ayaklı mobilya iskeleti"
        },
        {
                "word": "KORİDOR",
                "clue": "Binalarda odaları birbirine bağlayan dar ve uzun geçit"
        },
        {
                "word": "KUMANDA",
                "clue": "Cihazları uzaktan kontrol etmeye yarayan küçük alet"
        },
        {
                "word": "TELEFON",
                "clue": "Ses ve veri iletişimini uzak mesafelere aktaran aygıt"
        },
        {
                "word": "ANAHTAR",
                "clue": "Kilitleri açıp kapamaya yarayan metal gereç"
        },
        {
                "word": "KİLİTLİ",
                "clue": "İçine girilemeyecek şekilde kapatılmış olan"
        },
        {
                "word": "TRENLER",
                "clue": "Raylar üzerinde lokomotifin çektiği vagon dizisi"
        },
        {
                "word": "GÜVENLİ",
                "clue": "Tehlikelerden uzak, emniyetli ve korunaklı durum"
        },
        {
                "word": "KODLAMA",
                "clue": "Bilgisayara talimat vermek için yazılım yazma süreci"
        },
        {
                "word": "ROBOTİK",
                "clue": "Otomatik makineler ve yapay zeka tasarlayan mühendislik dalı"
        },
        {
                "word": "GENETİK",
                "clue": "Kalıtım ve canlıların genetik özelliklerini inceleyen bilim"
        },
        {
                "word": "FİZİKÇİ",
                "clue": "Madde ve enerjinin doğasını inceleyen bilim insanı"
        },
        {
                "word": "FELSEFE",
                "clue": "Varlığın ve bilginin kökenini araştıran düşünce disiplini"
        },
        {
                "word": "ŞAİRLİK",
                "clue": "Şiir yazma yeteneği ve sanatı"
        },
        {
                "word": "YARIŞMA",
                "clue": "Üstünlüğü belirlemek amacıyla düzenlenen organizasyon"
        },
        {
                "word": "DERSLİK",
                "clue": "Okullarda öğrencilerin ders gördüğü sınıf ortamı"
        },
        {
                "word": "ÖĞRENCİ",
                "clue": "Bir okul veya kurumda bilgi edinen kimse"
        },
        {
                "word": "DİPLOMA",
                "clue": "Bir okulu bitirene verilen resmi başarı belgesi"
        },
        {
                "word": "ÇALIŞMA",
                "clue": "Bir hedefe varmak için bedenen veya zihnen harcanan emek"
        },
        {
                "word": "EĞLENCE",
                "clue": "Neşeli ve hoşça vakit geçirme durumu"
        },
        {
                "word": "KUTLAMA",
                "clue": "Önemli bir günü veya başarıyı sevinçle anma töreni"
        },
        {
                "word": "ARMAĞAN",
                "clue": "Birini sevindirmek için verilen hediye, ödül"
        },
        {
                "word": "DOSTLUK",
                "clue": "İçten, karşılıksız ve güven dolu arkadaşlık bağı"
        },
        {
                "word": "SADAKAT",
                "clue": "İçten bağlılık, vefa ve sözünde durma erdemi"
        },
        {
                "word": "CESARET",
                "clue": "Korku ve güçlükler karşısında yılgınlık göstermeme"
        },
        {
                "word": "HOŞGÖRÜ",
                "clue": "Farklı düşünce ve davranışları anlayışla karşılama"
        },
        {
                "word": "TUTUMLU",
                "clue": "Parasini ve kaynaklarını ölçülü harcayan kimse"
        },
        {
                "word": "HAMARAT",
                "clue": "Ev ve el işlerinde çok becerikli, çalışkan"
        },
        {
                "word": "YETENEK",
                "clue": "Bir şeyi kolayca yapabilme yetisi"
        },
        {
                "word": "BAŞKENT",
                "clue": "Bir ülkenin yönetim merkezi olan en önemli kenti"
        },
        {
                "word": "GÖKYÜZÜ",
                "clue": "Dünyayı çevreleyen atmosfer ve gök kubbe"
        },
        {
                "word": "YERYÜZÜ",
                "clue": "Üzerinde yaşadığımız yerkürenin yüzeyi"
        },
        {
                "word": "DENİZLİ",
                "clue": "Ege bölgesinde horozuyla meşhur ilimiz"
        },
        {
                "word": "AKDENİZ",
                "clue": "Türkiye'nin güneyini çevreleyen sıcak deniz"
        },
        {
                "word": "MANZARA",
                "clue": "Doğanın veya şehrin bakıldığında görünen güzel tablosu"
        },
        {
                "word": "KASIRGA",
                "clue": "Çok güçlü ve yıkıcı rüzgarlara sahip tropikal fırtına"
        },
        {
                "word": "HASTANE",
                "clue": "Hastaların muayene ve tedavi edildiği sağlık kuruluşu"
        },
        {
                "word": "LOKANTA",
                "clue": "Yemek pişirilip müşterilere servis edilen işletme"
        },
        {
                "word": "FABRİKA",
                "clue": "Ham maddelerin işlenip mamul hale getirildiği büyük sanayi tesisi"
        },
        {
                "word": "TİYATRO",
                "clue": "Sahnede seyirciler önünde oynanan dramatik sanat"
        },
        {
                "word": "KİTAPÇI",
                "clue": "Kitap satan veya kitap basımıyla uğraşan dükkan/kişi"
        },
        {
                "word": "FIRINCI",
                "clue": "Ekmek, pide ve unlu mamulleri pişirip satan usta"
        },
        {
                "word": "BALIKÇI",
                "clue": "Balık tutan veya balık satan esnaf"
        },
        {
                "word": "KESTANE",
                "clue": "Dikenli kabuğu içinde yetişen, közlenen nefis kış yemişi"
        },
        {
                "word": "DOMATES",
                "clue": "Kırmızı, etli ve sulu çok sevilen temel sebze"
        },
        {
                "word": "PATATES",
                "clue": "Yeraltında yetişen nişastalı temel besin maddesi"
        },
        {
                "word": "FASULYE",
                "clue": "Taze ya da kuru olarak pişirilen besleyici baklagil"
        },
        {
                "word": "BEZELYE",
                "clue": "Yeşil yuvarlak taneleri olan lezzetli sebze"
        },
        {
                "word": "ENGİNAR",
                "clue": "Papatyagillerden, karaciğer dostu yapraklı sebze"
        },
        {
                "word": "KEREVİZ",
                "clue": "Kökü ve sapı yemeklerde kullanılan aromatik kış sebzesi"
        },
        {
                "word": "ISPANAK",
                "clue": "Yeşil yapraklı, bol vitaminli ve mineralli sebze"
        },
        {
                "word": "ŞEMSİYE",
                "clue": "Yağmurdan veya güneşten korunmak için açılan siperlik"
        },
        {
                "word": "KASİYER",
                "clue": "Alışveriş merkezlerinde ödemeleri alan görevli"
        },
        {
                "word": "YARGICI",
                "clue": "Mahkemelerde adalet dağıtan hakim"
        },
        {
                "word": "KAPLICA",
                "clue": "Şifalı sıcak yer altı sularının bulunduğu tesis"
        },
        {
                "word": "GEMİLER",
                "clue": "Denizlerde yük ve yolcu taşıyan büyük su taşıtları"
        },
        {
                "word": "UÇAKLAR",
                "clue": "Havada motor gücüyle uçan kanatlı yolcu taşıtları"
        },
        {
                "word": "GÖZLEMC",
                "clue": "Olayları veya gökyüzünü inceleyip kaydeden kimse"
        },
        {
                "word": "GELENEK",
                "clue": "Kuşaktan kuşağa aktarılan kültürel alışkanlıklar"
        },
        {
                "word": "GÖRENEK",
                "clue": "Toplumda benimsenmiş olan davranış biçimleri"
        },
        {
                "word": "GELECEK",
                "clue": "Şimdiki zamandan sonra gelecek olan zaman dilimi"
        },
        {
                "word": "YOLCULU",
                "clue": "Bir yerden başka yere seyahat etme eylemi"
        },
        {
                "word": "YOLCUSU",
                "clue": "Yolculukta bulunan seyyah veya yolcu"
        },
        {
                "word": "YAYLACI",
                "clue": "Yaz aylarında serin yaylalara çıkan kimse"
        },
        {
                "word": "YAŞANTI",
                "clue": "Bireyin hayatı boyunca edindiği deneyimler bütünü"
        },
        {
                "word": "YAĞMURL",
                "clue": "Bulutlardan su damlalarının bolca düştüğü hava"
        },
        {
                "word": "GÜNEŞLİ",
                "clue": "Güneş ışınlarının ortalığı aydınlattığı açık hava"
        },
        {
                "word": "RÜZGARL",
                "clue": "Havanın şiddetle estiği fırtınalı durum"
        }
]
};

// 29 harfli Türk Alfabesi (Ekran köşesindeki alfabe paneli için)
const TURKISH_ALPHABET = [
    "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", 
    "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", 
    "U", "Ü", "V", "Y", "Z"
];

// Sanal Klavye dizilimi (Türkçe Q Klavye düzeninde)
const KEYBOARD_ROWS = [
    ["E", "R", "T", "Y", "U", "I", "O", "P", "Ğ", "Ü"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ş", "İ"],
    ["ENTER", "Z", "C", "V", "B", "N", "M", "Ö", "Ç", "SİL"]
];

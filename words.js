/**
 * Kelime Blok - Türkçe Kelime Havuzu
 * 5, 6 ve 7 harfli zengin Türkçe kelimeler ve anlamları/ipuçları
 * Toplam 1118 kelime (5 Harf: 361, 6 Harf: 351, 7 Harf: 406)
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
        },
        {
            "word": "ARABA",
            "clue": "Dört tekerlekli, motorlu veya binek kara taşıtı"
        },
        {
            "word": "METRO",
            "clue": "Şehir içi yer altı veya yer üstü demir yolu ağı"
        },
        {
            "word": "VAPUR",
            "clue": "Yolcu ve yük taşıyan buharlı veya motorlu deniz taşıtı"
        },
        {
            "word": "BALON",
            "clue": "Gazla şişirilen, havada uçabilen esnek küre"
        },
        {
            "word": "BÖREK",
            "clue": "Yufkadan yapılan, peynirli veya kıymalı fırın yemeği"
        },
        {
            "word": "ÇORBA",
            "clue": "Sıcak tüketilen, besleyici ve sulu başlangıç aşı"
        },
        {
            "word": "PİLAV",
            "clue": "Pirinç veya bulgur taneleriyle pişirilen temel yemek"
        },
        {
            "word": "DOLMA",
            "clue": "Biber veya patlıcanın harçla doldurularak pişirilen yemeği"
        },
        {
            "word": "TURŞU",
            "clue": "Sebzelerin tuzlu ve sirkeli suda olgunlaştırılmış hali"
        },
        {
            "word": "REÇEL",
            "clue": "Meyvelerin şekerle kaynatılmasıyla yapılan tatlı yiyecek"
        },
        {
            "word": "HELVA",
            "clue": "Un veya irmikle yapılan geleneksel tatlı"
        },
        {
            "word": "AYRAN",
            "clue": "Yoğurda su ve tuz katılarak hazırlanan ferahlatıcı içecek"
        },
        {
            "word": "KAŞAR",
            "clue": "İnek veya koyun sütünden yapılan sarımtırak sert peynir"
        },
        {
            "word": "GAZOZ",
            "clue": "Karbondioksitle gazlandırılmış şekerli soğuk meşrubat"
        },
        {
            "word": "KAKAO",
            "clue": "Çikolata ve tatlı yapımında kullanılan aromatik çekirdek tozu"
        },
        {
            "word": "ELMAS",
            "clue": "Karbon elementinin billurlaşmış en sert ve değerli hali"
        },
        {
            "word": "YAKUT",
            "clue": "Parlak kırmızı renkte, çok sert ve değerli süs taşı"
        },
        {
            "word": "SAFİR",
            "clue": "Mavi tonlarında, göz alıcı ve sert kıymetli süs taşı"
        },
        {
            "word": "SEDEF",
            "clue": "Deniz kabuklarının iç yüzeyini kaplayan yanar döner parlak tabaka"
        },
        {
            "word": "GÜMÜŞ",
            "clue": "Kolay işlenen, beyaz ve parlak değerli maden"
        },
        {
            "word": "BAKIR",
            "clue": "Elektrik ve ısı iletkenliği yüksek kızıl renkli metal"
        },
        {
            "word": "DEMİR",
            "clue": "Sanayide ve inşaatta en yaygın kullanılan manyetik sağlam metal"
        },
        {
            "word": "ÇELİK",
            "clue": "Demire karbon katılarak elde edilen mukavemetli alaşım"
        },
        {
            "word": "KALAY",
            "clue": "Paslanmayı önlemek için kaplamada kullanılan gümüşi yumuşak metal"
        },
        {
            "word": "BRONZ",
            "clue": "Bakır ile kalayın birleşiminden oluşan tunç alaşımı"
        },
        {
            "word": "ÇAKIL",
            "clue": "Akarsu yataklarında aşınarak yuvarlaklaşmış küçük taşlar"
        },
        {
            "word": "MAGMA",
            "clue": "Yerkürenin derinliklerinde bulunan erimiş akkor akışkan kayaç"
        },
        {
            "word": "DORUK",
            "clue": "Dağların en yüksek noktası, zirve"
        },
        {
            "word": "ZİRVE",
            "clue": "Bir dağın tepesi veya başarıda ulaşılan en üst aşama"
        },
        {
            "word": "YAYLA",
            "clue": "Dağlık bölgelerde yazın çıkılan serin ve geniş otlak"
        },
        {
            "word": "ÇAYIR",
            "clue": "Kendiliğinden yetişen yeşil ve gür otlarla kaplı sulak alan"
        },
        {
            "word": "TARLA",
            "clue": "Tahıl ve sebze yetiştirmek için sürülen toprak alanı"
        },
        {
            "word": "TOHUM",
            "clue": "Bitkilerin üremesini ve yeşermesini sağlayan tanecik"
        },
        {
            "word": "FİDAN",
            "clue": "Toprağa dikilmek üzere hazırlanmış genç ağaççık"
        },
        {
            "word": "ÇINAR",
            "clue": "Çok uzun yıllar yaşayan, heybetli ve geniş yapraklı ulu ağaç"
        },
        {
            "word": "KAVAK",
            "clue": "Nemli topraklarda hızla uzayan uzun boylu narin ağaç"
        },
        {
            "word": "SÖĞÜT",
            "clue": "Su kıyılarında yetişen, ince dalları aşağı sarkan zarif ağaç"
        },
        {
            "word": "İNCİR",
            "clue": "İçi tatlı çekirdekli, taze ve kurusu yenen Akdeniz meyvesi"
        },
        {
            "word": "HURMA",
            "clue": "Sıcak iklimlerde ve vahalarda yetişen tatlı lifli meyve"
        },
        {
            "word": "MANGO",
            "clue": "Sıcak kuşakta yetişen etli ve sulu tropikal meyve"
        },
        {
            "word": "LİMON",
            "clue": "C vitamini deposu, sarı kabuklu ve ekşi narenciye"
        },
        {
            "word": "SOĞAN",
            "clue": "Yemeklere tat veren, kat kat zarlı acımtırak yumru sebze"
        },
        {
            "word": "HAVUÇ",
            "clue": "A vitamini bakımından zengin, turuncu renkli kök sebze"
        },
        {
            "word": "MARUL",
            "clue": "Yaprakları salata olarak tüketilen açık yeşil taze sebze"
        },
        {
            "word": "BAMYA",
            "clue": "Küçük piramitsi şekilli, lifli ve şifalı sebze"
        },
        {
            "word": "BAKLA",
            "clue": "Kabuğu ve iç taneleri yemek yapılan besleyici baklagil"
        },
        {
            "word": "NOHUT",
            "clue": "Çorba, yemek ve leblebi yapımında kullanılan taneli bakliyat"
        },
        {
            "word": "MISIR",
            "clue": "Koçanı üzerinde sarı taneler taşıyan temel tahıl bitkisi"
        },
        {
            "word": "YULAF",
            "clue": "Sağlıklı beslenmede ve kahvaltılarda tercih edilen tahıl"
        },
        {
            "word": "TAHIL",
            "clue": "Buğday, arpa, mısır gibi taneli ürünlerin ortak adı"
        },
        {
            "word": "SAMAN",
            "clue": "Kurutulup ufalanmış ekin sapı, hayvan yemi"
        },
        {
            "word": "YONCA",
            "clue": "Üç yapraklı, besleyici ve yeşil hayvan yemi"
        },
        {
            "word": "DEFNE",
            "clue": "Yaprakları yemeklere koku veren yaprak dökmeyen Akdeniz ağacı"
        },
        {
            "word": "KEKİK",
            "clue": "Dağlarda yetişen, et yemeklerine lezzet katan hoş kokulu bitki"
        },
        {
            "word": "ŞEKER",
            "clue": "Tatlı yapımında kullanılan kristalize organik bileşik"
        },
        {
            "word": "SİRKE",
            "clue": "Üzüm veya elmanın mayalanmasıyla elde edilen ekşi sıvı"
        },
        {
            "word": "PETEK",
            "clue": "Arıların bal doldurmak için balmumundan ördüğü altıgen yuvalar"
        },
        {
            "word": "ASLAN",
            "clue": "Yelesi ve kükremesiyle bilinen yırtıcı büyük kedi, ormanlar kralı"
        },
        {
            "word": "TİLKİ",
            "clue": "Sivri burunlu, kabarık kuyruklu ve kurnaz yabani etçil"
        },
        {
            "word": "ÇAKAL",
            "clue": "Kurt benzeri, gruplar halinde dolaşan yabani hayvan"
        },
        {
            "word": "ZEBRA",
            "clue": "Afrika bozkırlarında yaşayan siyah beyaz çizgili otçul memeli"
        },
        {
            "word": "PANDA",
            "clue": "Bambu yapraklarıyla beslenen sevimli siyah beyaz ayı türü"
        },
        {
            "word": "KOALA",
            "clue": "Okaliptüs ağaçlarında uyuyan Avustralya keseli memelisi"
        },
        {
            "word": "KİRPİ",
            "clue": "Tehlike anında top gibi yuvarlanıp dikenlerini açan hayvan"
        },
        {
            "word": "SAMUR",
            "clue": "Çok yumuşak ve değerli kürkü olan küçük etçil su memelisi"
        },
        {
            "word": "ŞAHİN",
            "clue": "Keskin gözleriyle gökyüzünden avını yakalayan yırtıcı kuş"
        },
        {
            "word": "DOĞAN",
            "clue": "Hızlı dalışlarıyla ünlü usta avcı yırtıcı kuş"
        },
        {
            "word": "KARGA",
            "clue": "Zekası ve siyah tüyleriyle bilinen uzun ömürlü kuş"
        },
        {
            "word": "MARTI",
            "clue": "Deniz kıyılarında ve adalarda uçuşan beyaz kanatlı su kuşu"
        },
        {
            "word": "KUMRU",
            "clue": "Güvercine benzeyen, bağlılığı ve sevgiyi temsil eden narin kuş"
        },
        {
            "word": "SERÇE",
            "clue": "Ağaç dallarında ve saçak altlarında cıvıldayan küçük ötücü kuş"
        },
        {
            "word": "TURNA",
            "clue": "Göç zamanı havada V düzeninde uçan uzun bacaklı zarif kuş"
        },
        {
            "word": "SÜLÜN",
            "clue": "Parlak renkli tüyleri ve uzun kuyruğu olan süslü av kuşu"
        },
        {
            "word": "YUNUS",
            "clue": "Denizlerde yaşayan, insan canlısı son derece zeki memeli"
        },
        {
            "word": "MİDYE",
            "clue": "Deniz kıyılarındaki kayalıklara tutunan kabuklu yumuşakça"
        },
        {
            "word": "SİNEK",
            "clue": "İki kanatlı, vızıltısıyla bilinen küçük uçucu böcek"
        },
        {
            "word": "ARICI",
            "clue": "Kovanlarda arı besleyip bal ve polen üreten kimse"
        },
        {
            "word": "GÜVEÇ",
            "clue": "Topraktan yapılan tencere ve içinde ağır pişen lezzetli yemek"
        },
        {
            "word": "AKREP",
            "clue": "Kıvrık kuyruğunda zehirli iğnesi olan eklembacaklı"
        },
        {
            "word": "RADAR",
            "clue": "Radyo dalgaları göndererek uzaktaki cisimleri tespit eden aygıt"
        },
        {
            "word": "SONAR",
            "clue": "Ses dalgalarıyla su altındaki nesneleri tespit eden cihaz"
        },
        {
            "word": "LAZER",
            "clue": "Tek dalga boyunda yoğun ve doğrusal ışık yayan ışın kaynağı"
        },
        {
            "word": "MOTOR",
            "clue": "Yakıt veya elektrik enerjisini mekanik harekete dönüştüren makine"
        },
        {
            "word": "POMPA",
            "clue": "Sıvıları veya gazları basınçla emip basan mekanik aygıt"
        },
        {
            "word": "KABLO",
            "clue": "Elektrik akımını veya veri sinyallerini ileten yalıtımlı tel demeti"
        },
        {
            "word": "AMPUL",
            "clue": "İçindeki flamanın ısınmasıyla ışık saçan cam aydınlatma haznesi"
        },
        {
            "word": "TRAFO",
            "clue": "Alternatif akımın gerilimini yükselten veya düşüren dönüştürücü"
        },
        {
            "word": "DİYOT",
            "clue": "Elektrik akımının tek yönlü geçmesine olanak tanıyan devre elemanı"
        },
        {
            "word": "MİKRO",
            "clue": "Gözle görülemeyecek kadar ufak boyutlu varlık"
        },
        {
            "word": "EKRAN",
            "clue": "Görüntü, yazı veya video sunan elektronik gösterge paneli"
        },
        {
            "word": "KASET",
            "clue": "İçinde manyetik şerit bulunan eski ses veya video kayıt aracı"
        },
        {
            "word": "BELGE",
            "clue": "Bir iddiayı veya durumu kanıtlayan resmi yazılı evrak"
        },
        {
            "word": "EVRAK",
            "clue": "Resmi işlemler için kullanılan kağıt ve belgeler bütünü"
        },
        {
            "word": "DOSYA",
            "clue": "Evrakların belirli bir düzenle korunduğu kapak veya klasör"
        },
        {
            "word": "ARŞİV",
            "clue": "Eski ve önemli belgelerin güvenle saklandığı depolama alanı"
        },
        {
            "word": "BÜTÇE",
            "clue": "Bir kurumun veya ailenin gelir ve gider tahmin planı"
        },
        {
            "word": "SENET",
            "clue": "Bir borcun vadesinde ödeneceğini taahhüt eden imzalı kağıt"
        },
        {
            "word": "BORSA",
            "clue": "Pay senetlerinin ve kıymetli madenlerin alınıp satıldığı piyasa"
        },
        {
            "word": "DÖVİZ",
            "clue": "Uluslararası piyasalarda geçerli yabancı ülke para birimi"
        },
        {
            "word": "HİSSE",
            "clue": "Bir sermaye ortaklığında pay sahibine düşen ortaklık payı"
        },
        {
            "word": "BANKA",
            "clue": "Para yatırma, kredi ve havale gibi finansal işlemleri yürüten kurum"
        },
        {
            "word": "KREDİ",
            "clue": "Belirli bir geri ödeme planıyla sağlanan borç para kaynağı"
        },
        {
            "word": "ÜCRET",
            "clue": "Yapılan bir iş veya sunulan hizmet karşılığı ödenen bedel"
        },
        {
            "word": "GELİR",
            "clue": "Belirli bir süre içinde elde edilen toplam kazanç miktarı"
        },
        {
            "word": "GİDER",
            "clue": "Yaşamı veya üretimi sürdürmek için harcanan maddi kaynaklar"
        },
        {
            "word": "VERGİ",
            "clue": "Kamu hizmetlerinin finansmanı için devletin topladığı meblağ"
        },
        {
            "word": "ZARAR",
            "clue": "Gelirin gideri karşılayamaması sonucu ortaya çıkan kayıp"
        },
        {
            "word": "FAYDA",
            "clue": "Bir işten veya nesneden elde edilen yararlı sonuç"
        },
        {
            "word": "ÇIKAR",
            "clue": "Bir kimsenin kendi lehine elde ettiği kişisel yarar, menfaat"
        },
        {
            "word": "SAYGI",
            "clue": "Değeri veya erdemi dolayısıyla insanlara gösterilen hürmet"
        },
        {
            "word": "HUKUK",
            "clue": "Toplumsal adaleti ve düzeni sağlayan kurallar bütünü"
        },
        {
            "word": "KANUN",
            "clue": "Millet meclisi tarafından kabul edilen bağlayıcı yasa kuralı"
        },
        {
            "word": "TÜZÜK",
            "clue": "Bir kanunun uygulanış detaylarını gösteren yasal düzenleme metni"
        },
        {
            "word": "YARGI",
            "clue": "Bağımsız mahkemelerin hukuka göre verdiği kesin karar"
        },
        {
            "word": "SUÇLU",
            "clue": "Yasaların yasakladığı bir eylemi gerçekleştirmiş olan kişi"
        },
        {
            "word": "HAPİS",
            "clue": "Özgürlüğü kısıtlayarak cezaevine kapatma yaptırımı"
        },
        {
            "word": "TANIK",
            "clue": "Bir olayı kendi gözleriyle görmüş olan ve anlatan şahit"
        },
        {
            "word": "SANIK",
            "clue": "Mahkemede hakkında suç isnadı bulunarak yargılanan kişi"
        },
        {
            "word": "KATİP",
            "clue": "Mahkemede zabıt tutan veya büroda yazışmaları yapan görevli"
        },
        {
            "word": "MÜFTÜ",
            "clue": "İl veya ilçelerdeki dini idarenin başı olan resmi görevli"
        },
        {
            "word": "ÇAVUŞ",
            "clue": "Orduda onbaşıdan hemen sonra gelen rütbeli erbaş"
        },
        {
            "word": "SUBAY",
            "clue": "Birlikleri sevk ve idare eden rütbeli askeri komutan"
        },
        {
            "word": "TAYFA",
            "clue": "Gemide kaptanın emrinde çalışan gemi mürettebatı"
        },
        {
            "word": "NÖBET",
            "clue": "Sırayla yerine getirilen gözetleme ve bekleme görevi"
        },
        {
            "word": "SİLAH",
            "clue": "Savunma veya saldırı amacıyla kullanılan mekanik gereç"
        },
        {
            "word": "TÜFEK",
            "clue": "Omuzdan destek alınarak ateşlenen uzun namlulu silah"
        },
        {
            "word": "FİŞEK",
            "clue": "Ateşli silahların haznesine konulan mühimmat tanesi"
        },
        {
            "word": "ROKET",
            "clue": "İtici yakıtı sayesinde uzaya veya hedefe fırlatılan düzenek"
        },
        {
            "word": "MAYIN",
            "clue": "Basınç veya temas ile patlayan gizli patlayıcı harp aleti"
        },
        {
            "word": "BOMBA",
            "clue": "İçindeki patlayıcı maddeyle tahrip gücü yaratan mühimmat"
        },
        {
            "word": "SİPER",
            "clue": "Çatışma sırasında kurşunlardan korunmak için kazılan hendek"
        },
        {
            "word": "CEBİR",
            "clue": "Zor kullanma veya bilinmeyenleri çözme matematik dalı"
        },
        {
            "word": "ZAFER",
            "clue": "Zorlu bir mücadele veya yarışma sonunda ulaşılan üstün başarı"
        },
        {
            "word": "MİSAK",
            "clue": "Uluslar veya taraflar arasında yapılan kutsal ahit, antlaşma"
        },
        {
            "word": "HUDUT",
            "clue": "Komşu ülkeleri birbirinden ayıran resmi sınır çizgisi"
        },
        {
            "word": "SINIR",
            "clue": "Bir sahanın, bölgenin veya yetkinin bittiği uç hat"
        },
        {
            "word": "BÖLGE",
            "clue": "Kendine has özellikleri olan coğrafi veya idari alan"
        },
        {
            "word": "BELDE",
            "clue": "Kasabadan büyük, ilden küçük sevimli yerleşim yeri"
        },
        {
            "word": "MEZRA",
            "clue": "Köye bağlı, tarım yapılan birkaç haneli kırsal yerleşke"
        },
        {
            "word": "ÇADIR",
            "clue": "Kamp veya barınma için kurulan taşınabilir kumaş barınak"
        },
        {
            "word": "SARAY",
            "clue": "Hükümdarların veya devlet büyüklerinin ikamet ettiği anıtsal bina"
        },
        {
            "word": "KONAK",
            "clue": "Büyük, gösterişli ve geleneksel geniş ahşap ya da taş ev"
        },
        {
            "word": "VİLLA",
            "clue": "Kendi bahçesi içinde bağımsız inşa edilmiş müstakil lüks ev"
        },
        {
            "word": "DAİRE",
            "clue": "Bir apartman katında tek bir aileye ayrılan konut birimi"
        },
        {
            "word": "TERAS",
            "clue": "Binaların üst katlarında veya çatısında bulunan açık oturma alanı"
        },
        {
            "word": "KİLİT",
            "clue": "Kapıları anahtarla güvenceye alan mekanik emniyet sistemi"
        },
        {
            "word": "SÜRGÜ",
            "clue": "Kapı veya pencere kanadını içeriden kilitleyen demir çubuk"
        },
        {
            "word": "PERDE",
            "clue": "Pencerelerden içeri ışık ve bakış sızmasını engelleyen kumaş"
        },
        {
            "word": "KİLİM",
            "clue": "Yün veya pamuk iplikleriyle el tezgahında dokunan nakışlı sergi"
        },
        {
            "word": "HASIR",
            "clue": "Saz veya kamış tellerinden örülen doğal zemin örtüsü"
        },
        {
            "word": "SEHPA",
            "clue": "Oturma odalarında ikram için kullanılan alçak küçük masa"
        },
        {
            "word": "DOLAP",
            "clue": "Giysileri ve eşyaları düzenleyen raflı ve kapaklı mobilya"
        },
        {
            "word": "RANZA",
            "clue": "Üst üste iki yataktan meydana gelen yerden tasarruflu yatak"
        },
        {
            "word": "YATAK",
            "clue": "Uyumak için üzerine şilte serilen konforlu mobilya"
        },
        {
            "word": "SABUN",
            "clue": "Yağ ve alkaliden üretilen, köpükle kirleri çıkaran temizlik maddesi"
        },
        {
            "word": "FIRÇA",
            "clue": "Temizlik, boyama veya saç tarama için kullanılan kıllı alet"
        },
        {
            "word": "TARAK",
            "clue": "Saçları tarayıp düzeltmek için dişli bakım gereci"
        },
        {
            "word": "LEĞEN",
            "clue": "Çamaşır yıkama veya hamur için kullanılan yayvan derin kap"
        },
        {
            "word": "KÜREK",
            "clue": "Toprak veya kar taşımaya yarayan saplı geniş alet"
        },
        {
            "word": "KAZMA",
            "clue": "Sert zeminleri kırmak için kullanılan iki uçlu kazı gereci"
        },
        {
            "word": "BALTA",
            "clue": "Ağaç kesmeye ve odun yarmaya yarayan çelik bıçaklı alet"
        },
        {
            "word": "SOMUN",
            "clue": "Cıvatanın dişli kısmına çevrilerek takılan delikli metal parça"
        },
        {
            "word": "PENSE",
            "clue": "Tel bükmeye veya cıvata kavramaya yarayan iki kollu el aleti"
        },
        {
            "word": "ZIMBA",
            "clue": "Kağıt sayfalarını metal telle birbirine tutturan ofis aleti"
        },
        {
            "word": "SİLGİ",
            "clue": "Kalem izlerini kağıttan silmeye yarayan yumuşak kauçuk gereç"
        },
        {
            "word": "TUVAL",
            "clue": "Yağlı boya resim yapmak için tahtaya gerilmiş keten kumaş"
        },
        {
            "word": "PALET",
            "clue": "Ressamın boyalarını üzerine sıkıp karıştırdığı oval levha"
        },
        {
            "word": "FİGÜR",
            "clue": "Sanat eserinde yer alan canlı insan veya hayvan biçimi"
        },
        {
            "word": "DESEN",
            "clue": "Bir kumaş veya yüzey üzerine çizilen dekoratif çizgiler"
        },
        {
            "word": "MOTİF",
            "clue": "Sanat ve mimaride tekrarlanan süsleyici görsel öge"
        },
        {
            "word": "NAZAR",
            "clue": "Kötü veya haset dolu bakışın olumsuz etkisine olan inanış"
        },
        {
            "word": "MUSKA",
            "clue": "İnanışa göre kötülüklerden koruyan üçgen yazılı dua kılıfı"
        },
        {
            "word": "TALİH",
            "clue": "İnsanın karşısına çıkan şanslı veya tesadüfi olaylar zinciri"
        },
        {
            "word": "KADER",
            "clue": "Olayların önceden belirlenmiş olduğuna inanılan ilahi takdir"
        },
        {
            "word": "NASİP",
            "clue": "İnsanın payına düşen hayırlı kısmet veya rızık payı"
        },
        {
            "word": "RIZIK",
            "clue": "Canlıların beslenip yaşaması için yaratılmış yiyecek ve rızık"
        },
        {
            "word": "NİMET",
            "clue": "İyilik, lütuf ve insan hayatına katkı sunan değerli bereket"
        },
        {
            "word": "ŞÜKÜR",
            "clue": "Sahip olunan iyilik ve nimetler için sunulan minnettarlık"
        },
        {
            "word": "NAMAZ",
            "clue": "İslam dininde belirli vakitlerde eda edilen temel ibadet"
        },
        {
            "word": "ZEKAT",
            "clue": "Belirli bir zenginliğe sahip kişilerin yoksullara verdiği yıllık pay"
        },
        {
            "word": "SEVAP",
            "clue": "Yapılan iyi ve ahlaki davranışlar karşılığında kazanılan manevi mükafat"
        },
        {
            "word": "GÜNAH",
            "clue": "Dinen ve vicdanen yasaklanmış olan hatalı eylem"
        },
        {
            "word": "HARAM",
            "clue": "Dini inanç ve kurallarca yapılması kesinlikle yasak olan şey"
        },
        {
            "word": "HELAL",
            "clue": "Dine, hukuka ve ahlaka uygun olan meşru kazanç ve eylem"
        },
        {
            "word": "NEFİS",
            "clue": "İnsanın maddi ve bencil arzularını besleyen iç dünyası"
        },
        {
            "word": "İRADE",
            "clue": "Bir konuda karar verip onu kararlılıkla uygulama gücü"
        },
        {
            "word": "DUYGU",
            "clue": "İç dünyamızda sevgi, sevinç gibi beliren ruhsal titreşim"
        },
        {
            "word": "SEZGİ",
            "clue": "Mantıklı açıklamaya dayanmadan içe doğan önsezi hissi"
        },
        {
            "word": "KAYGI",
            "clue": "Gelecekteki belirsizlikler karşısında duyulan iç huzursuzluğu"
        },
        {
            "word": "KORKU",
            "clue": "Algılanan tehlike veya tehdit karşısında hissedilen ürperti"
        },
        {
            "word": "ŞÜPHE",
            "clue": "Bir gerçeğin doğruluğundan tam emin olamama tereddüdü"
        },
        {
            "word": "KUŞKU",
            "clue": "İçte doğan güvensizlik ve kuruntu duygusu"
        },
        {
            "word": "HÜZÜN",
            "clue": "Gönülde duyulan hafif ve buruk keder duygusu"
        },
        {
            "word": "MATEM",
            "clue": "Acı bir kayıp veya ölüm karşısında tutulan yas"
        },
        {
            "word": "KEDER",
            "clue": "İnsanın yüreğini sıkan derin üzüntü ve gam hali"
        },
        {
            "word": "ÖZLEM",
            "clue": "Uzakta olan bir kimseyi veya yeri görme arzusu, hasret"
        },
        {
            "word": "SEVDA",
            "clue": "Gönlü bütünüyle saran güçlü ve samimi aşk"
        },
        {
            "word": "TUTKU",
            "clue": "Akıl ve mantığı geride bırakan yoğun ve ateşli istek"
        },
        {
            "word": "HEVES",
            "clue": "Bir şeye karşı duyulan gelip geçici arzu ve merak"
        },
        {
            "word": "COŞKU",
            "clue": "Büyük bir sevinç ve heyecanla duyulan iç taşkınlığı"
        },
        {
            "word": "KEYİF",
            "clue": "Ruhen ve bedenen duyulan rahatlık ve neşeli afiyet hali"
        },
        {
            "word": "HAZIR",
            "clue": "Bir eylemi gerçekleştirmeye uygun durumda olan, amade"
        },
        {
            "word": "YALIN",
            "clue": "Gösterişsiz, sade ve süsten uzak duran açık ifade"
        },
        {
            "word": "MELEZ",
            "clue": "İki ayrı türün veya ırkın birleşmesiyle doğan canlı"
        },
        {
            "word": "BEYİN",
            "clue": "Sinir sisteminin kumanda merkezi olan baş organı"
        },
        {
            "word": "DAMAR",
            "clue": "Kanı kalp ile vücut dokuları arasında dolaştıran damar yolu"
        },
        {
            "word": "KEMİK",
            "clue": "İskeletimizi oluşturan sert ve kalsiyumlu destek doku"
        },
        {
            "word": "EKLEM",
            "clue": "Kemiklerin birbirine hareketli bağlandığı temas noktası"
        },
        {
            "word": "ADALE",
            "clue": "İskeleti hareket ettiren lifli kas dokusu"
        },
        {
            "word": "BİLEK",
            "clue": "El ile kolu birbirine bağlayan esnek eklem"
        },
        {
            "word": "GÖĞÜS",
            "clue": "Boyun ile karın arasındaki ön kaburga kafesi alanı"
        },
        {
            "word": "BACAK",
            "clue": "Gövdeyi taşıyan ve yürümeyi sağlayan alt uzuv"
        },
        {
            "word": "TOPUK",
            "clue": "Ayağın yere basan arka yuvarlak çıkıntısı"
        },
        {
            "word": "CİĞER",
            "clue": "Göğüs boşluğunda nefes almayı sağlayan hayati organ"
        },
        {
            "word": "DALAK",
            "clue": "Kandaki eski alyuvarları süzen karın içi lenfoid organ"
        },
        {
            "word": "SAFRA",
            "clue": "Karaciğerin salgıladığı, yağları sindirmeye yarayan sarı sıvı"
        },
        {
            "word": "YABAN",
            "clue": "İnsan eli değmemiş ıssız ve doğal ortam"
        },
        {
            "word": "CİDDİ",
            "clue": "Şakaya yer vermeyen, disiplinli ve güvenilir davranış"
        },
        {
            "word": "SAHTE",
            "clue": "Gerçek gibi gösterilen ama asılsız olan yapay kopya"
        },
        {
            "word": "SAHİH",
            "clue": "Kuşku götürmez biçimde doğru ve gerçeğe tam uygun olan"
        },
        {
            "word": "DOĞRU",
            "clue": "Gerçeklere, adalete ve mantığa tam uygun olan dürüst hal"
        },
        {
            "word": "YALAN",
            "clue": "Gerçeğin aksine söylenen, aldatıcı ve asılsız ifade"
        },
        {
            "word": "TUZAK",
            "clue": "Düşmanı veya avı gafil avlamak için kurulan tertip"
        },
        {
            "word": "KUMAR",
            "clue": "Şansa bağlı olarak para kazanmak veya kaybetmek için oynanan oyun"
        },
        {
            "word": "BAHİS",
            "clue": "Gelecekteki bir durum üzerine para yatırılarak girilen iddia"
        },
        {
            "word": "İDDİA",
            "clue": "Bir savı veya inancı kesinlikle savunma tutumu"
        },
        {
            "word": "TEORİ",
            "clue": "Bilimsel gözlemleri açıklayan tutarlı düşünce sistemi, kuram"
        },
        {
            "word": "KANIT",
            "clue": "Bir tezi ispatlayan gözlem, belge veya kesin delil"
        },
        {
            "word": "DENEY",
            "clue": "Bir kuramı sınamak için kontrollü şartlarda yapılan gözlem"
        },
        {
            "word": "BULGU",
            "clue": "Araştırma sonucunda gün yüzüne çıkarılan somut veri"
        },
        {
            "word": "SİMGE",
            "clue": "Bir düşünceyi veya kurumu temsil eden görsel işaret, sembol"
        },
        {
            "word": "TABLO",
            "clue": "Çerçeveli resim sanatı eseri veya listelenmiş veri tablosu"
        },
        {
            "word": "KROKİ",
            "clue": "Bir yerin ölçeksiz olarak kuş bakışı çizilmiş basit planı"
        },
        {
            "word": "ÇİZİM",
            "clue": "Kalem veya bilgisayarla oluşturulan teknik veya estetik hat"
        },
        {
            "word": "ÇİZGİ",
            "clue": "Bir noktanın uzayda hareketinden doğan sürekli hat"
        },
        {
            "word": "NOKTA",
            "clue": "Boyutu olmayan, iki çizginin kesiştiği küçük iz"
        },
        {
            "word": "ÜÇGEN",
            "clue": "Üç doğru parçasının uç uca birleştiği geometrik şekil"
        },
        {
            "word": "KENAR",
            "clue": "Bir yüzeyi çevreleyen veya sınırlayan çizgi"
        },
        {
            "word": "HACİM",
            "clue": "Bir cismin uzayda kapladığı üç boyutlu genişlik"
        },
        {
            "word": "KÜTLE",
            "clue": "Bir cismin içerdiği toplam madde miktarı"
        },
        {
            "word": "SÜRAT",
            "clue": "Bir nesnenin birim zamanda katettiği yolun hızı"
        },
        {
            "word": "GÖLGE",
            "clue": "Işık kaynağının önüne bir nesne geçince arkada oluşan karanlık"
        },
        {
            "word": "ÇEKİM",
            "clue": "Cisimlerin kütleleri sebebiyle birbirini çekme kuvveti"
        },
        {
            "word": "YANKI",
            "clue": "Ses dalgalarının sert bir yüzeye çarpıp geri yansıması"
        },
        {
            "word": "AKORT",
            "clue": "Bir enstrümanın ses perdelerinin düzenlenip ayarlanması"
        },
        {
            "word": "RİTİM",
            "clue": "Seslerin ve vuruşların düzenli bir ahenkle tekrarı"
        },
        {
            "word": "BESTE",
            "clue": "Özgün bir melodi ve armoniyle bestelenmiş müzik eseri"
        },
        {
            "word": "GÜFTE",
            "clue": "Bir müzik bestesinin seslendirilen edebi sözleri"
        },
        {
            "word": "SAHNE",
            "clue": "Seyircilerin karşısında performans icra edilen yükseltilmiş alan"
        },
        {
            "word": "DEKOR",
            "clue": "Tiyatro veya film sahnesini konuya uygun süsleyen eşyalar bütünü"
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
        },
        {
            "word": "ŞERBET",
            "clue": "Meyve suyu ve baharatlarla yapılan geleneksel tatlı içecek"
        },
        {
            "word": "GÖÇEBE",
            "clue": "Yerleşik düzeni olmayıp mevsimlere göre yer değiştiren topluluk"
        },
        {
            "word": "PORTRE",
            "clue": "Bir insanın yüzünü ve ifadesini yansıtan resim veya fotoğraf"
        },
        {
            "word": "JÖLELİ",
            "clue": "Kıvamı koyulaştırılmış tatlı veya saç bakım maddesi"
        },
        {
            "word": "ADALET",
            "clue": "Hak ve hukuka uygunluk, herkese hakkını verme ilkesi"
        },
        {
            "word": "ALFABE",
            "clue": "Bir dildeki sesleri gösteren harflerin belirli sırası"
        },
        {
            "word": "ANANAS",
            "clue": "Sıcak iklimlerde yetişen, üzeri pullu iri tropik meyve"
        },
        {
            "word": "BAKKAL",
            "clue": "Temel gıda ve ev ihtiyaç maddeleri satan mahalle esnafı"
        },
        {
            "word": "BALİNA",
            "clue": "Denizlerde yaşayan memelilerin en büyük ve heybetli türü"
        },
        {
            "word": "BARKOD",
            "clue": "Ürünlerin üzerine basılan, optik okuyucuyla okunan çizgiler"
        },
        {
            "word": "BAŞLIK",
            "clue": "Bir yazının veya kitabın konusunu belirten üst ibare"
        },
        {
            "word": "BAYRAK",
            "clue": "Bir milletin, bağımsızlığın simgesi olan renkli kumaş"
        },
        {
            "word": "BELEDİ",
            "clue": "Şehir yönetimiyle ve kamu hizmetleriyle ilgili olan"
        },
        {
            "word": "BELLEK",
            "clue": "Yaşananları, bilgileri hafızada tutma zihinsel yetisi"
        },
        {
            "word": "BİNİCİ",
            "clue": "Ata binme ve at sürme konusunda usta olan sporcu"
        },
        {
            "word": "BOZKIR",
            "clue": "Kurak iklimde yetişen kısa otlarla kaplı geniş düzlük"
        },
        {
            "word": "BULGUR",
            "clue": "Kaynatılıp kurutulmuş ve kırılmış buğday taneleri"
        },
        {
            "word": "BULVAR",
            "clue": "Şehir içinde iki tarafı ağaçlıklı geniş ana cadde"
        },
        {
            "word": "CAMBAZ",
            "clue": "Tel veya ip üzerinde akrobatik gösteriler yapan usta"
        },
        {
            "word": "CELLAT",
            "clue": "Ölüm cezasına çarptırılanların cezasını infaz eden kimse"
        },
        {
            "word": "CENNET",
            "clue": "İyilik yapanların öldükten sonra gideceğine inanılan kutlu mekan"
        },
        {
            "word": "CEVHER",
            "clue": "Kıymetli maden veya insanın içindeki potansiyel değer"
        },
        {
            "word": "CEYLAN",
            "clue": "Narin yapılı, çevik ve iri gözlü zarif antilop"
        },
        {
            "word": "CÜZDAN",
            "clue": "Para, kredi kartı ve kimlik taşımaya yarayan küçük kılıf"
        },
        {
            "word": "ÇAKMAK",
            "clue": "Kıvılcım çıkararak ateş veya ocak yakan küçük alet"
        },
        {
            "word": "ÇAMLIK",
            "clue": "Çam ağaçlarıyla kaplı ormanlık veya koruluk alan"
        },
        {
            "word": "ÇARDAK",
            "clue": "Bahçelerde üstü sarmaşık veya tente ile örtülü oturma yeri"
        },
        {
            "word": "ÇENTİK",
            "clue": "Bir şeyin kenarına bıçakla açılan küçük oyuk veya işaret"
        },
        {
            "word": "ÇIKMAZ",
            "clue": "Sonu kapalı olan, hiçbir yere bağlanmayan sokak"
        },
        {
            "word": "ÇÖMLEK",
            "clue": "Topraktan pişirilerek yapılan yayvan su ve yemek kabı"
        },
        {
            "word": "DAĞLIK",
            "clue": "Çok sayıda sarp ve yüksek dağ bulunan engebeli arazi"
        },
        {
            "word": "DAKİKA",
            "clue": "Bir saatin altmışta birine eşit zaman birimi"
        },
        {
            "word": "DALGIÇ",
            "clue": "Su altına özel tüple veya maskeyle dalan kimse"
        },
        {
            "word": "DANTEL",
            "clue": "İnce iplikle ilmek ilmek örülen delikli el işi süs"
        },
        {
            "word": "DEĞNEK",
            "clue": "Yürürken dayanmaya yarayan uzun ince sopa"
        },
        {
            "word": "DELGEÇ",
            "clue": "Kağıtları dosyalamak için kenarına delik açan alet"
        },
        {
            "word": "DERNEK",
            "clue": "Belli bir amaç için bir araya gelenlerin kurduğu topluluk"
        },
        {
            "word": "DEVRİM",
            "clue": "Bir alanda gerçekleşen köklü, hızlı ve büyük dönüşüm"
        },
        {
            "word": "DİKKAT",
            "clue": "Zihnin belirli bir konu veya iş üzerinde yoğunlaşması"
        },
        {
            "word": "DİRSEK",
            "clue": "Kolun üst kısmı ile ön kolu birleştiren kıvrım eklemi"
        },
        {
            "word": "DÖŞEME",
            "clue": "Bir yapının tabanını oluşturan tahta veya taş kaplama"
        },
        {
            "word": "DÜKKAN",
            "clue": "Esnafın mal sattığı veya zanaatını icra ettiği iş yeri"
        },
        {
            "word": "DÜŞMAN",
            "clue": "Birine karşı kötü niyet besleyen, hasım veya rakip"
        },
        {
            "word": "ECZANE",
            "clue": "İlaçların hazırlandığı ve reçeteyle satıldığı sağlık yeri"
        },
        {
            "word": "EĞİTİM",
            "clue": "Bireylerin bilgi, beceri ve ahlakını geliştirme süreci"
        },
        {
            "word": "ELBİSE",
            "clue": "İnsan vücudunu örten her türlü kumaş giyecek"
        },
        {
            "word": "EMANET",
            "clue": "Korunması için birine güvenle bırakılan eşya veya can"
        },
        {
            "word": "ESİNTİ",
            "clue": "Hafif ve serinletici biçimde esen yumuşak rüzgâr"
        },
        {
            "word": "ESKİCİ",
            "clue": "Kullanılmış eski eşyaları satın alıp satan seyyar esnaf"
        },
        {
            "word": "ETİKET",
            "clue": "Bir malın fiyatını veya markasını belirten yapışkanlı kağıt"
        },
        {
            "word": "FAKTÖR",
            "clue": "Bir sonucun doğmasında etkisi bulunan etken veya unsur"
        },
        {
            "word": "FİLİKA",
            "clue": "Gemilerde tehlike anında kullanılan küçük kurtarma sandalı"
        },
        {
            "word": "FİLTRE",
            "clue": "Sıvı veya gazları süzerek yabancı maddelerden arındıran araç"
        },
        {
            "word": "FORMÜL",
            "clue": "Bir kuralı veya kimyasal bileşimi gösteren simgeler dizisi"
        },
        {
            "word": "FORVET",
            "clue": "Futbolda rakip kaleye en yakın oynayan hücum oyuncusu"
        },
        {
            "word": "FOSFOR",
            "clue": "Karanlıkta ışıldayan, kemik ve diş yapısına giren mineral"
        },
        {
            "word": "GALERİ",
            "clue": "Sanat eserlerinin sergilendiği ve satıldığı salon"
        },
        {
            "word": "GEZGİN",
            "clue": "Yeni yerler görmek ve öğrenmek için seyahat eden kimse"
        },
        {
            "word": "GİRDAP",
            "clue": "Suyun veya havanın dairesel dönerek oluşturduğu çekim alanı"
        },
        {
            "word": "GÖRSEL",
            "clue": "Görme duyusuna dayanan veya göze hitap eden zengin içerik"
        },
        {
            "word": "GÖZLEM",
            "clue": "Bir olayı veya doğayı dikkatle izleyip not etme eylemi"
        },
        {
            "word": "GRAFİK",
            "clue": "Sayısal verileri şekiller ve çizgilerle gösteren görsel şema"
        },
        {
            "word": "GURBET",
            "clue": "Doğup büyüdüğü memleketten uzakta yaşama hali"
        },
        {
            "word": "GÜVENÇ",
            "clue": "Bir şeye veya kimseye duyulan içten inanma ve itimat"
        },
        {
            "word": "HADEME",
            "clue": "Okul veya kurumlarda temizlik ve hizmet işini yapan görevli"
        },
        {
            "word": "HAFİYE",
            "clue": "Gizli araştırma ve takip yapan özel dedektif"
        },
        {
            "word": "HARDAL",
            "clue": "Tohumlarından yapılan keskin kokulu sarı acı sos"
        },
        {
            "word": "HARİKA",
            "clue": "İnsanda hayranlık ve şaşkınlık uyandıran benzersiz güzellik"
        },
        {
            "word": "HAŞERE",
            "clue": "Zararlı olabilen küçük böcek türlerinin ortak adı"
        },
        {
            "word": "HAYDUT",
            "clue": "Silah zoruyla soygun yapan kanun kaçağı haydut"
        },
        {
            "word": "HAYVAN",
            "clue": "Duyguları ve hareket yetisi olan canlı varlık"
        },
        {
            "word": "HAZİNE",
            "clue": "Devletin kasası veya gizlenmiş değerli altın ve mücevherler"
        },
        {
            "word": "HEDİYE",
            "clue": "Sevindirmek veya anı bırakmak için verilen armağan"
        },
        {
            "word": "HIRSIZ",
            "clue": "Başkasına ait bir malı izinsizce çalan kimse"
        },
        {
            "word": "HİJYEN",
            "clue": "Sağlığı korumaya yönelik temizlik ve sıhhi tedbirler"
        },
        {
            "word": "HİKAYE",
            "clue": "Gerçek veya tasarlanmış olayları anlatan edebi anlatı"
        },
        {
            "word": "ILIKÇA",
            "clue": "Ne çok sıcak ne çok soğuk, ılıman kıvamda olan"
        },
        {
            "word": "ISIRIK",
            "clue": "Dişlerle yapılan kavrama ve ısırma izi"
        },
        {
            "word": "IŞILTI",
            "clue": "Pırıl pırıl parıldayan canlı ışık yansıması"
        },
        {
            "word": "İÇERİK",
            "clue": "Bir metnin, kitabın veya medyanın içinde barındırdığı öz"
        },
        {
            "word": "İÇECEK",
            "clue": "Susuzluğu gidermek veya keyif için içilen her türlü sıvı"
        },
        {
            "word": "İHANET",
            "clue": "Birine verilen güveni sarsıp arkasından kötülük yapma"
        },
        {
            "word": "İKAMET",
            "clue": "Bir yerde sürekli olarak oturma ve ikametgah etme"
        },
        {
            "word": "İLETİM",
            "clue": "Isı, elektrik veya ses dalgalarının bir maddeden geçmesi"
        },
        {
            "word": "İMARET",
            "clue": "Yoksullara ve yolculara ücretsiz yemek dağıtan aşevi"
        },
        {
            "word": "İPOTEK",
            "clue": "Bir borca teminat olarak gösterilen gayrimenkul rehni"
        },
        {
            "word": "İRONİK",
            "clue": "Sözün tersini ima ederek yapılan ince alaylı ifade"
        },
        {
            "word": "İSKELE",
            "clue": "Gemilerin yanaştığı kıyı köprüsü veya inşaat yapı iskelesi"
        },
        {
            "word": "İŞARET",
            "clue": "Bir durumu veya anlamı belirten simge ve sembol"
        },
        {
            "word": "İYİLİK",
            "clue": "Karşılık beklemeden yapılan yardımsever ve güzel hareket"
        },
        {
            "word": "İZLEME",
            "clue": "Bir süreci veya yayını dikkatle takip etme eylemi"
        },
        {
            "word": "JALUZİ",
            "clue": "İnce şeritlerden oluşan ayarlanabilir pencere perdesi"
        },
        {
            "word": "JEOLOG",
            "clue": "Yerkürenin yapısını, katmanlarını ve taşlarını inceleyen bilim insanı"
        },
        {
            "word": "JÜBİLE",
            "clue": "Bir meslekte veya sporda uzun yıllar çalışanların veda kutlaması"
        },
        {
            "word": "KALDIR",
            "clue": "Bir şeyi yukarıya alma veya yerden kesme eylemi"
        },
        {
            "word": "KALİTE",
            "clue": "Bir ürün veya hizmetin beklentileri karşılama üstünlüğü"
        },
        {
            "word": "KAMYON",
            "clue": "Ağır yükleri karayolunda taşımak için üretilmiş büyük taşıt"
        },
        {
            "word": "KAPALI",
            "clue": "Açık olmayan, dışarıyla bağı kesilmiş korunaklı durum"
        },
        {
            "word": "KAPTAN",
            "clue": "Gemiyi veya uçağı sevk ve idare eden en yetkili komutan"
        },
        {
            "word": "KASABA",
            "clue": "Köyden büyük, şehirden küçük idari yerleşim yeri"
        },
        {
            "word": "KASVET",
            "clue": "İnsanın içini sıkan sıkıntılı, bunaltıcı hava"
        },
        {
            "word": "KATMER",
            "clue": "Yağlanmış hamurun kat kat açılmasıyla yapılan hamur tatlısı"
        },
        {
            "word": "KAVŞAK",
            "clue": "İki veya daha fazla yolun birleştiği kesişme noktası"
        },
        {
            "word": "KİBRİT",
            "clue": "Ucu kükürtlü, sürtünmeyle alev alan ahşap çöp"
        },
        {
            "word": "KİMYON",
            "clue": "Yemeklere ve köfteye konulan keskin kokulu esmer baharat"
        },
        {
            "word": "KİRPİK",
            "clue": "Göz kapaklarının kenarındaki koruyucu ince kıllar"
        },
        {
            "word": "KONGRE",
            "clue": "Belli bir alanda uzmanların toplanıp bildiri sunduğu kurultay"
        },
        {
            "word": "KONSER",
            "clue": "Müzisyenlerin sahnede müzik eserleri seslendirdiği etkinlik"
        },
        {
            "word": "KONTAK",
            "clue": "İki iletkenin birbirine değmesi veya motor ateşleme anahtarı"
        },
        {
            "word": "KRİTİK",
            "clue": "Bir durumun en hassas, can alıcı ve dönüm noktası anı"
        },
        {
            "word": "KUMSAL",
            "clue": "Deniz veya göl kıyısındaki ince kumlu sahil şeridi"
        },
        {
            "word": "KURNAZ",
            "clue": "Kolay kolay aldanmayan, açıkgöz ve hilekar kimse"
        },
        {
            "word": "KURŞUN",
            "clue": "Ağır ve yumuşak gri metal veya merminin kurşun çekirdeği"
        },
        {
            "word": "KUVVET",
            "clue": "Bir cismi hareket ettiren veya durduran fiziksel etki"
        },
        {
            "word": "KÜLTÜR",
            "clue": "Bir milletin tarih boyunca yarattığı maddi ve manevi değerler"
        },
        {
            "word": "LEVENT",
            "clue": "Osmanlı donanmasında deniz askeri veya boylu poslu yiğit"
        },
        {
            "word": "LEZZET",
            "clue": "Ağza alınan bir yiyeceğin damakta bıraktığı hoş tat"
        },
        {
            "word": "LEYLEK",
            "clue": "Bacalara yuva yapan, uzun bacaklı göçmen beyaz kuş"
        },
        {
            "word": "LOJMAN",
            "clue": "Kurumların personeline tahsis ettiği resmi konut"
        },
        {
            "word": "MAKİNE",
            "clue": "Enerjiyi işe dönüştüren mekanik veya elektronik düzenek"
        },
        {
            "word": "MAKSAT",
            "clue": "Ulaşılmak istenen nihai amaç veya gaye"
        },
        {
            "word": "MARKET",
            "clue": "Her türlü tüketim maddesinin raftan seçildiği alışveriş yeri"
        },
        {
            "word": "MASRAF",
            "clue": "Bir işin tamamlanması için yapılan toplam harcama"
        },
        {
            "word": "MAYMUN",
            "clue": "Ağaçlarda yaşayan, zeki ve taklit yeteneği gelişmiş primat"
        },
        {
            "word": "MECLİS",
            "clue": "Bir araya gelip yasa yapan veya karar alan heyet"
        },
        {
            "word": "MEDENİ",
            "clue": "Şehirli, uygar ve görgü kurallarına uygun davranan"
        },
        {
            "word": "MEKTEP",
            "clue": "Çocukların eğitim gördüğü geleneksel okul"
        },
        {
            "word": "MELODİ",
            "clue": "Belirli bir duygu uyandıran, ahenkli sesler dizisi"
        },
        {
            "word": "MERCAN",
            "clue": "Sıcak denizlerde resifler oluşturan renkli kalkerli deniz canlısı"
        },
        {
            "word": "MERCEK",
            "clue": "Işığı kırarak cisimleri büyüten veya küçülten cam optik"
        },
        {
            "word": "MESAFE",
            "clue": "İki nokta arasındaki uzaklık veya açıklık"
        },
        {
            "word": "MESLEK",
            "clue": "İnsanın hayatını kazanmak için yaptığı uzmanlık işi"
        },
        {
            "word": "METEOR",
            "clue": "Atmosfere girip sürtünmeyle yanan parlak gök taşı"
        },
        {
            "word": "MEZURA",
            "clue": "Terzilerin ölçü almak için kullandığı esnek şerit metre"
        },
        {
            "word": "MİĞFER",
            "clue": "Savaşçıların başlarını darbelerden korumak için taktığı çelik başlık"
        },
        {
            "word": "MİLYAR",
            "clue": "Bir sayısının sağına dokuz sıfır konularak yazılan sayı"
        },
        {
            "word": "MİLYON",
            "clue": "Bir sayısının sağına altı sıfır konularak yazılan sayı"
        },
        {
            "word": "MİMARİ",
            "clue": "Binaların ve yapıların tasarlanması ve inşa edilmesi sanatı"
        },
        {
            "word": "MODERN",
            "clue": "Çağın gereklerine ve zevkine uygun olan, çağdaş"
        },
        {
            "word": "MOZAİK",
            "clue": "Küçük renkli taşların yan yana getirilmesiyle yapılan desen"
        },
        {
            "word": "MUADİL",
            "clue": "Birbirinin yerine geçebilen denk veya eşdeğer"
        },
        {
            "word": "MUHTAR",
            "clue": "Köy veya mahallenin yönetiminden sorumlu seçilmiş kişi"
        },
        {
            "word": "MÜHLET",
            "clue": "Bir işin yapılması veya borcun ödenmesi için tanınan ek süre"
        },
        {
            "word": "MÜZECİ",
            "clue": "Müzelerdeki tarihi eserlerin korunmasıyla ilgilenen uzman"
        },
        {
            "word": "NAYLON",
            "clue": "Sentetik liflerden üretilen esnek ve dayanıklı plastik madde"
        },
        {
            "word": "NEDİME",
            "clue": "Gelinin yanında ona yardımcı olan yakın kadın arkadaş"
        },
        {
            "word": "OMURGA",
            "clue": "İskeletin belkemiğini oluşturan omurların bütünü"
        },
        {
            "word": "ONARIM",
            "clue": "Bozulmuş bir şeyi tamir edip eski çalışır haline getirme"
        },
        {
            "word": "ORANTI",
            "clue": "İki oran arasındaki eşitlik ve matematiksel uyum"
        },
        {
            "word": "ORKİDE",
            "clue": "Çok zarif ve rengarenk çiçekler açan kıymetli süs bitkisi"
        },
        {
            "word": "OTOMAT",
            "clue": "Jetonla veya parayla kendi kendine çalışan otomatik cihaz"
        },
        {
            "word": "OTOBÜS",
            "clue": "Şehir içi ve şehirler arası yolcu taşıyan büyük motorlu araç"
        },
        {
            "word": "OTOBAN",
            "clue": "Hızlı trafik için yapılmış çok şeritli transit otoyol"
        },
        {
            "word": "ÖĞRETİ",
            "clue": "Belli bir düşünürün veya ekolün sistemli fikirleri"
        },
        {
            "word": "ÖLÇÜLÜ",
            "clue": "Aşırıya kaçmayan, dengeli ve ölçülü davranan"
        },
        {
            "word": "ÖYKÜCÜ",
            "clue": "Kısa hikayeler yazan edebiyat sanatçısı"
        },
        {
            "word": "ÖZVERİ",
            "clue": "Bir amaç uğruna kendi çıkarlarından vazgeçme, fedakarlık"
        },
        {
            "word": "PANTER",
            "clue": "Kedigillerden güçlü ve çevik kara leopar"
        },
        {
            "word": "PAPYON",
            "clue": "Kelebek biçiminde yakaya takılan şık fiyonk kravat"
        },
        {
            "word": "PAROLA",
            "clue": "Bir yere girmek veya hesabı açmak için kullanılan gizli şifre"
        },
        {
            "word": "PARSEL",
            "clue": "İmar planına göre bölünmüş yapı arsası parçası"
        },
        {
            "word": "PASTEL",
            "clue": "Yumuşak renk tonlarında boya kalemi veya boya türü"
        },
        {
            "word": "PATRON",
            "clue": "Bir iş yerinin veya fabrikanın sahibi ve yöneticisi"
        },
        {
            "word": "PAYDAŞ",
            "clue": "Bir işte veya projede ortak menfaati bulunan taraf"
        },
        {
            "word": "PEÇETE",
            "clue": "Yemek yerken ağız silmek için kullanılan kağıt veya bez"
        },
        {
            "word": "PEKMEZ",
            "clue": "Üzüm veya dut suyunun kaynatılarak koyulaştırılmış tatlı hali"
        },
        {
            "word": "PEYNİR",
            "clue": "Mayalanmış sütün süzülüp katılaştırılmasıyla yapılan temel besin"
        },
        {
            "word": "PİKSEL",
            "clue": "Dijital ekranlardaki görüntüyü oluşturan en küçük renk noktacığı"
        },
        {
            "word": "PİSTON",
            "clue": "Silindir içinde gaz basıncıyla ileri geri hareket eden parça"
        },
        {
            "word": "PLATİN",
            "clue": "Kuyumculukta ve kimyada kullanılan çok değerli beyaz metal"
        },
        {
            "word": "POSTAL",
            "clue": "Askerlerin giydiği dayanıklı ve boğazlı kaba bot"
        },
        {
            "word": "POYRAZ",
            "clue": "Kuzeydoğudan esen soğuk ve sert fırtına rüzgârı"
        },
        {
            "word": "PORTAL",
            "clue": "İnternette geniş içerik ve hizmet kapısı sunan büyük web sitesi"
        },
        {
            "word": "REÇETE",
            "clue": "Doktorun hastaya alması gereken ilaçları yazdığı resmi belge"
        },
        {
            "word": "REHBER",
            "clue": "Bir kente gelenlere veya gezenlere yol gösteren kılavuz"
        },
        {
            "word": "REKTÖR",
            "clue": "Üniversitenin en üst düzeydeki idari ve akademik yöneticisi"
        },
        {
            "word": "RENKLİ",
            "clue": "Çeşitli renklere sahip veya neşeli, ilgi çekici olan"
        },
        {
            "word": "RESSAM",
            "clue": "Boyalarla tablolar ve sanat eserleri üreten resim sanatçısı"
        },
        {
            "word": "REZERV",
            "clue": "İleride kullanılmak üzere saklanan yedek kaynak veya maden"
        },
        {
            "word": "RIHTIM",
            "clue": "Gemilerin yanaşıp yolcu ve yük indirip bindirdiği kıyı platformu"
        },
        {
            "word": "RUHSAT",
            "clue": "Bir işi yapabilmek için resmi makamdan alınan izin belgesi"
        },
        {
            "word": "RÜZGAR",
            "clue": "Havanın yüksek basınçtan alçak basınca doğru akışı, yel"
        },
        {
            "word": "SAATÇİ",
            "clue": "Saatleri satan veya bozulduğunda tamir eden zanaatkar"
        },
        {
            "word": "SAĞLAM",
            "clue": "Hasar görmemiş, dayanıklı ve bozulmamış olan"
        },
        {
            "word": "SALKIM",
            "clue": "Bir sap üzerinde bir arada bulunan meyveler topluluğu"
        },
        {
            "word": "SANİYE",
            "clue": "Bir dakikanın altmışta birine denk gelen temel zaman birimi"
        },
        {
            "word": "SANTRA",
            "clue": "Futbol sahasının tam ortasındaki başlama vuruşu noktası"
        },
        {
            "word": "SARHOŞ",
            "clue": "Alkolün etkisiyle dengesini ve iradesini yitirmiş kimse"
        },
        {
            "word": "SARMAL",
            "clue": "Helezoni biçimde kıvrılarak uzanan dolambaçlı yapı"
        },
        {
            "word": "SEÇMEN",
            "clue": "Seçimlerde oy kullanma hakkına sahip olan vatandaş"
        },
        {
            "word": "SEKTÖR",
            "clue": "Ekonominin ve üretimin belirli bir iş kolunu oluşturan alanı"
        },
        {
            "word": "SENSÖR",
            "clue": "Isı, ışık veya hareketi algılayıp elektrik sinyaline çeviren duyarga"
        },
        {
            "word": "SERVİS",
            "clue": "Müşterilere sunulan hizmet veya tamir bakım atölyesi"
        },
        {
            "word": "SİSTEM",
            "clue": "Birbirine bağlı ve düzenli çalışan parçaların oluşturduğu bütün"
        },
        {
            "word": "SİYASİ",
            "clue": "Devlet yönetimi ve politika ile ilgili olan"
        },
        {
            "word": "SLOGAN",
            "clue": "Bir görüşü veya kampanyayı özetleyen çarpıcı tanıtım sözü"
        },
        {
            "word": "SONSUZ",
            "clue": "Başı ve sonu olmayan, sınırsız ve ebedi olan"
        },
        {
            "word": "SOSYAL",
            "clue": "Toplumla ve insanlar arasındaki ilişkilerle ilgili olan"
        },
        {
            "word": "SÖZLÜK",
            "clue": "Bir dildeki kelimeleri ve anlamlarını toplayan başvuru kitabı"
        },
        {
            "word": "SPORCU",
            "clue": "Bir spor dalıyla profesyonel veya amatör uğraşan kimse"
        },
        {
            "word": "SULTAN",
            "clue": "Padişah veya hükümdar ailesinden gelen asil unvan"
        },
        {
            "word": "SÜMBÜL",
            "clue": "Baharda mis gibi kokan soğanlı ve renkli kır çiçeği"
        },
        {
            "word": "SÜVARİ",
            "clue": "Atlı asker veya at üstünde görev yapan askeri birlik"
        },
        {
            "word": "ŞALTER",
            "clue": "Elektrik devresini anında açıp kapatmaya yarayan anahtar"
        },
        {
            "word": "ŞANSLI",
            "clue": "İşleri rast giden, talihi yaver giden bahtiyar kimse"
        },
        {
            "word": "ŞEBEKE",
            "clue": "Elektrik, su veya haberleşme hatlarının ördüğü geniş ağ"
        },
        {
            "word": "ŞEFFAF",
            "clue": "Arkasındaki nesneleri net olarak gösteren, saydam olan"
        },
        {
            "word": "ŞİMŞEK",
            "clue": "Bulutlar arasında gerçekleşen parlak elektrik deşarjı"
        },
        {
            "word": "TABELA",
            "clue": "Üzerinde yazı ve işaretler bulunan tanıtım veya yön levhası"
        },
        {
            "word": "TABİAT",
            "clue": "İnsan müdahalesi olmadan var olan doğal çevre, doğa"
        },
        {
            "word": "TAHSİL",
            "clue": "Düzenli bir okul ve üniversitede öğrenim görme süreci"
        },
        {
            "word": "TAKVİM",
            "clue": "Zamanı gün, ay ve yıl dilimlerine bölen cetvel"
        },
        {
            "word": "TANDIR",
            "clue": "Yere çukur kazılarak yapılan geleneksel ekmek pişirme fırını"
        },
        {
            "word": "TANKER",
            "clue": "Sıvı yakıt veya su taşımak için özel yapılmış tanker gemi veya araç"
        },
        {
            "word": "TASARI",
            "clue": "Bir amaca ulaşmak için hazırlanan plan taslağı"
        },
        {
            "word": "TASVİR",
            "clue": "Bir şeyi göz önünde canlandıracak şekilde sözle betimleme"
        },
        {
            "word": "TEKNİK",
            "clue": "Bir sanatta veya bilimde uygulanan pratik yöntemler bütünü"
        },
        {
            "word": "TEMBEL",
            "clue": "İş yapmaktan kaçınan, çalışmayı sevmeyen uyuşuk kişi"
        },
        {
            "word": "TEMKİN",
            "clue": "İleriyi düşünerek tedbirli ve dikkatli davranma"
        },
        {
            "word": "TEMSİL",
            "clue": "Bir topluluğu veya kurumu başkalarının önünde ifade etme"
        },
        {
            "word": "TEORİK",
            "clue": "Uygulamaya değil, düşünceye ve kurallara dayanan nazari bilgi"
        },
        {
            "word": "TERAPİ",
            "clue": "Hastalıkların veya ruhsal sıkıntıların iyileştirilme seansı"
        },
        {
            "word": "TERTİP",
            "clue": "Düzenleme, hazırlık veya askere çağrılan aynı dönem erler"
        },
        {
            "word": "TESLİM",
            "clue": "Bir şeyi sahibine verme veya mücadeleyi bırakıp boyun eğme"
        },
        {
            "word": "TEŞHİS",
            "clue": "Hastalığın ne olduğunu muayene sonucu belirleme, tanı"
        },
        {
            "word": "TEŞVİK",
            "clue": "Birini iyi veya faydalı bir işe yöneltip cesaretlendirme"
        },
        {
            "word": "TİMSAH",
            "clue": "Sıcak sularda ve bataklıklarda yaşayan iri zırhlı sürüngen"
        },
        {
            "word": "TOPLUM",
            "clue": "Aynı topraklar üzerinde yaşayan insanların oluşturduğu sosyal birlik"
        },
        {
            "word": "TOPTAN",
            "clue": "Malların teker teker değil, büyük partiler halinde satılması"
        },
        {
            "word": "TORPİL",
            "clue": "Denizaltılardan ateşlenen patlayıcı su altı roketi"
        },
        {
            "word": "TURİST",
            "clue": "Dinlenmek veya görmek amacıyla yabancı yerleri gezen yolcu"
        },
        {
            "word": "TÜRBİN",
            "clue": "Akışkanın enerjisini dönme hareketine çeviren çark mekanizması"
        },
        {
            "word": "TÜRKÇE",
            "clue": "Türk milletinin konuştuğu, Ural-Altay dil ailesine bağlı zengin dil"
        },
        {
            "word": "UÇURUM",
            "clue": "Dağ ve kayalıklarda dik ve son derece derin yamaç boşluğu"
        },
        {
            "word": "ULAŞIM",
            "clue": "Bir yerden başka bir yere gitme ve taşıma hizmetleri bütünü"
        },
        {
            "word": "ULUSAL",
            "clue": "Bir millete ait olan, bütün milleti kapsayan, milli"
        },
        {
            "word": "ÜRETİM",
            "clue": "Emek ve sermaye harcanarak mal veya hizmet meydana getirme"
        },
        {
            "word": "ÜRETEÇ",
            "clue": "Mekanik veya kimyasal enerjiyi elektrik enerjisine çeviren kaynak"
        },
        {
            "word": "VARLIK",
            "clue": "Var olan her şey, mevcudiyet veya maddi zenginlik"
        },
        {
            "word": "VİTRİN",
            "clue": "Mağazaların dışarıdan görünen ürün sergileme camlı bölmesi"
        },
        {
            "word": "YANGIN",
            "clue": "Kontrolden çıkarak etrafı kül eden yakıcı ateş felaketi"
        },
        {
            "word": "YARGIÇ",
            "clue": "Mahkemelerde davaları inceleyip karar veren hakim"
        },
        {
            "word": "YASTIK",
            "clue": "Başın altına konularak yatılan yumuşak kılıflı eşya"
        },
        {
            "word": "YAYGIN",
            "clue": "Pek çok yerde görülen, bilinen ve benimsenmiş olan"
        },
        {
            "word": "YÖNTEM",
            "clue": "Bir sonuca ulaşmak için izlenen düzenli ve planlı yol, metot"
        },
        {
            "word": "YUKARI",
            "clue": "Aşağı karşıtı, yüksekte olan yer veya üst taraf"
        },
        {
            "word": "YUMRUK",
            "clue": "Parmakların avuç içine sıkıca bükülmesiyle oluşan el hali"
        },
        {
            "word": "YÜKSEK",
            "clue": "Tabanından tepesine kadar mesafesi çok olan, alçak karşıtı"
        },
        {
            "word": "ZANAAT",
            "clue": "El emeği ve ustalıkla yapılan terzilik, marangozluk gibi meslekler"
        },
        {
            "word": "ZENGİN",
            "clue": "Parası, malı ve varlığı bol olan, varsıl kimse"
        },
        {
            "word": "ZEYTİN",
            "clue": "Akdeniz ikliminde yetişen, kahvaltıda yenen ve yağı çıkarılan meyve"
        },
        {
            "word": "ZİNCİR",
            "clue": "Birbirine geçmiş metal halkalardan oluşan sağlam bağ"
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
            "word": "GÜNEŞLİ",
            "clue": "Güneş ışınlarının ortalığı aydınlattığı açık hava"
        },
        {
            "word": "DENETÇİ",
            "clue": "Kurallara uygunluğu denetleyen ve teftiş eden görevli"
        },
        {
            "word": "SEYAHAT",
            "clue": "Bir yerden başka bir yere gitme, seyahat ve yolculuk"
        },
        {
            "word": "SAĞANAK",
            "clue": "Birdenbire başlayan, genellikle kısa süren şiddetli yağmur"
        },
        {
            "word": "FIRTINA",
            "clue": "Hızı saatte altmış kilometreyi aşan çok sert ve yıkıcı rüzgâr"
        },
        {
            "word": "TELGRAF",
            "clue": "Elektrik sinyalleriyle Mors alfabesi kullanarak mesaj ileten cihaz"
        },
        {
            "word": "AMBALAJ",
            "clue": "Ürünleri korumak ve sunmak için sarılan koruyucu paket"
        },
        {
            "word": "ASİSTAN",
            "clue": "Bir profesöre veya yöneticiye yardımcı olan uzman"
        },
        {
            "word": "AŞÇILIK",
            "clue": "Yemekleri lezzetli ve usulüne göre pişirme mesleği"
        },
        {
            "word": "AHTAPOT",
            "clue": "Sekiz adet vantuzlu kolu ve üç kalbi olan deniz yumuşakçası"
        },
        {
            "word": "AKUSTİK",
            "clue": "Seslerin yayılımını ve mekanın ses özelliklerini inceleyen bilim"
        },
        {
            "word": "ALTYAPI",
            "clue": "Bir şehrin yol, su, kanalizasyon gibi temel tesisleri bütünü"
        },
        {
            "word": "ANATOMİ",
            "clue": "Canlıların vücut yapısını ve organlarını inceleyen tıp dalı"
        },
        {
            "word": "ANTİKOR",
            "clue": "Vücudu mikroplara ve hastalıklara karşı savunan koruyucu protein"
        },
        {
            "word": "ARITICI",
            "clue": "Suyu veya havayı kirlerinden süzen filtreleme cihazı"
        },
        {
            "word": "GÖKTAŞI",
            "clue": "Atmosferi geçip yeryüzüne düşen meteor parçası"
        },
        {
            "word": "BİYOLOG",
            "clue": "Canlıların yapısını, gelişimini ve yaşamını inceleyen bilim insanı"
        },
        {
            "word": "BOTANİK",
            "clue": "Bitkiler alemini ve florayı inceleyen biyoloji dalı"
        },
        {
            "word": "BUZDAĞI",
            "clue": "Denizde serbest yüzen devasa tatlı su buz kütlesi"
        },
        {
            "word": "CAMEKAN",
            "clue": "Dükkanların mallarını sergilediği camlı vitrin bölmesi"
        },
        {
            "word": "CEMİYET",
            "clue": "Belirli bir amaç etrafında toplanmış topluluk veya dernek"
        },
        {
            "word": "CEZAEVİ",
            "clue": "Suçluların cezalarını çekmek üzere kapatıldığı bina, hapishane"
        },
        {
            "word": "İKRAMCI",
            "clue": "Misafirlerine cömertçe yiyecek içecek sunan kimse"
        },
        {
            "word": "ÇEKİRGE",
            "clue": "Arka bacaklarıyla çok yükseğe sıçrayabilen kanatlı böcek"
        },
        {
            "word": "ÇEKMECE",
            "clue": "Masalarda veya dolaplarda çekilerek açılan raylı göz"
        },
        {
            "word": "ÇERÇEVE",
            "clue": "Resimlerin, aynaların veya pencerelerin kenarını çevreleyen pervaz"
        },
        {
            "word": "ÇİFTLİK",
            "clue": "Tarım ve hayvancılık yapılan geniş arazi ve tesis"
        },
        {
            "word": "ÇİZELGE",
            "clue": "Bilgilerin satır ve sütunlar halinde düzenlendiği cetvel"
        },
        {
            "word": "DAĞITIM",
            "clue": "Üretilen malların veya postanın adreslere ulaştırılması"
        },
        {
            "word": "DAKTİLO",
            "clue": "Tuşlarına basılarak kağıda mekanik yazı yazan eski makine"
        },
        {
            "word": "DENETİM",
            "clue": "Bir kurumun faaliyetlerinin kurallara uygunluğunun teftişi"
        },
        {
            "word": "DİNAMİK",
            "clue": "Hareketli, canlı ve sürekli değişen güç"
        },
        {
            "word": "DİRENCİ",
            "clue": "Elektrik akımına karşı iletkenin gösterdiği zorluk"
        },
        {
            "word": "DİYALOG",
            "clue": "İki veya daha fazla kişi arasında geçen karşılıklı konuşma"
        },
        {
            "word": "EDEBİCE",
            "clue": "Edebi kurallara ve zarafete uygun olarak ifade edilmiş"
        },
        {
            "word": "EĞİTMEN",
            "clue": "Bir sporda veya sanatta öğrencileri yetiştiren uzman"
        },
        {
            "word": "EKOLOJİ",
            "clue": "Canlıların birbirleriyle ve çevreleriyle olan ilişkilerini inceleyen bilim"
        },
        {
            "word": "EKONOMİ",
            "clue": "Üretim, dağıtım ve tüketim ilişkilerini düzenleyen bilim ve sistem"
        },
        {
            "word": "ELDİVEN",
            "clue": "Soğuktan veya kirden korumak için ellere giyilen giysi"
        },
        {
            "word": "EMNİYET",
            "clue": "Güvenlik içinde olma hali veya emniyet teşkilatı"
        },
        {
            "word": "ENSTİTÜ",
            "clue": "Üniversitelerde belirli bir uzmanlık dalında araştırma yapan birim"
        },
        {
            "word": "EROZYON",
            "clue": "Toprağın su veya rüzgar etkisiyle süpürülüp aşınması"
        },
        {
            "word": "ESENLİK",
            "clue": "Ruhen ve bedenen sağlıklı ve huzurlu olma hali"
        },
        {
            "word": "ETKİSİZ",
            "clue": "Hiçbir gücü veya tesiri bulunmayan, faydasız"
        },
        {
            "word": "EVRİLME",
            "clue": "Aşamalı bir süreç içinde yeni bir yapıya dönüşme"
        },
        {
            "word": "FANTEZİ",
            "clue": "Hayal gücüne dayanan özgür ve sıradışı düşünce"
        },
        {
            "word": "FENOMEN",
            "clue": "Duyularla algılanabilen olay veya çok tanınan kişi"
        },
        {
            "word": "GÖSTERİ",
            "clue": "Seyircileri eğlendirmek için sahnede sunulan performans"
        },
        {
            "word": "FREKANS",
            "clue": "Bir dalganın bir saniyedeki titreşim veya devir sayısı"
        },
        {
            "word": "GALAKSİ",
            "clue": "Milyarlarca yıldızdan ve gaz bulutundan oluşan dev gök ada"
        },
        {
            "word": "GARANTİ",
            "clue": "Bir ürünün bozulması halinde ücretsiz tamir güvencesi"
        },
        {
            "word": "GÖZETİM",
            "clue": "Bir şeyin veya kişinin dikkatle kontrol altında tutulması"
        },
        {
            "word": "GÖZLEME",
            "clue": "Saç üzerinde pişirilen, içi peynirli veya patatesli hamur işi"
        },
        {
            "word": "GÜÇLÜCE",
            "clue": "Kuvveti yerinde olan, hayli kudretli kişi"
        },
        {
            "word": "HAKİKAT",
            "clue": "Yalan olmayan, gerçeğin ta kendisi"
        },
        {
            "word": "HAREKET",
            "clue": "Bir cismin uzayda yer değiştirmesi veya eylem"
        },
        {
            "word": "HASATÇI",
            "clue": "Tarladaki olgunlaşmış ekinleri toplayan emekçi"
        },
        {
            "word": "HAVADİS",
            "clue": "İlgi çeken yeni haber veya güncel olay"
        },
        {
            "word": "HAVUZLU",
            "clue": "İçinde yüzme havuzu bulunan bahçeli yapı"
        },
        {
            "word": "HIZLICA",
            "clue": "Aceleyle ve çabucak yapılan süratli hareket"
        },
        {
            "word": "HİPOTEZ",
            "clue": "Bilimsel bir araştırmada doğrulanmak üzere öne sürülen varsayım"
        },
        {
            "word": "HÜKÜMET",
            "clue": "Bir ülkeyi yöneten bakanlar kurulu ve icra organı"
        },
        {
            "word": "HÜKÜMLÜ",
            "clue": "Mahkemece cezası kesinleşip hapse mahkum edilen kişi"
        },
        {
            "word": "ISITICI",
            "clue": "Ortamı veya suyu ısıtmaya yarayan elektrikli cihaz"
        },
        {
            "word": "İHRACAT",
            "clue": "Bir ülkenin ürettiği malları yabancı ülkelere satması"
        },
        {
            "word": "İTHALAT",
            "clue": "Yabancı ülkelerden mal ve hammadde satın alma işlemi"
        },
        {
            "word": "İKTİSAT",
            "clue": "Kıt kaynakların en verimli kullanımını inceleyen ekonomi bilimi"
        },
        {
            "word": "İLERİCİ",
            "clue": "Yenilikleri ve toplumsal ilerlemeyi savunan kimse"
        },
        {
            "word": "İLKOKUL",
            "clue": "Zorunlu temel eğitimin ilk kademesini oluşturan okul"
        },
        {
            "word": "İLTİFAT",
            "clue": "Bir kimseye gönül alıcı, övücü ve güzel sözler söyleme"
        },
        {
            "word": "İNCELİK",
            "clue": "Kaba olmama, naziklik ve zarafet erdemi"
        },
        {
            "word": "İNTİZAM",
            "clue": "Her şeyin yerli yerinde ve düzenli bulunması durumu"
        },
        {
            "word": "İSKELET",
            "clue": "Vücuda biçim ve destek veren kemik çatısı"
        },
        {
            "word": "İSKEMLE",
            "clue": "Sırtlığı olan, kolsuz basit oturma sandalyesi"
        },
        {
            "word": "İSTİDAT",
            "clue": "Doğuştan gelen kavrama ve başarma becerisi, yetenek"
        },
        {
            "word": "İSYANCI",
            "clue": "Mevcut düzene veya otoriteye başkaldıran kimse"
        },
        {
            "word": "İŞTİRAK",
            "clue": "Bir işe veya ortaklığa katılma, ortak olma hali"
        },
        {
            "word": "İYİMSER",
            "clue": "Olayların daima olumlu ve güzel yönünü gören kişi"
        },
        {
            "word": "JEOLOJİ",
            "clue": "Yerin katmanlarını, madenlerini ve tarihini inceleyen yer bilimi"
        },
        {
            "word": "KALAMAR",
            "clue": "On kollu, mürekkep kesesi bulunan deniz yumuşakçası"
        },
        {
            "word": "KALBURU",
            "clue": "Hububatı elemek için kullanılan iri delikli elek"
        },
        {
            "word": "KANARYA",
            "clue": "Güzel ötüşü ve sarı tüyleriyle kafeslerde beslenen ötücü kuş"
        },
        {
            "word": "KARAMAN",
            "clue": "İç Anadolu'da tarihi bir Türk ili"
        },
        {
            "word": "KARAVAN",
            "clue": "Seyahat ederken içinde yaşanabilen motorlu veya çekmeli konut araç"
        },
        {
            "word": "KARINCA",
            "clue": "Toprak altında yuvalar kuran, çalışkanlığıyla ünlü minik böcek"
        },
        {
            "word": "KARİDES",
            "clue": "Denizlerde yaşayan, eti lezzetli kabuklu küçük deniz canlısı"
        },
        {
            "word": "KAZANCI",
            "clue": "İş veya ticaretten elde edilen maddi kazanç miktarı"
        },
        {
            "word": "KELEBEK",
            "clue": "Rengarenk kanatlarıyla çiçekten çiçeğe uçan zarif böcek"
        },
        {
            "word": "KERAMET",
            "clue": "Ermiş kişilere atfedilen olağanüstü olay veya meziyet"
        },
        {
            "word": "KILAVUZ",
            "clue": "Yol bilmeyene yol gösteren, yol yordam öğreten rehber"
        },
        {
            "word": "KİŞİLİK",
            "clue": "Bireyi başkalarından ayıran karakteristik özellikler bütünü"
        },
        {
            "word": "KOLONYA",
            "clue": "Alkol ve hoş esans içeren ferahlatıcı kokulu sıvı"
        },
        {
            "word": "KOMUTAN",
            "clue": "Bir askeri birliği veya orduyu yöneten en yetkili subay"
        },
        {
            "word": "KOŞULLU",
            "clue": "Bir şartın veya kuralın gerçekleşmesine bağlı olan"
        },
        {
            "word": "KÖMÜRLÜ",
            "clue": "Yakıt olarak kömür kullanan veya kömür içeren sistem"
        },
        {
            "word": "KÖTÜLÜK",
            "clue": "Başkalarına zarar veren ahlak dışı fena davranış"
        },
        {
            "word": "KRALİÇE",
            "clue": "Bir krallığı yöneten kadın hükümdar veya kralın eşi"
        },
        {
            "word": "KUĞULAR",
            "clue": "Göllerde yüzen, uzun boyunlu zarif ve asil beyaz su kuşları"
        },
        {
            "word": "KURBAĞA",
            "clue": "Hem karada hem suda yaşayabilen, zıplayarak ilerleyen amfibi"
        },
        {
            "word": "KUYUMCU",
            "clue": "Altın, gümüş ve değerli taşlardan takı satan esnaf"
        },
        {
            "word": "LEBLEBİ",
            "clue": "Nohudun kavrulup fırınlanmasıyla elde edilen kuru yemiş"
        },
        {
            "word": "MANOLYA",
            "clue": "İri ve güzel kokulu beyaz çiçekler açan yapraklı ağaç"
        },
        {
            "word": "MARATON",
            "clue": "Yaklaşık kırk iki kilometre koşulan uzun mesafe atletizm yarışı"
        },
        {
            "word": "MEKANİK",
            "clue": "Kuvvetlerin cisimler üzerindeki hareket ve etkilerini inceleyen fizik dalı"
        },
        {
            "word": "MENEVŞE",
            "clue": "Baharda mor ve mavi açan narin kır çiçeği, menekşe"
        },
        {
            "word": "MENÜLER",
            "clue": "Restoranlarda yemek listesini ve fiyatlarını gösteren kartlar"
        },
        {
            "word": "MERHABA",
            "clue": "Karşılaşıldığında esenlik dilemek için söylenen selam sözü"
        },
        {
            "word": "MERKEZİ",
            "clue": "Bir alanın veya kurumun tam ortasında yer alan ana merkez"
        },
        {
            "word": "MEŞGALE",
            "clue": "İnsanı oyalayan veya uğraştıran faydalı iş, meşguliyet"
        },
        {
            "word": "METAFOR",
            "clue": "Bir kavramı başka bir kavramla anlatma sanatı, eğretileme"
        },
        {
            "word": "METANET",
            "clue": "Zorluklar ve acılar karşısında dayanma gücü, sabır"
        },
        {
            "word": "MİSAFİR",
            "clue": "Bir eve veya yere konuk olarak gelen kimse"
        },
        {
            "word": "MOTORLU",
            "clue": "Kendi motoru sayesinde hareket eden araç veya makine"
        },
        {
            "word": "MUHABİR",
            "clue": "Olayları yerinde izleyip basına haber geçen kimse"
        },
        {
            "word": "MUHAFIZ",
            "clue": "Bir kişiyi, yeri veya kaleyi korumakla görevli muhafız"
        },
        {
            "word": "MÜŞTERİ",
            "clue": "Bir mal veya hizmeti bedelini ödeyerek satın alan alıcı"
        },
        {
            "word": "MÜZİKAL",
            "clue": "Konusu müzik, şarkı ve danslarla anlatılan sahne oyunu"
        },
        {
            "word": "NEZAKET",
            "clue": "Başkalarına karşı ince, kibar ve saygılı davranma erdemi"
        },
        {
            "word": "NİTELİK",
            "clue": "Bir şeyin iyi veya kötü olmasını belirleyen temel vasıf"
        },
        {
            "word": "NÜKLEER",
            "clue": "Atom çekirdeği ile veya çekirdek enerjisiyle ilgili olan"
        },
        {
            "word": "OKSİJEN",
            "clue": "Canlıların solunumunda hayati rol oynayan renksiz gaz"
        },
        {
            "word": "OKYANUS",
            "clue": "Kıtaları birbirinden ayıran devasa tuzlu su kütlesi"
        },
        {
            "word": "ORTAKÖY",
            "clue": "İstanbul Boğazı kıyısında tarihi camisiyle ünlü semt"
        },
        {
            "word": "OYUNCAK",
            "clue": "Çocukların oynaması ve eğlenmesi için tasarlanmış eşya"
        },
        {
            "word": "ÖLÇEKLİ",
            "clue": "Harita veya planda belli bir küçültme oranıyla çizilmiş"
        },
        {
            "word": "ÖRÜMCEK",
            "clue": "Sekiz bacaklı, ağ örerek avını yakalayan eklembacaklı"
        },
        {
            "word": "ÖĞRETİM",
            "clue": "Belli bir alanda bilgi ve beceri kazandırma mesleki işi"
        },
        {
            "word": "PALYAÇO",
            "clue": "Sirkelerde insanları güldüren komik kostümlü sahne sanatçısı"
        },
        {
            "word": "PAPATYA",
            "clue": "Ortası sarı, yaprakları beyaz ve narin bahar çiçeği"
        },
        {
            "word": "PARAŞÜT",
            "clue": "Havadan atlayanların güvenle yere inmesini sağlayan hava kubbesi"
        },
        {
            "word": "PARTİCİ",
            "clue": "Bir siyasi partiye bağlı veya onu tutan kimse"
        },
        {
            "word": "PELİKAN",
            "clue": "Gagası altında büyük bir balık kesesi bulunan su kuşu"
        },
        {
            "word": "PENGUEN",
            "clue": "Güney kutbunda yaşayan, uçamayan ama usta yüzen deniz kuşu"
        },
        {
            "word": "PİRAMİT",
            "clue": "Tabanı kare, yan yüzeyleri üçgen olan anıtsal geometrik yapı"
        },
        {
            "word": "PİYANGO",
            "clue": "Numaralı biletlere çekilişle ikramiye dağıtan şans oyunu"
        },
        {
            "word": "PLANLAR",
            "clue": "Bir amaca ulaşmak için önceden hazırlanan adımlar bütünü"
        },
        {
            "word": "POPÜLER",
            "clue": "Geniş kitleler tarafından çok sevilen ve tutulan"
        },
        {
            "word": "SAYGILI",
            "clue": "Büyüklerine ve çevresine hürmet gösteren edepli kişi"
        },
        {
            "word": "SEÇENEK",
            "clue": "Bir tercih durumunda seçilebilecek yollardan her biri"
        },
        {
            "word": "SEMAVER",
            "clue": "İçinde kömür veya elektrikle su kaynatılan musluklu çay kazanı"
        },
        {
            "word": "SEMPATİ",
            "clue": "Bir kimseye karşı duyulan sıcak ve içten yakınlık"
        },
        {
            "word": "SENDİKA",
            "clue": "İşçilerin veya memurların haklarını korumak için kurduğu örgüt"
        },
        {
            "word": "SERAMİK",
            "clue": "Yüksek ısıda pişirilerek üretilen dayanıklı kil malzeme"
        },
        {
            "word": "SERGİCİ",
            "clue": "Pazar veya fuarlarda mallarını sergileyip satan esnaf"
        },
        {
            "word": "SEVİMLİ",
            "clue": "Cana yakın, sempatik ve insanın içini ısıtan"
        },
        {
            "word": "SEYİRCİ",
            "clue": "Tiyatro, maç veya sinemayı izleyen izleyici topluluğu"
        },
        {
            "word": "SIĞINAK",
            "clue": "Savaş veya felaket anında can güvenliğini koruyan sığınma yeri"
        },
        {
            "word": "SİHİRLİ",
            "clue": "Olağanüstü ve büyüleyici güçleri olan, tılsımlı"
        },
        {
            "word": "SÖYLEŞİ",
            "clue": "İki veya daha fazla kişinin dostça yaptığı tatlı sohbet"
        },
        {
            "word": "STADYUM",
            "clue": "Seyircilerin çevresinde oturduğu büyük açık spor sahası"
        },
        {
            "word": "SÜPÜRGE",
            "clue": "Yerleri süpürüp tozları temizlemeye yarayan ev aleti"
        },
        {
            "word": "SÜREKLİ",
            "clue": "Kesintiye uğramadan devam eden, durmaksızın süren"
        },
        {
            "word": "ŞANSSIZ",
            "clue": "Talihi yaver gitmeyen, şansı gülmeyen kimse"
        },
        {
            "word": "TAHLİYE",
            "clue": "Bir yeri boşaltma veya tutukluyu cezaevinden salıverme"
        },
        {
            "word": "TANITIM",
            "clue": "Bir ürünü veya kurumu kamuoyuna duyurma faaliyeti"
        },
        {
            "word": "TASARIM",
            "clue": "Bir yapının veya ürünün zihinde biçimlendirilmiş yaratıcı planı"
        },
        {
            "word": "TENCERE",
            "clue": "İçinde çorba ve sulu yemekler pişirilen kapaklı derin mutfak kabı"
        },
        {
            "word": "TERBİYE",
            "clue": "Ailede ve toplumda kazanılan ahlaki görgü ve incelik"
        },
        {
            "word": "TERCÜME",
            "clue": "Bir dildeki metni başka bir dile çevirme işi"
        },
        {
            "word": "TERSANE",
            "clue": "Gemilerin inşa edildiği ve onarımının yapıldığı kıyı tesisi"
        },
        {
            "word": "TESİSAT",
            "clue": "Bir yapının elektrik, su veya gaz hatları bütünü"
        },
        {
            "word": "TESTERE",
            "clue": "Odun veya demir kesmeye yarayan tırtıklı çelik el aleti"
        },
        {
            "word": "TİCARET",
            "clue": "Kar sağlamak amacıyla mal ve hizmetlerin alınıp satılması"
        },
        {
            "word": "TRAKTÖR",
            "clue": "Tarlaları sürmek ve tarım aletlerini çekmek için kullanılan motorlu araç"
        },
        {
            "word": "TRAMVAY",
            "clue": "Şehir içi raylar üzerinde elektrikle çalışan yolcu taşıtı"
        },
        {
            "word": "TURUNCU",
            "clue": "Kırmızı ile sarının karışımından oluşan canlı sıcak renk"
        },
        {
            "word": "TÜRKÜCÜ",
            "clue": "Halk türkülerini ustalıkla söyleyen ses sanatçısı"
        },
        {
            "word": "UÇURTMA",
            "clue": "Rüzgarda ipe bağlı olarak gökyüzünde süzülen çıtalı kağıt oyuncak"
        },
        {
            "word": "UMUTSUZ",
            "clue": "Geleceğe dair hiçbir ümidi kalmamış olan, karamsar"
        },
        {
            "word": "USTALIK",
            "clue": "Bir zanaatta veya meslekte en üst düzeye ulaşmış olma becerisi"
        },
        {
            "word": "UYARICI",
            "clue": "Bir organı veya insanı harekete geçiren, ikaz edici etki"
        },
        {
            "word": "UZLAŞMA",
            "clue": "Tarafların anlaşmazlığı karşılıklı ödünlerle çözmesi"
        },
        {
            "word": "ÜRETİCİ",
            "clue": "Mal veya tarım ürünü yetiştirip piyasaya sunan kimse"
        },
        {
            "word": "VAKİTLİ",
            "clue": "Her işi zamanında ve saatinde yapan, dakik kişi"
        },
        {
            "word": "VANGÖLÜ",
            "clue": "Türkiye'nin en büyük gölü olan sodalı kapalı havza gölü"
        },
        {
            "word": "VELİAHT",
            "clue": "Bir hükümdardan sonra tahta geçecek olan resmi varis"
        },
        {
            "word": "VERİMLİ",
            "clue": "Emeğin ve kaynağın karşılığında bol ürün veya kazanç sağlayan"
        },
        {
            "word": "YALITIM",
            "clue": "Isı, ses veya elektriğin dışarıya kaçmasını engelleyen izolasyon"
        },
        {
            "word": "YASEMİN",
            "clue": "Beyaz ve sarı renkli, çok hoş kokulu çiçekler açan sarmaşık bitki"
        },
        {
            "word": "YATIRIM",
            "clue": "Gelecekte kazanç sağlamak amacıyla sermayeyi bir işe yatırma"
        },
        {
            "word": "YENİLİK",
            "clue": "Eskinin yerine geçen yeni fikir, buluş veya yöntem"
        },
        {
            "word": "YÖNETİM",
            "clue": "Bir kurumu, şirketi veya devleti sevk ve idare etme işi"
        },
        {
            "word": "YURTTAŞ",
            "clue": "Aynı vatanı paylaşan ve aynı devlete vatandaşlık bağıyla bağlı kişi"
        },
        {
            "word": "ZİYARET",
            "clue": "Bir kimseyi veya kutsal bir yeri görmeye gitme eylemi"
        },
        {
            "word": "ADAPTÖR",
            "clue": "Farklı parçaları veya voltajları birbirine bağlayan uyarlayıcı"
        },
        {
            "word": "AFİŞLER",
            "clue": "Duyuru veya tanıtım için duvarlara asılan renkli ilanlar"
        },
        {
            "word": "AĞAÇÇIK",
            "clue": "Ağaçtan küçük, çalıdan büyük çok yıllık odunsu bitki"
        },
        {
            "word": "AĞAÇLIK",
            "clue": "Ağaçları bol olan koruluk veya küçük ormanlık yeşil alan"
        },
        {
            "word": "ALTINCI",
            "clue": "Sıralamada beşinciden hemen sonra gelen sıra derecesi"
        },
        {
            "word": "AMBARCI",
            "clue": "Depodaki malları koruyup kayıtlarını tutan görevli"
        },
        {
            "word": "ARABACI",
            "clue": "At arabası işleten veya araba tamiri yapan zanaatkar"
        },
        {
            "word": "ARAŞTIR",
            "clue": "Bilgi edinmek için dikkatle incele ve soruştur"
        },
        {
            "word": "ARKADAŞ",
            "clue": "Birbirine karşı derin sevgi ve bağlılık duyan samimi dost"
        },
        {
            "word": "ARMADOR",
            "clue": "Ticaret gemisi sahibi veya gemi filosu işletmecisi"
        },
        {
            "word": "ASİLLİK",
            "clue": "Soylu, üstün ahlaklı ve erdemli olma durumu, asalet"
        },
        {
            "word": "AŞAMALI",
            "clue": "Basamak basamak ve kademeli olarak ilerleyen süreç"
        },
        {
            "word": "AVCILIK",
            "clue": "Yabani hayvanları yakalama veya avlama sporu ve uğraşı"
        },
        {
            "word": "AYLIKÇI",
            "clue": "Ücretini ayda bir düzenli olarak alan maaşlı çalışan"
        },
        {
            "word": "AYRILIK",
            "clue": "Birbirinden veya memleketten uzak kalma hali, firak"
        },
        {
            "word": "BACANAK",
            "clue": "Eşleri kız kardeş olan erkeklerin birbirine göre akrabalığı"
        },
        {
            "word": "BADEMCİ",
            "clue": "Badem yetiştiren veya badem şekeri satan esnaf"
        },
        {
            "word": "BAGAJLI",
            "clue": "Eşya koymak için arkasında bagaj bölmesi bulunan taşıt"
        },
        {
            "word": "BAHARAT",
            "clue": "Yemeklere lezzet ve koku katan kurutulmuş bitkisel tatlandırıcı"
        },
        {
            "word": "BAHÇECİ",
            "clue": "Park ve bahçelerin bakımını üstlenen peyzaj görevlisi"
        },
        {
            "word": "BAKIRCI",
            "clue": "Bakır kap ve süs eşyaları üreten geleneksel zanaatkar"
        },
        {
            "word": "BANKACI",
            "clue": "Bankacılık işlemlerini ve para yönetimini yürüten finans uzmanı"
        },
        {
            "word": "BARIŞÇI",
            "clue": "Çatışmadan uzak, barış ve uzlaşmadan yana olan kimse"
        },
        {
            "word": "BASAMAK",
            "clue": "Merdivenlerin ayak basılan her bir basamağı veya derece"
        },
        {
            "word": "BAŞVURU",
            "clue": "Bir iş veya istek için resmi makama yapılan müracaat"
        },
        {
            "word": "BELGELİ",
            "clue": "Resmi bir evrakla veya vesikayla doğruluğu kanıtlanmış olan"
        },
        {
            "word": "BEYANAT",
            "clue": "Yetkili bir kimsenin basına yaptığı resmi açıklama, demeç"
        },
        {
            "word": "BİBERLİ",
            "clue": "İçinde acı veya tatlı biber bulunan çeşnili yiyecek"
        },
        {
            "word": "BİÇİMCİ",
            "clue": "Sanatta veya düşüncede öze değil sadece dış biçime önem veren"
        },
        {
            "word": "BİLEKLİ",
            "clue": "Bilek gücü ve fiziksel dayanıklılığı yüksek olan kişi"
        },
        {
            "word": "BİLETÇİ",
            "clue": "Toplu taşımada veya gişede bilet kesip denetleyen görevli"
        },
        {
            "word": "BİLGİLİ",
            "clue": "Çeşitli konularda derin ve geniş bilgi birikimi olan bilge kişi"
        },
        {
            "word": "BİLMECE",
            "clue": "Bir şeyin üstü kapalı tarif edilerek sorulduğu zeka oyunu"
        },
        {
            "word": "BİRİNCİ",
            "clue": "Bir yarışmada veya sıralamada en önde gelen, lider"
        },
        {
            "word": "BİTKİLİ",
            "clue": "Üzerinde bolca nebat ve bitki örtüsü bulunan yeşil arazi"
        },
        {
            "word": "BOYAMAK",
            "clue": "Bir yüzeyi fırça veya ruloyla renklendirmek"
        },
        {
            "word": "BULUŞMA",
            "clue": "Önceden kararlaştırılan yerde insanların bir araya gelmesi"
        },
        {
            "word": "BUZHANE",
            "clue": "Yiyeceklerin bozulmaması için soğuk tutulan büyük soğuk hava deposu"
        },
        {
            "word": "BÜYÜTEÇ",
            "clue": "Küçük yazıları ve nesneleri optik olarak büyüten büyüteç mercek"
        },
        {
            "word": "CEBİRCİ",
            "clue": "Matematikte denklem ve cebir alanında uzman bilim insanı"
        },
        {
            "word": "CİLTEVİ",
            "clue": "Kitapların ve evrakların ciltlendiği matbaa atölyesi"
        },
        {
            "word": "ÇAKILLI",
            "clue": "İçinde bol miktarda küçük yuvarlak taşlar bulunan kumsal veya yol"
        },
        {
            "word": "ÇALGICI",
            "clue": "Müzik aleti çalarak geçimini sağlayan enstrüman sanatçısı"
        },
        {
            "word": "ÇAMAŞIR",
            "clue": "Yıkanması gereken kirli giyecekler veya iç giyim eşyası"
        },
        {
            "word": "ÇAMURLU",
            "clue": "Yağmur sebebiyle çamurla kaplanmış olan kaygan zemin"
        },
        {
            "word": "ÇEKİMLİ",
            "clue": "İnsanı kendine çeken, cazibeli ve sempatik olan"
        },
        {
            "word": "ÇELİKLİ",
            "clue": "Gövdesi veya zırhı mukavemetli çelikten yapılmış sağlam araç"
        },
        {
            "word": "ÇEVİRME",
            "clue": "Bir metni başka dile aktarma veya ateşte et kızartma yöntemi"
        },
        {
            "word": "ÇİÇEKÇİ",
            "clue": "Çeşit çeşit canlı süs çiçekleri satan dükkan veya esnaf"
        },
        {
            "word": "ÇİMENLİ",
            "clue": "Üzeri taze yeşil çimenlerle kaplanmış olan ferah bahçe"
        },
        {
            "word": "ÇİZMECİ",
            "clue": "Deriden çizme ve bot imal eden geleneksel usta"
        },
        {
            "word": "ÇOCUKSU",
            "clue": "Yetişkin birinin çocuk gibi davranması, safça tavır"
        },
        {
            "word": "DADILIK",
            "clue": "Küçük çocukların bakımını ve terbiyesini üstlenme görevi"
        },
        {
            "word": "DALGACI",
            "clue": "İşi ciddiye almayıp hafife alan sorumsuz ve neşeli kişi"
        },
        {
            "word": "DALGALI",
            "clue": "Yüzeyinde rüzgar sebebiyle büyük dalgalar oluşan hırçın deniz"
        },
        {
            "word": "DANIŞMA",
            "clue": "Binaların girişinde bilgi ve yönlendirme sağlayan danışma masası"
        },
        {
            "word": "DAVULCU",
            "clue": "Düğünlerde ve ramazan gecelerinde tokmakla davul çalan kimse"
        },
        {
            "word": "DEMİRCİ",
            "clue": "Demiri ocakta kızdırıp örste döverek biçimlendiren usta"
        },
        {
            "word": "DENEYCİ",
            "clue": "Bilimsel teorileri deney ve gözlemlerle test eden araştırmacı"
        },
        {
            "word": "DENİZCİ",
            "clue": "Denizcilik mesleğini icra eden, gemilerde çalışan personel"
        },
        {
            "word": "DERGİCİ",
            "clue": "Süreli yayın ve dergi çıkaran ya da bayide satan kimse"
        },
        {
            "word": "DERİNCE",
            "clue": "Tabanı normalden daha derin olan çukur veya korunaklı koy"
        },
        {
            "word": "DESENLİ",
            "clue": "Üzerinde dekoratif çizgiler ve nakışlar bulunan kumaş"
        },
        {
            "word": "DEVAMLI",
            "clue": "Hiç aralık vermeden sürekli olarak sürüp giden, daimi"
        },
        {
            "word": "DİLEKÇE",
            "clue": "Bir makama talep veya şikayeti bildiren imzalı resmi başvuru yazısı"
        },
        {
            "word": "DİNLEME",
            "clue": "Sesleri ve konuşmaları dikkatle kulak vererek takip etme faaliyeti"
        },
        {
            "word": "DONANIM",
            "clue": "Bilgisayarın fiziksel devreleri veya bir birliğin teçhizatı"
        },
        {
            "word": "DÖNEMEÇ",
            "clue": "Yolda yön değiştiren kavisli ve dikkat gerektiren viraj"
        },
        {
            "word": "DUMANLI",
            "clue": "Havası duman veya yoğun sisle kaplanmış olan sisli tepe"
        },
        {
            "word": "DUYARLI",
            "clue": "Çevresindeki olaylara ve insanlara karşı hassas ve ince anlayışlı"
        },
        {
            "word": "DÜDÜKÇÜ",
            "clue": "Düdük çalan veya çarşıda düdük satan seyyar esnaf"
        },
        {
            "word": "DÜĞMECİ",
            "clue": "Giysilere düğme diken veya tuhafiyede düğme satan dükkan"
        },
        {
            "word": "DÜMENCİ",
            "clue": "Gemilerde dümeni tutarak geminin rotasını belirleyen dümenci"
        },
        {
            "word": "DÜZENCİ",
            "clue": "İşleri ve evrakları intizamlı ve düzenli tutan tertipli kimse"
        },
        {
            "word": "DÜZENLİ",
            "clue": "Tertipli, tertemiz ve belirli bir sistem içinde muntazam işleyen"
        },
        {
            "word": "EFENDİM",
            "clue": "Telefonda veya hitapta saygıyla söylenen kibar seslenme sözü"
        },
        {
            "word": "EKSİLME",
            "clue": "Miktarın zamanla azalması veya sayıca gerilemesi durumu"
        },
        {
            "word": "ELEŞTİR",
            "clue": "Bir eserin veya fikrin doğru ve eksik yönlerini değerlendir"
        },
        {
            "word": "EMEKTAR",
            "clue": "Bir kuruma veya mesleğe uzun yıllar sadakatle hizmet etmiş kişi"
        },
        {
            "word": "EMELLER",
            "clue": "Ulaşılmak istenen yüce idealler, dilekler ve hedefler"
        },
        {
            "word": "EMLAKÇI",
            "clue": "Ev, arsa ve gayrimenkul alım satımına aracılık eden emlak danışmanı"
        },
        {
            "word": "ESNETME",
            "clue": "Spor öncesi kasları esneterek sakatlıkları önleme egzersizi"
        },
        {
            "word": "FARMASİ",
            "clue": "İlaç bilimi ve eczacılık uzmanlığı ile ilgili alan"
        },
        {
            "word": "FİTİLLİ",
            "clue": "Lambanın veya mumun alev alan fitili bulunan düzenek"
        },
        {
            "word": "GAMZELİ",
            "clue": "Yanaklarında veya çenesinde sevimli doğal çukuru olan kişi"
        },
        {
            "word": "GEÇİMLİ",
            "clue": "İnsanlarla iyi anlaşan, uyumlu, yumuşak başlı ve tatlı dilli kimse"
        },
        {
            "word": "GÖZGÖZE",
            "clue": "İki insanın doğrudan birbirinin gözlerinin içine bakışması"
        },
        {
            "word": "GÜREŞÇİ",
            "clue": "Minderde veya er meydanında güreş tutan pehlivan sporcu"
        },
        {
            "word": "GÜVENCE",
            "clue": "Bir taahhüdün yerine getirileceğini garanti eden güvence, teminat"
        },
        {
            "word": "HABERCİ",
            "clue": "Olayları takip edip basına ve kamuoyuna ulaştıran basın mensubu"
        },
        {
            "word": "HAMURSU",
            "clue": "Kıvamı pişmemiş yumuşak hamura benzeyen yoğrulabilir madde"
        },
        {
            "word": "HEDEFLE",
            "clue": "Bir gayeyi gözüne kestirip ona doğru azimle yönelmek"
        },
        {
            "word": "HEYBELİ",
            "clue": "Yanlarında yük taşımaya yarayan dokuma heybesi bulunan binek"
        },
        {
            "word": "HIRKALI",
            "clue": "Üzerine yün veya triko hırka giymiş olan kimse"
        },
        {
            "word": "HUZURLU",
            "clue": "Gönlü ferah, kaygılardan uzak ve barış dolu sakin hayat süren"
        },
        {
            "word": "İPLİKÇİ",
            "clue": "Dokuma için pamuk veya ipek iplik üreten ya da satan esnaf"
        },
        {
            "word": "İŞÇİLİK",
            "clue": "Bir ürünün imalatında harcanan el emeği ve ustalığın karşılığı"
        },
        {
            "word": "KABAKÇI",
            "clue": "Tarlasında kabak yetiştiren veya manavda kabak satan üretici"
        },
        {
            "word": "KAHVECİ",
            "clue": "Geleneksel kahvehaneyi işleten veya közde kahve pişiren usta"
        },
        {
            "word": "KAPLAMA",
            "clue": "Bir eşyanın yüzeyine geçirilen ahşap veya metal koruyucu katman"
        },
        {
            "word": "KARGOCU",
            "clue": "Paketleri ve kargoları alıcının kapısına ulaştıran dağıtıcı kurye"
        },
        {
            "word": "KAYIKÇI",
            "clue": "Göl veya denizde kayıkla yolcu ve balık taşıyan sandalcı"
        },
        {
            "word": "KAZAKLI",
            "clue": "Soğuk havaya karşı yün örme kazak giymiş olan"
        },
        {
            "word": "KEMANCI",
            "clue": "Dört telli yaylı enstrüman olan kemanı çalan müzisyen"
        },
        {
            "word": "KİLİMCİ",
            "clue": "El tezgahında desenli yün kilim dokuyan veya satan zanaatkar"
        },
        {
            "word": "KÖMÜRCÜ",
            "clue": "Isınma ve sanayi için odun ve kömür ticareti yapan esnaf"
        },
        {
            "word": "KUMAŞÇI",
            "clue": "Elbiselik ve döşemelik ipek, yün, pamuk kumaş satan manifaturacı"
        },
        {
            "word": "KÜREKÇİ",
            "clue": "Sandalda veya su sporlarında kürek çekerek tekneyi yürüten sporcu"
        },
        {
            "word": "MAKASÇI",
            "clue": "Demir yolunda trenlerin ray ve yön değiştirmesini sağlayan görevli"
        },
        {
            "word": "MASALCI",
            "clue": "Çocuklara eğitici ve eğlenceli halk masalları anlatan usta anlatıcı"
        },
        {
            "word": "MEDRESE",
            "clue": "Osmanlı döneminde ilim ve fen eğitimi verilen tarihi yüksekokul"
        },
        {
            "word": "MEVSİMİ",
            "clue": "Belli bir mevsime has olan veya tam zamanında yetişmiş taze ürün"
        },
        {
            "word": "MEYVECİ",
            "clue": "Bahçesinde meyve yetiştiren veya manavda taze meyve satan esnaf"
        },
        {
            "word": "MOBİLYA",
            "clue": "Ev ve iş yerlerini donatan masa, sandalye, koltuk gibi eşyalar"
        },
        {
            "word": "MUMLAMA",
            "clue": "Yiyeceğin veya eşyanın bozulmasını önlemek için balmumuyla kaplama"
        },
        {
            "word": "MÜHÜRCÜ",
            "clue": "Resmi kurumlar veya şahıslar için damga ve mühür kazıyan usta"
        },
        {
            "word": "NAKLİYE",
            "clue": "Eşya ve yükleri bir adresten başka bir şehre taşıma lojistiği"
        },
        {
            "word": "NAMUSLU",
            "clue": "Ahlak ve dürüstlük ilkelerine tam bağlı, güvenilir ve iffetli insan"
        },
        {
            "word": "OCAKLIK",
            "clue": "Eski evlerde ateş yakılan ve tencere kaynatılan davlumbaz altı"
        },
        {
            "word": "OKULLAR",
            "clue": "Geleceğin nesillerini yetiştiren ilk, orta ve lise eğitim yuvaları"
        },
        {
            "word": "OKUYUCU",
            "clue": "Kitap, gazete veya edebi eserleri merakla okuyan kitle, kaari"
        },
        {
            "word": "OTLAKÇI",
            "clue": "Kendi parasını harcamayıp başkalarının sırtından geçinen asalak kimse"
        },
        {
            "word": "PAMUKÇU",
            "clue": "Pamuk tarlası işleten veya pamuk balyaları ticareti yapan tüccar"
        },
        {
            "word": "PAPAĞAN",
            "clue": "Rengarenk tüyleri ve insan sözcüklerini taklit yeteneğiyle ünlü kuş"
        },
        {
            "word": "PATENCİ",
            "clue": "Ayağına taktığı tekerlekli veya buz patenleriyle kayan sporcu"
        },
        {
            "word": "PAZARCI",
            "clue": "Açık semt pazarlarında taze gıda tezgahı açan esnaf"
        },
        {
            "word": "PERDECİ",
            "clue": "Pencerelere kumaş ve tül perde diken veya kumaş satan dükkan"
        },
        {
            "word": "PİLAVCI",
            "clue": "Geleneksel sokak tezgahında veya dükkanda sıcak tavuklu pilav satan usta"
        },
        {
            "word": "PİPETLİ",
            "clue": "İçeceği ince pipet borusu yardımıyla tüketilen içecek kutusu"
        },
        {
            "word": "POSTACI",
            "clue": "Mektupları, evrakları ve kargoları kapı kapı dağıtan posta dağıtıcısı"
        },
        {
            "word": "RADYOCU",
            "clue": "Radyo istasyonunda program yapan sunucu veya radyo cihazı tamircisi"
        },
        {
            "word": "SAATLER",
            "clue": "Günün saat ve dakikalarını gösteren duvar, masa ve kol saatleri"
        },
        {
            "word": "SABUNCU",
            "clue": "Zeytinyağı ve defneyle doğal kalıp sabun imal eden zanaatkar"
        },
        {
            "word": "SAHAFÇI",
            "clue": "Eski baskı, sahaf ve ikinci el nadide kitaplar satan kitap dostu"
        },
        {
            "word": "SANATÇI",
            "clue": "Güzel sanatlar alanında yaratıcı eserler veren yetenekli icracı"
        },
        {
            "word": "SEBZECİ",
            "clue": "Taze sebze ve yeşillik yetiştiren veya dükkanında satan manav"
        },
        {
            "word": "SENELİK",
            "clue": "Bir yıllık dönemi kapsayan veya yılda bir defa tekrarlanan"
        },
        {
            "word": "SICAKÇA",
            "clue": "İnsanı rahatsız etmeyecek derecede tatlı ve ılık bir sıcaklık"
        },
        {
            "word": "SİLAHÇI",
            "clue": "Ateşli av ve savunma silahlarının tamir ve bakımını yapan usta"
        },
        {
            "word": "SOLUCAN",
            "clue": "Toprağın derinliklerinde yaşayan, toprağı besleyen omurgasız canlı"
        },
        {
            "word": "SUCULUK",
            "clue": "Evlere ve iş yerlerine sağlıklı kaynak suyu dağıtımı yapma işi"
        },
        {
            "word": "ŞAPKACI",
            "clue": "Güneşten veya soğuktan koruyan şapka, bere ve kasket üreten esnaf"
        },
        {
            "word": "ŞEKERCİ",
            "clue": "Lokum, badem ezmesi ve geleneksel şekerlemeler satan tatlıcı"
        },
        {
            "word": "ŞEHİRLİ",
            "clue": "Kırsalda değil, büyük şehir kültüründe yetişmiş görgülü kentli"
        },
        {
            "word": "ŞİİRSEL",
            "clue": "Şiir gibi duygulu, ahenkli ve insanda derin hisler uyandıran"
        },
        {
            "word": "TAMİRCİ",
            "clue": "Bozulan elektrikli aletleri, makineleri veya motorları onaran usta"
        },
        {
            "word": "TAŞRALI",
            "clue": "Büyük şehirlerin dışında, taşra kasaba ve köylerinde yaşayan kimse"
        },
        {
            "word": "TEBEŞİR",
            "clue": "Eski okul kara tahtalarına yazı yazmaya yarayan beyaz kireçli çubuk"
        },
        {
            "word": "TEMELLİ",
            "clue": "Bir yere kalıcı ve sürekli olarak yerleşmiş, devamlı kalan"
        },
        {
            "word": "TEPSİCİ",
            "clue": "Geleneksel pirinç veya bakır tepsiler üreten el sanatı ustası"
        },
        {
            "word": "TOHUMCU",
            "clue": "Tarım ve ziraat için kaliteli tohum üreten ve tedarik eden esnaf"
        },
        {
            "word": "TUZLUCA",
            "clue": "Tuz miktarı biraz belirgin olan veya tuzu hissedilen lezzet"
        },
        {
            "word": "UZMANCA",
            "clue": "Bir konuyu veya işi derin bir uzmanlık ve ustalıkla icra etme"
        },
        {
            "word": "YABANCI",
            "clue": "Başka bir memleketten veya kültürden gelen, henüz tanınmayan kimse"
        },
        {
            "word": "YABANSI",
            "clue": "İnsana alışılmadık, yadırgatıcı ve yabancı gelen soğuk durum"
        },
        {
            "word": "YANKILI",
            "clue": "Ses dalgalarının duvarlara çarpıp yankı yaptığı geniş kubbeli salon"
        },
        {
            "word": "YUVASIZ",
            "clue": "Barınacak sıcak bir evi veya yuvası olmayan çaresiz kimse"
        },
        {
            "word": "YÜREKLİ",
            "clue": "Zorluklar karşısında yılmayan, pek cesur ve korkusuz yiğit"
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

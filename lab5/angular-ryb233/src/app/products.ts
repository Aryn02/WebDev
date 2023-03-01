export interface Product {
  like:number;
  categid:number;

  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  link:string;
}

export const products = [
  {
    like:2,
    categid: 2,
    id: 1,
    name: 'Кондиционер TCL Elite TAC-07CHSA/XA41',
    price: 89990,
    description: 'Внутренний блок сплит-системы TCL Elite' +
        ' крепится на стену, что дает возможность выбрать оптимальное размещение кондиционера.' +
        ' Кондиционер предназначен для установки в помещениях площадью до 10 кв.м. Для удобства' +
        ' установки и контроля температуры и режимов работы кондиционер оснащен дисплеем и' +
        ' пультом дистанционного управления. Функция тихой работы «Ночной режим» пригодится при ' +
        'включении системы в ночное время. С помощью таймера вы можете заранее установить время ' +
        'включения и выключения устройства и к вашему приходу в помещении уже будет нужная температура.',
    image:
      'https://resources.cdn-kaspi.kz/shop/' +
        'medias/sys_master/images/images/hcf/h72/50067291996190/tcl-elite-tac-07chsa-xa41-belyj-104478696-1.jpg',
    rating:5,
    link: 'https://kaspi.kz/shop/p/tcl-elite-tac-07chsa-xa41-belyi-' +
        'montazhnyi-komplekt-104478696/?c=750000000&utm_source=google&utm_' +
        'medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=' +
        'CjwKCAiAl9efBhAkEiwA4TorivS1uoWlz3LTAMbej0OZWtmf52FxNaEExH_m_EC6CAchg74Fjbo5ZhoC21UQAvD_BwE#!/item',
  },

  {
    like:2,
    categid: 2,
    id: 2,
    name: 'Кондиционер DAUSCHER DAC-09OA + монтажный комплект',
    price: 109160 ,
    description: '',
    image: 'https://resources.cdn-kaspi.kz/shop' +
        '/medias/sys_master/images/images/h12/h04' +
        '/51357062430750/dauscher-dac-09oa-montazhnyi-komplekt-105201165-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/dauscher-dac-09oa-montazhnyi-komplekt-105201165' +
        '/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_' +
        'search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorivS1uoWlz3LTAMbej' +
        '0OZWtmf52FxNaEExH_m_EC6CAchg74Fjbo5ZhoC21UQAvD_BwE#!/item',
  },
  {
    like:2,
    categid: 2,
    id: 3,
    name: 'Кондиционер Atlantic ASAFA-12HRN8-S',
    price: 180990,
    description: 'Сплит-система Atlantic ASAFA-12HRN8-S ' +
        'представляет собой многофункциональное устройство, ' +
        'которое с легкостью справится не только с охлаждением, ' +
        'но также с обогревом, осушением и вентиляцией воздушного потока.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/' +
        'images/hf4/h3b/31671049912350/atlantic-asafa-12hrn1-s-serebristyj-' +
        'montaznyj-komplekt-4201112-1-Container.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/atlantic-asafa-12hrn8-s-montazhnyi-komplekt-4201112/' +
        '?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_' +
        'kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorivS1uoWlz3LTAMbej0OZWtmf52FxNaEExH_' +
        'm_EC6CAchg74Fjbo5ZhoC21UQAvD_BwE#!/item',
  },
  {
    like:2,
    categid: 2,
    id: 4,
    name: 'Кондиционер ARG CSH-09OB белый + монтажный комплект',
    price:109990,
    description: 'Внутренний блок сплит-системы ARG CSH-09OB ' +
        'крепится на стену, что дает возможность выбрать оптимальное ' +
        'размещение кондиционера. Кондиционер предназначен для установки ' +
        'в помещениях площадью до 27 кв.м. Для удобства установки и контроля ' +
        'температуры и режимов работы кондиционер оснащен дисплеем и пультом ' +
        'дистанционного управления. Сплит-система многофункциональна, так как ' +
        'помимо основных функций охлаждения и обогрева, в наличии функция мягкого ' +
        'осушения и вентиляции воздуха. Функция тихой работы «Ночной режим» пригодится при ' +
        'включении системы в ночное время. С помощью таймера вы можете заранее установить' +
        ' время включения и выключения устройства и к вашему приходу в помещении уже будет нужная температура.',
    image: 'https://resources.cdn-kaspi.kz/' +
        'shop/medias/sys_master/images/images' +
        '/h2d/h7e/32290923741214/arg-csh-09ob-belyj' +
        '-montaznyj-komplekt-100152375-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/arg-csh-09ob-belyi' +
        '-montazhnyi-komplekt-100152375/?c=750000000&utm_' +
        'source=google&utm_medium=cpc&utm_campaign=shop_' +
        'google_search_kaspi_brand_desktop&gclid=' +
        'CjwKCAiAl9efBhAkEiwA4TorivS1uoWlz3LTAMbej0OZWtmf52FxNaEExH_m' +
        '_EC6CAchg74Fjbo5ZhoC21UQAvD_BwE#!/item',
  },
  {
    like:2,
    categid: 2,
    id: 5,
    name: 'Кондиционер ALMACOM ACH-09LC',
    price: 225000,
    description: 'Внутренний блок сплит-системы ALMACOM ACH-09LC крепится на стену, ' +
        'что дает возможность выбрать оптимальное размещение кондиционера. Кондиционер предназначен для ' +
        'установки в помещениях площадью до 25 кв.м. Для удобства установки и контроля температуры и режимов ' +
        'работы кондиционер оснащен пультом дистанционного управления. Сплит-система многофункциональна, ' +
        'так как помимо основных функций охлаждения и обогрева, в наличии функция мягкого осушения и' +
        ' ионизации воздуха. С помощью таймера вы можете заранее установить время включения и выключения' +
        ' устройства и к вашему приходу в помещении уже будет нужная температура.Справится со всем!',
    image: 'https://resources.cdn-kaspi.kz/' +
        'shop/medias/sys_master/images/images/hda/h58/31488378011678/almacom-ach-09lc-cernyj' +
        '-montaznyj-komplekt-100354850-1-Container.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/almacom-ach-09lc-chernyi-montazhnyi-' +
        'komplekt-100354850/?c=750000000&utm_source=google&utm_medium=cpc&utm_' +
        'campaign=shop_google_search_kaspi_brand_desktop&gclid=' +
        'CjwKCAiAl9efBhAkEiwA4TorivS1uoWlz3LTAMbej0OZWtmf52FxNaEExH_m_EC6CAchg74Fjbo5ZhoC21UQAvD_BwE#!/item',
  },
  {
    like: 3,
    categid: 1,
    id:6,
    name: 'Смартфон Apple iPhone 13 128Gb черный',
    price: 373663,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: OLED, Super Retina XDR\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/' +
        'h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750' +
        '000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_k' +
        'aspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIk9mNOxKQ1IEWsWuN4IRCuVyHb' +
        'oOKLXVtzjz_SSZIjIHaGR0k8ZYBhoC_SMQAvD_BwE#!/item',
  },
  {
    like: 2,
    categid: 1,
    id: 7,
    name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
    price: 293200,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A13 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3110 мАч',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h76/hcc/31489168277534/apple-iphone-11-128gb-slim-box-cernyj-100692388-2-Container.jpg',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-10069' +
        '2388/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_go' +
        'ogle_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIk9mNOxKQ1IE' +
        'WsWuN4IRCuVyHboOKLXVtzjz_SSZIjIHaGR0k8ZYBhoC_SMQAvD_BwE#!/item',
  },
  {
    like: 2,
    categid: 1,
    id: 8,
    name: 'Смартфон Apple iPhone 14 Pro 256Gb фиолетовый',
    price: 633710,
    description: 'технология NFC: Да\n' +
        'цвет: фиолетовый\n' +
        'тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 6-ядерный Apple A16 Bionic\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 3125 мАч',
    image: 'https://resources.cdn-kaspi.kz/shop/medi' +
        'as/sys_master/images/images/h4d/h62/62948396728350/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item',
  },
  {
    like: 2,
    categid: 1,
    id: 9,
    name: 'Смартфон Apple iPhone 13 128Gb белый',
    price: 373780 ,
    description: 'технология NFC: Да\n' +
        'цвет: белый\n' +
        'тип экрана: OLED, Super Retina XDR\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/imag' +
        'es/images/hfc/h49/46392664621086/apple-iphone-13-128gb-belyj-102298420-3-Container.jpg',
    rating: 3,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000#!/item',
  },
  {
    like: 5,
    categid: 1,
    id:10,
    name: 'Смартфон Apple iPhone 14 128Gb голубой',
    price: 420459,
    description: 'технология NFC: Да\n' +
        'цвет: голубой\n' +
        'тип экрана: OLED, Super Retina XDR display\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3279 мАч',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h' +
        '41/63073057177630/apple-iphone-14-128gb-goluboj-106363150-1.jpg',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=750000000#!/item',
  },
  {
    like: 6,
    categid: 3,
    id: 11,
    name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 169990,
    description: 'диагональ экрана: 15.6 дюйм\n' +
        'процессор: Intel Pentium Gold 7505\n' +
        'видеокарта: Intel UHD Graphics\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 256 ГБ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/' +
        'images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg',
    rating: 3,
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item',
  },
  {
    like: 7,
    categid: 3,
    id: 12,
    name: 'Ноутбук ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый',
    price: 246990,
    description: 'диагональ экрана: 15.6 дюйм\n' +
        'процессор: Intel Core i3 1115G4\n' +
        'видеокарта: Intel UHD Graphics\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 512 ГБ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/' +
        'hbd/65953424277534/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg',
    rating: 3,
    link: 'https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000#!/item',
  },

  {
    like: 3,
    categid: 3,
    id:13,
    name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price:389980,
    description: 'диагональ экрана: 15.6 дюйм\n' +
        'процессор: Intel Core i5 11400H\n' +
        'видеокарта: NVIDIA GeForce GTX 1650\n' +
        'размер оперативной памяти: 16 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 512 ГБ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_mast' +
        'er/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
  },
  {
    like: 3,
    categid: 3,
    id:14,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 477999 ,
    description: 'диагональ экрана: 13.3 дюйм\n' +
        'процессор: Apple M1\n' +
        'видеокарта: Apple M1 7 core\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 256 ГБ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f' +
        '/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
  },
  {
    like: 8,
    categid: 3,
    id:15,
    name: 'Ноутбук ASUS TUF Gaming F15 90NR0704-M00D00 черный',
    price:529990,
    description: 'диагональ экрана: 15.6 дюйм\n' +
        'процессор: Intel Core i5 11400H\n' +
        'видеокарта: NVIDIA GeForce RTX 3050 Ti\n' +
        'размер оперативной памяти: 16 ГБ\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 512 ГБ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/ima' +
        'ges/images/hb0/h69/64606666129438/asus-tuf-gaming-f15-90nr0704-m00d00-chernyi-107230798-1.jpg',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-90nr0704-m00d00-chernyi-107230798/?c=750000000#!/item',
  },
  {
    like: 4,
    categid: 4,
    id:16,
    name: 'Стул N-12, 81x50x25 см, белый',
    price: 7500,
    description: 'тип: стул\n' +
        'материал: пластик\n' +
        'обивка: отсутствует\n' +
        'жесткость сиденья: высокая\n' +
        'высота, см: 81\n' +
        'ширина, см: 50\n' +
        'глубина, см: 25\n' +
        'цвет: белый\n' +
        'страна: Китай',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07' +
        '/hdc/32360448491550/stul-klassicheskii-barneo-woodmold-n-12-81x50x25-belyi-100189414-1.jpg',
    rating: 3,
    link: 'https://kaspi.kz/shop/p/stul-n-12-81x50x25-sm-belyi-100189414/?c=750000000#!/item',
  },
  {
    like: 5,
    categid: 4,
    id:17,
    name: 'Табурет ЗМИ Пенек легкий, 47x46x46 см, серый',
    price:3415,
    description: 'тип: табурет\n' +
        'материал: металл\n' +
        'обивка: экокожа\n' +
        'жесткость сиденья: средняя\n' +
        'высота, см: 47\n' +
        'ширина, см: 46\n' +
        'глубина, см: 46\n' +
        'цвет: серый\n' +
        'страна: Россия',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys' +
        '_master/images/images/h64/h2b/47387906899998/zmi-penek-legkii-184-seryi-102981664-2.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/taburet-zmi-penek-legkii-47x46x46-sm-seryi-102981664/?c=750000000#!/item',
  },

  {
    like: 5,
    categid: 4,
    id:18,
    name: 'Табурет Nika Эконом ТЭ-2, 46.5x32x32 см, слоновая кость',
    price:3240,
    description: 'тип: табурет\n' +
        'материал: металл\n' +
        'обивка: искусственная кожа\n' +
        'жесткость сиденья: средняя\n' +
        'высота, см: 46.5\n' +
        'ширина, см: 32\n' +
        'глубина, см: 32\n' +
        'цвет: бежевый\n' +
        'страна: Россия',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master' +
        '/images/images/h77/h0f/31820175343646/nika-ekonom-te-2-metall-46-5-smx32-smx32-sm-bezhevyi-16700785-1.jpg',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/taburet-nika-ekonom-te-2-46-5x32x32-sm-slonovaja-kost--16700785/?c=750000000#!/item',
  },
  {
    like: 9,
    categid: 4,
    id:19,
    name: 'Комод Комод Альтернатива 30x47.5x94 см, пластик, Колорит М7925',
    price:16999,
    description: 'тип: напольный\n' +
        'число ящиков: 4\n' +
        'материал: пластик\n' +
        'ширина, см: 30\n' +
        'высота, см: 94\n' +
        'цвет: черный',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/s' +
        'ys_master/images/images/h70/h1d/46777662177310/alternativa-kolorit-m7925-cernyj-102693205-1.jpg',
    rating: 3,
    link: 'https://kaspi.kz/shop/p/komod-al-ternativa-30x47-5x94-sm-plastik-kolorit-m7925--102693205/?c=750000000#!/item',
  },
  {
    like: 1,
    categid: 4,
    id:20,
    name: 'Игровое Defender Master, черный, красный',
    price: 66990,
    description: 'назначение: игровое кресло\n' +
        'тип базы: крестовина с колесами\n' +
        'материал обивки: искусственная кожа\n' +
        'регулировка: высота сиденья, ,угол наклона\n' +
        'цвет: черный, ,красный\n' +
        'страна: Россия',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_ma' +
        'ster/images/images/h9c/hde/34384277274654/igrovoe-kreslo-defender-master-krasnyj-101299047-1-Container.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/igrovoe-defender-master-chernyi-krasnyi-101299047/?c=750000000#!/item',
  },


  // {
  //   like: ,
  //   categid: ,
  //   id:,
  //   name: '',
  //   price:,
  //   description: '',
  //   image: '',
  //   rating: ,
  //   link: '',
  // },



];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

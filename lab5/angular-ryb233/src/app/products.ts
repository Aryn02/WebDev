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
    categid: 1,
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
    like:2,
    categid: 2,
    id: 6,
    name: 'Кондиционер Midea MSAG-12HRN1',
    price: 179990 ,
    description: 'Кондиционер MIDEA MSAG-12HRN1 технологичный, функциональный и надёжный, с приемлемой ценой.' +
        ' Отличается инновационным дизайном. Округлые линии корпуса и спрятанный дисплей делают сплит систему ' +
        'частью помещения. Оснащён компрессором, который работает в режиме включения и отключения. Система очистки' +
        ' воздуха кондиционера снабжена высокоэффективным ионизатором, который продуцирует миллионы отрицательно ' +
        'заряженных ионов, нейтрализующие все вредные элементы, присутствующие в Вашем доме. Отрицательно заряженные ' +
        'ионы притягивают к себе частицы пыли, бактерии, споры плесени и вирусы, нейтрализуют их, поддерживая чистоту' +
        ' и свежесть воздуха в помещении. В сравнении со стандартным фильтром фильтр высокой степени очистки' +
        ' задерживает на 50% больше пыли и на 80% больше пыльцы',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/' +
        'h0b/h93/34379015258142/midea-msag-12hrn1-belyj-101277889-1-Container.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/midea-msag-12hrn1-montazhnyi-komplekt-101277889/' +
        '?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_' +
        'kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorivS1uoWlz3LTAMbej0OZWtmf52FxNaEExH_m_' +
        'EC6CAchg74Fjbo5ZhoC21UQAvD_BwE#!/item',
  },
  {
    like:2,
    categid: 2,
    id: 7,
    name: 'Телевизор Samsung UE43T5300AUXCE 109',
    price: 198887,
    description: 'Смотрите HDR контент с улучшенной четкостью и точнейшей цветопередачей. ' +
        'Телевизор Samsung UHD обеспечивает более точную передачу деталей в самых ярких ' +
        'и темных сценах. Технология Ultra Clean View анализирует исходный контент с помощью ' +
        'новейшего алгоритма и формирует более качественные изображения с минимальным искажением.' +
        ' Наслаждайтесь четкостью изображения. Смотрите любимые программы в естественных цветах,' +
        ' которые воспроизводят детали также четко, как в реальности. Получите более красочное впечатление' +
        'от просмотра. Почувствуйте контраст и цвета оттенков. Технология Micro Dimming Pro делит экран на' +
        ' фрагменты, анализирует каждый из них и обеспечивает более глубокий черный цвет и более чистый ' +
        'белый цвет. Почувствуйте контраст и цвета оттенков. Технология Micro Dimming Pro делит экран на ' +
        'фрагменты, анализирует каждый из них и обеспечивает более глубокий черный цвет и более чистый ' +
        'белый цвет. Приложение SmartThings app оснащено функциями Универсального гида, Пульта ДУ и Панели ' +
        'управления (Dashboard).',
    image: 'https://resources.cdn-kaspi.kz' +
        '/shop/medias/sys_master/images/images/' +
        'hdf/h18/49319748468766/samsung-ue43t5300a' +
        'u-chernyi-100182013-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm' +
        '-chernyi-100182013/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign' +
        '=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorivS1uoW' +
        'lz3LTAMbej0OZWtmf52FxNaEExH_m_EC6CAchg74Fjbo5ZhoC21UQAvD_BwE#!/item',
  },
  {
    like:2,
    categid: 2,
    id: 8,
    name: 'Телевизор LG 43LM5772PLA ',
    price: 183658,
    description: 'Телевизоры LG HD позволяют наслаждаться более качественным ' +
        'изображением благодаря высокому разрешению и ярким цветам. Телевизо' +
        'ры LG HD созданы для того, чтобы удивлять вас отличным качеством из' +
        'ображения — в несколько раз лучше, чем SD. Благодаря технологиям Dy' +
        'namic Color и Active HDR весь ваш любимый контент будет более реалис' +
        'тичным и потрясающим. Передовой процессор обработки изображений корр' +
        'ектирует цвета, делая изображение более богатым и естественным. Насла' +
        'ждайтесь красотой натуральных цветов природы на экране вашего телевизо' +
        'ра. Телевизор LG HD обеспечивает точность деталей и яркие цвета благода' +
        'ря технологии Active HDR. Наслаждайтесь любимыми фильмами в оригинально' +
        'м качестве благодаря нескольким HDR-форматам, включая HDR10 и HLG. Тонкая р' +
        'амка и элегантный корпус телевизора гармонично впишутся в ваш интерьер, уси' +
        'лив приятные впечатления от просмотра.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/' +
        'sys_master/images/images/he5/he4/49320430370846/' +
        'lg-43lm5772pla-108-sm-cernyj-101293496-1-Container.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/lg-43lm5772pla-109-s' +
        'm-chernyi-101293496/?c=750000000&utm_source=google' +
        '&utm_medium=cpc&utm_campaign=shop_google_search_kas' +
        'pi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorivS' +
        '1uoWlz3LTAMbej0OZWtmf52FxNaEExH_m_EC6CAchg74Fjbo5ZhoC21UQAvD_BwE#!/item',
  },
  {
    like:2,
    categid: 2,
    id: 9,
    name: 'Телевизор LG 50UQ76003LD ',
    price: 267788,
    description: 'тип: LED-телевизор\n' +
        'диагональ: 50 дюйм\n' +
        'разрешение: 3840x2160\n' +
        'поддержка HD: 4K UHD\n' +
        'технология Smart TV: Да\n' +
        'wi-Fi: Да\n' +
        'входы: HDMI, ,USB',
    image: 'https://resources.cdn-kasp' +
        'i.kz/shop/medias/sys_master/images/images/h0a/h01/51110128320542/lg-50uq76003ld-chernyi-105054596-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/lg-50uq76003ld-127-sm-chernyi-105054596/?c=750000000&utm_source=google&' +
        'utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4T' +
        'orivS1uoWlz3LTAMbej0OZWtmf52FxNaEExH_m_EC6CAchg74Fjbo5ZhoC21UQAvD_BwE#!/item',
  },
  {
    like:2,
    categid: 2,
    id: 10,
    name: 'Телевизор DAUSCHER LD55AU7100',
    price: 239990,
    description: 'тип: LED-телевизор\n' +
        'диагональ: 55 дюйм\n' +
        'разрешение: 3840x2160\n' +
        'поддержка HD: 4K UHD\n' +
        'технология Smart TV: Да\n' +
        'wi-Fi: Да\n' +
        'входы: аудио, ,оптический, ,VGA',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_mas' +
        'ter/images/images/h3c/hfa/66314652581918/dauscher-ld55au7100-chernyi-107598351-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/dauscher-ld55au7100-140-sm-chernyi-107598351/?c=7' +
        '50000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&' +
        'gclid=CjwKCAiAl9efBhAkEiwA4TorivS1uoWlz3LTAMbej0OZWtmf52FxNaEExH_m_EC6CAchg74Fjbo5ZhoC21UQAvD_BwE#!/item',
  },
  // {
  //   id:,
  //   name: '',
  //   price:,
  //   description: '',
  //   image: '',
  //   rating: ,
  //   link: '',
  // },
  //
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

export interface Product {
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
  // {
  //   id:,
  //   name: '',
  //   price:,
  //   description: '',
  //   image: '',
  //   rating: ,
  //   link: '',
  // },
  // {
  //   id:,
  //   name: '',
  //   price:,
  //   description: '',
  //   image: '',
  //   rating: ,
  //   link: '',
  // },
  // {
  //   id:,
  //   name: '',
  //   price:,
  //   description: '',
  //   image: '',
  //   rating: ,
  //   link: '',
  // },
  // {
  //   id:,
  //   name: '',
  //   price:,
  //   description: '',
  //   image: '',
  //   rating: ,
  //   link: '',
  // },
  // {
  //   id:,
  //   name: '',
  //   price:,
  //   description: '',
  //   image: '',
  //   rating: ,
  //   link: '',
  // },
  // {
  //   id:,
  //   name: '',
  //   price:,
  //   description: '',
  //   image: '',
  //   rating: ,
  //   link: '',
  // },
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

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
    name: 'Phone XL',
    price: 799,
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
    link: '',
  },
  // {
  //   id: 2,
  //   name: 'Phone Mini',
  //   price: 699,
  //   description: 'A great phone with one of the best cameras',
  //   // image: 'kjkn',
  // },
  // {
  //   id: 3,
  //   name: 'Phone Standard',
  //   price: 299,
  //   description: '',
  //   // image: 'kjkn',
  // },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

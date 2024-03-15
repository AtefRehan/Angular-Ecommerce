const productList = [
  {
    id: 10,
    name: 'Accent TV Unit',
    price: 36999,
    quantity: 4,
    imgURL:
      'https://i.pinimg.com/564x/2f/87/ae/2f87aeb2116f6a6061488c2f44941693.jpg',
    categoryID: 3,
    discount: 15,
    matrial: 'MDF',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  },
  // {
  //   id: 11,
  //   name: 'Plymouth TV Unit',
  //   price: 36999,
  //   quantity: 10,
  //   imgURL:
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf55798tMjBRkdRPZnplmQKcy3RD6ULdAeBA&usqp=CAU',
  //   categoryID: 3,
  //   discount:20,
  //   matrial: 'wood',
  //   description:
  //     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  // },  {
  //   id: 12,
  //   name: 'Accent TV Unit',
  //   price: 36999,
  //   quantity: 4,
  //   imgURL:
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRCIlA9IXEocK8-0ZWjTZjH_qF75ipHAUXCg&usqp=CAU',
  //   categoryID: 3,
  //   discount:20,
  //   matrial: 'MDF',
  //   description:
  //     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  // },
  // {
  //   id: 13,
  //   name: 'Plymouth TV Unit',
  //   price: 36999,
  //   quantity: 1,
  //   imgURL:
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalwgeKT4Ggf7YU4GUUHdPkeJeFUlNmnzWog&usqp=CAU',
  //   categoryID: 3,
  //   discount:20,

  //   matrial: 'wood',
  //   description:
  //     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  // },  {
  //   id: 14,
  //   name: 'Accent TV Unit',
  //   price: 36999,
  //   quantity: 4,
  //   imgURL:
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ6hJSzqtf0-hDj7_QndoUk-TVMUnei3otlg&usqp=CAU',
  //   categoryID: 3,
  //    discount:20,
  //   matrial: 'MDF',
  //   description:
  //     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  // },
  // {
  //   id: 15,
  //   name: 'Plymouth TV Unit',
  //   price: 36999,
  //   quantity: 10,
  //   imgURL:
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuVJqTTWLcrrgEyxM3yyYGIFRpnsEfTdefA&usqp=CAU',
  //   categoryID: 3,
  //   discount:20,
  //   matrial: 'wood',
  //   description:
  //     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  // },  {
  //   id: 16,
  //   name: 'Accent TV Unit',
  //   price: 36999,
  //   quantity: 4,
  //   imgURL:
  //   'https://media.homecentre.com/i/homecentre/163695567-163467029-HC13062022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-sqr-pdp-2x$',
  //   categoryID: 3,
  //   discount:20,
  //   matrial: 'MDF',
  //   description:
  //     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  // },
  // {
  //   id: 17,
  //   name: 'Plymouth TV Unit',
  //   price: 36999,
  //   quantity: 10,
  //   imgURL:
  //   'https://media.homecentre.com/i/homecentre/159662344-159662344-HCB1129SEP17_05-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-sqr-pdp-2x$',
  //   categoryID: 3,
  //   discount:20,

  //   matrial: 'wood',
  //   description:
  //     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  // },  {
  //   id: 18,
  //   name: 'Accent TV Unit',
  //   price: 36999,
  //   quantity: 8,
  //   imgURL:
  //   'https://media.homecentre.com/i/homecentre/155722092-155722092-HCB55OCT15_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-sqr-pdp-2x$',
  //   categoryID: 3,
  //   discount:20,
  //   matrial: 'MDF',
  //   description:
  //     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  // },
  // {
  //   id: 19,
  //   name: 'Plymouth TV Unit',
  //   price: 36999,
  //   quantity: 10,
  //   imgURL:
  //   'https://media.homecentre.com/i/homecentre/ROW2-MDB2-WEB-URBANLOFT-MAY31_2x?$banimg-d-tc-3$&$quality-standard$&fmt=auto',
  //   categoryID: 3,
  //   discount:20,

  //   matrial: 'wood',
  //   description:
  //     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  // },  {
  //   id: 20,
  //   name: 'Accent TV Unit',
  //   price: 36999,
  //   quantity: 4,
  //   imgURL:
  //   'https://media.homecentre.com/i/homecentre/162339573-162339573-HC09082020_03-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-sqr-pdp-2x$',
  //   categoryID: 3,
  //   discount:20,

  //   matrial: 'MDF',
  //   description:
  //     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  // },
  //   {
  //     id: 1,
  //     name: 'Odense 8-Seater Top Dining Table',
  //     price: 21500,
  //     quantity: 0,
  //     imgURL:
  //       'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
  //     categoryID: 1,
  //     discount:20,
  //     matrial: 'Engineered Wood',
  //     description:
  //       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  //   },
  //   {
  //     id: 2,
  //     name: 'Trixia 4-Seater Glass Dining Table',
  //     price: 30000,
  //     quantity: 8,
  //     imgURL:
  //       'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
  //     categoryID: 1,
  //     discount:20,
  //     matrial: 'Metal',
  //     description:
  //       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  //   },
  //   {
  //     id: 3,
  //     name: 'Gasha Marble Top Side Table',
  //     price: 14000,
  //     quantity: 10,
  //     imgURL:
  //       'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
  //     categoryID: 1,  discount:20,

  //     matrial: 'Metal',
  //     description:
  //       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  //   },
  //   {
  //     id: 4,
  //     name: 'Ventura Fabric Dining Chair',
  //     price: 1500,
  //     quantity: 2,
  //     imgURL:
  //       'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
  //     categoryID: 2,
  //     discount:20,
  //     matrial: 'Upholstered Seating',
  //     description:
  //       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  //   },
  //   {
  //     id: 5,
  //     name: 'Ventura Fabric Dining Chair',
  //     price: 1500,
  //     quantity: 2,
  //     imgURL:
  //       'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
  //     categoryID: 2,
  //     discount:50,
  //     matrial: 'Upholstered Seating',
  //     description:
  //       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  //   },
  //   {
  //     id: 6,
  //     name: 'Boston Study Chair',
  //     price: 1000,
  //     quantity: 10,
  //     imgURL:
  //       'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
  //     categoryID: 2,
  //     discount:20,
  //     matrial: 'Upholstered Seating',
  //     description:
  //       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  //   },
  //   {
  //     id: 7,
  //     name: 'Coby Extendable TV Unit',
  //     price: 13000,
  //     quantity: 0,
  //     imgURL:
  //       'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
  //     categoryID: 3,  discount:20,

  //     matrial: 'Wood',
  //     description:
  //       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  //   },
  //   {
  //     id: 8,
  //     name: 'Accent TV Unit',
  //     price: 36999,
  //     quantity: 4,
  //     imgURL:
  //       'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
  //     categoryID: 3,
  //     discount:30,
  //     matrial: 'MDF',
  //     description:
  //       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  //   },
  //   {
  //     id: 9,
  //     name: 'Plymouth TV Unit',
  //     price: 36999,
  //     quantity: 1,
  //     imgURL:
  //       'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
  //     categoryID: 3,
  //     discount:60,
  //     matrial: 'wood',
  //     description:
  //       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
];

export default productList;

const productsData = [
    {
      id: 1,
      title: 'Peter Odor Rumbo High-Top | XY',
      price: 29.9,
      images: [
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_b3b53ce0-9bdb-465b-a08f-87cfa32acd30_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_d68a97a0-d094-4257-94de-bec916b95438_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter-ALL_600x.png?v=1600112365',
      ],
      image: 'https://m.media-amazon.com/images/I/41p8FiLGtrL._AC_UL320_.jpg',
      rating: 3,
    },
    {
      id: 2,
      title: 'the lean starup',
      price: 29.9,
      images: [
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_b3b53ce0-9bdb-465b-a08f-87cfa32acd30_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_d68a97a0-d094-4257-94de-bec916b95438_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter-ALL_600x.png?v=1600112365',
      ],
      image: 'https://m.media-amazon.com/images/I/71dgL2MCxEL._AC_SL1500_.jpg',
      rating: 4,
    },
    {
      id: 3,
      title: 'the lean starup',
      price: 29.9,
      images: [
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_b3b53ce0-9bdb-465b-a08f-87cfa32acd30_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_d68a97a0-d094-4257-94de-bec916b95438_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter-ALL_600x.png?v=1600112365',
      ],
      image: 'https://m.media-amazon.com/images/I/81T2hqIGyJL._AC_SL1500_.jpg',
      rating: 2,
    },
    {
      id: 4,
      title: 'the lean starup',
      price: 29.9,
      images: [
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_b3b53ce0-9bdb-465b-a08f-87cfa32acd30_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_d68a97a0-d094-4257-94de-bec916b95438_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter-ALL_600x.png?v=1600112365',
      ],
      image: 'https://m.media-amazon.com/images/I/712Kf43qj4L._AC_SL1500_.jpg',
      rating: 1,
    },
    {
      id: 5,
      title: 'the lean starup',
      price: 29.9,
      images: [
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_b3b53ce0-9bdb-465b-a08f-87cfa32acd30_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_d68a97a0-d094-4257-94de-bec916b95438_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter-ALL_600x.png?v=1600112365',
      ],
      image: 'https://m.media-amazon.com/images/I/41p8FiLGtrL._AC_UL320_.jpg',
      rating: 5,
    },
    {
      id: 6,
      title: 'the lean starup',
      price: 29.9,
      images: [
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_b3b53ce0-9bdb-465b-a08f-87cfa32acd30_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_d68a97a0-d094-4257-94de-bec916b95438_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter-ALL_600x.png?v=1600112365',
      ],
      image: 'https://m.media-amazon.com/images/I/41p8FiLGtrL._AC_UL320_.jpg',
      rating: 5,
    },
    {
      id: 7,
      title: 'the lean starup',
      price: 29.9,
      images: [
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_b3b53ce0-9bdb-465b-a08f-87cfa32acd30_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_d68a97a0-d094-4257-94de-bec916b95438_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter-ALL_600x.png?v=1600112365',
      ],
      image: 'https://m.media-amazon.com/images/I/71dgL2MCxEL._AC_SL1500_.jpg',
      rating: 5,
    },
    {
      id: 8,
      title: 'the lean starup',
      price: 29.9,
      images: [
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_b3b53ce0-9bdb-465b-a08f-87cfa32acd30_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_d68a97a0-d094-4257-94de-bec916b95438_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter-ALL_600x.png?v=1600112365',
      ],
      image: 'https://m.media-amazon.com/images/I/81T2hqIGyJL._AC_SL1500_.jpg',
      rating: 4,
    },
    {
      id: 9,
      title: 'the lean starup',
      price: 29.9,
      images: [
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_b3b53ce0-9bdb-465b-a08f-87cfa32acd30_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo-HB_d68a97a0-d094-4257-94de-bec916b95438_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter_600x.png?v=1600112365',
        'https://cdn.shopify.com/s/files/1/0396/7657/5900/products/Rumbo_Peter-ALL_600x.png?v=1600112365',
      ],
      image: 'https://m.media-amazon.com/images/I/712Kf43qj4L._AC_SL1500_.jpg',
      rating: 2,
    },
]
export {productsData}
const products = [
  {
    _id: "60e09795099de0bee6db07eb",
    image: "https://images.vans.com/is/image/Vans/FQX7VJ-HERO?$330x330$",
        price: 200,
    name: "Anaheim Needlework T-Shirt",
    quality: 5,
    desc: "Pulling from the archives and celebrating our history, the Needlework Anaheim Factory Collection throws it back to the mid-1970s through the late 1980s, when Vans Needlework shoes were a popular phenomenon of the company’s ability to create custom-made footwear for customers who brought in their own fabrics.",
  },
  {
    _id: "60e09795aa0fc562727edbba",
    image:
      "https://images.vans.com/is/image/Vans/4F29GL-HERO?$330x330$",
    price: 349,
    name: "Anaheim Factory Authentic 44 DX",
    quality: 5,
    desc: "Honoring the individualism and handicraft of Needlework art, the Needlework Anaheim Factory Authentic 44 DX uses a loose woven canvas similar to what you would find on a Needlework kit. Along with whimsical heritage screenprints, select embroidery, and a grid that encourages your own custom embroidery skills to flourish, this classic low top style uplifts the “We started, you finished. . .” concept, so that you can create, have fun, and make this style entirely your own.",
  },

  {
    _id: "60e09795584e59006fc6eec1",
    image: "https://images.vans.com/is/image/Vans/JO7BLK-HERO?$330x330$",
        price: 342,
    name: "Anaheim Needlework Wash Floral Long Sleeve BFF Tee",
    quality: 3,
    desc: "Honoring the individualism and handicraft of Needlework art, the Anaheim Needlework Wash Floral Long Sleeve Boyfriend Tee features whimsical heritage embroidery that harkens back to that time and the unique, custom expression of creativity."
  },
  {
    _id: "60e09795d5e0fb389d2a954a",
    image: "https://images.vans.com/is/image/Vans/JGO7VJ-HERO?$583x583$",
    price: 335,
    name: "ANAHEIM NEEDLEWORK JACKET",
    quality: 4,
    desc: "Pulling from the archives and celebrating our history, the Needlework Anaheim Factory Collection throws it back to the mid-1970s through the late 1980s, when Vans Needlework shoes were a popular phenomenon of the company’s ability to create custom-made footwear for customers who brought in their own fabrics.",
  },
  {
    _id: "60e09795db483c3062df3c11",
    image:
      "https://assets.awwwards.com/awards/media/cache/thumb_834_598/external/2021/03/605db538f2fd1587872785.jpg",
    price: 329,
    name: "ANAHEIM NEEDLEWORK TOTE BAG",
    quality: 5,
    desc: "Honoring the individualism and handicraft of Needlework art, the Anaheim Needlework Tote features whimsical heritage embroidery that harkens back to that time and the unique, custom expression of creativity. This medium-sized tote bag also includes a drop-in zip closure and removeable shoulder strap.",
  },


  {
    _id: "60e0979545853a312ab5b7d6",
    image:
      "https://images.vans.com/is/image/Vans/FQB7VJ-HERO?$330x330$",
    price: 641,
    name: "The Official Bad Boys Movie Merch Store",
    quality: 3,
    desc: "Honoring the individualism and handicraft of Needlework art, the Anaheim Needlework Boxy Floral Boyfriend Tee features whimsical heritage embroidery that harkens back to that time and the unique, custom expression of creativity. ",
  },
  {
    _id: "60e09795c44bf0c6e5232743",
    image:
      "https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2020/10/5f99a284c352f831371483.jpg",
    price: 305,
    name: "O'Neill",
    quality: 3,
    desc: "minim sit laborum cupidatat labore qui nostrud duis aliquip fugiat velit quis pariatur laboris officia esse labore voluptate dolor voluptate",
  },
  {
    _id: "60e0979547f587fe90d3f0e1",
    image:
      "https://rukminim1.flixcart.com/image/612/612/stool/a/h/a/t17-amour-original-imae6xqcqyghbs2z.jpeg?q=70",
    price: 615,
    name: "Isabel Fletcher",
    quality: 5,
    desc: "officia labore Lorem cillum incididunt consectetur exercitation dolor aliquip proident laborum non consequat sint qui qui eu excepteur reprehenderit reprehenderit",
  },
  {
    _id: "60e09795b232b5f022a79d5c",
    image:
      "https://rukminim1.flixcart.com/image/612/612/jhz5vgw0/stool/e/z/c/tree01-quick-shel-original-imaf5zuqagfz3b5s.jpeg?q=70",
    price: 347,
    name: "Maynard Morgan",
    quality: 3,
    desc: "dolor sunt cillum commodo qui laborum veniam anim tempor elit culpa culpa voluptate ut irure magna officia est commodo esse",
  },
  {
    _id: "60e097957e00f09fa632881c",
    image:
      "https://cdn.shopify.com/s/files/1/0031/5352/products/resized_Julieanne_RefCards_2018_5_copy_600x600.jpg?v=1594243460",
    price: 722,
    name: "perfect question",
    quality: 4,
    desc: "sint irure non elit proident veniam irure officia excepteur ad ullamco mollit amet Lorem ut do id nulla laboris aute",
  },
  {
    _id: "60e09795fe6ed3a9e57cd5b4",
    image:
      "https://images.vans.com/is/image/Vans/I3O7VJ-HERO?$330x330$",
    price: 564,
    name: "Vintage bag",
    quality: 5,
    desc: "A unique element of this product page includes the option to monogram your initials onto the bag. If you’re going to make a financial commitment to a high-quality bag like this, perhaps you want it to truly feel like yours, with the initials to prove it.",
  },
  {
    _id: "60e097953fd737de6e368aa4",
    image:
      "https://assets.awwwards.com/awards/images/2020/10/ecommerce-trends-thumbnail.jpg",
    price: 552,
    name: "Ecommerce Development Trends: The 2021 Edition",
    quality: 3,
    desc: "ex mollit Lorem proident pariatur enim cillum cupidatat reprehenderit est nostrud dolor irure incididunt id anim esse amet duis laborum",
  },
  {
    _id: "60e09795416dcc7244ba289e",
    image:
      "https://assets.awwwards.com/awards/images/2020/09/ecommerce-thumb.jpg",
    price: 612,
    name: "Creative and Unusual E-Commerce Experiences",
    quality: 5,
    desc: "elit irure veniam ea enim aute exercitation veniam labore Lorem sunt commodo labore ullamco et dolor consequat proident mollit sunt",
  },
  {
    _id: "60e0979526069b8b2ef255e5",
    image:
      "https://assets.awwwards.com/awards/images/2020/04/awwwards-music-thumbnail.jpg",
    price: 466,
    name: "The Quarantine Archives: Music to Help You Work Efficiently",
    quality: 3,
    desc: "ea commodo id ea amet labore incididunt anim nisi nostrud do ad nulla incididunt minim duis reprehenderit ipsum magna sint",
  },
  {
    _id: "60e097953e2c5131f66059ae",
    image:
      "https://assets.awwwards.com/awards/media/cache/thumb_834_598/external/2021/06/60daef7d0139f781773667.jpg",
    price: 332,
    name: "Priestess - Circular image slideshow",
    quality: 4,
    desc: "est amet tempor aliquip proident laboris ex pariatur laborum cillum fugiat sit exercitation culpa deserunt occaecat reprehenderit sit eu ullamco",
  },
];

export { products };
